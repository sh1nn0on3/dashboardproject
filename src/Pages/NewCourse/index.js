import React, { useState } from "react";
import { Form, Input, Button, Space, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Editor } from "@tinymce/tinymce-react";

import { getInventory, getOrders } from "../../API";
import Tiny from "../../Hooks/Tiny";

function Orders() {
  const [form] = Form.useForm();
  const [risk, setRisk] = useState("");
  const [red, setRed] = useState("");
  const [blue, setBlue] = useState("");
  const [protect, setprotect] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    // Gửi yêu cầu thêm bài học
    const dataToSend = {
      ...values,
      risk: risk,
      red: red,
      blue: blue,
      protect: protect,
    };
    console.log(dataToSend);
    setLoading(false);
    form.resetFields();
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="name"
        label="Tên khóa học"
        rules={[{ required: true, message: "Vui lòng nhập tên khóa học" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="image"
        label="Ảnh"
        rules={[{ required: true, message: "Vui lòng tải lên ảnh" }]}
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload beforeUpload={() => false} listType="picture">
          <Button icon={<UploadOutlined />}>Tải lên</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="detail"
        label="Mô tả"
        rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>

      <Tiny
        name="rick"
        label="Mô tả Rủi ro (Rick)"
        message="Mô tả Rủi ro (Rick)"
        value={risk}
        setValue={setRisk}
      />

      <Tiny
        name="red"
        label="Mô tả Tấn công (Red)"
        message="Mô tả Tấn công (Red)"
        value={red}
        setValue={setRed}
      />

      <Tiny
        name="blue"
        label="Mô tả Phòng thủ (blue)"
        message="Mô tả Phòng thủ (blue)"
        value={blue}
        setValue={setBlue}
      />

      <Tiny
        name="protect"
        label="Mô tả cách phòng chống (Protect)"
        message="Mô tả cách phòng chống (Protect)"
        value={protect}
        setValue={setprotect}
      />

      <Form.Item className="mt-10">
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          className="text-gray-500"
        >
          Thêm bài học
        </Button>
        <Button onClick={form.resetFields}>Hủy</Button>
      </Form.Item>
    </Form>
  );
}
export default Orders;
