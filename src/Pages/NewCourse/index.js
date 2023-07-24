import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Space,
  Upload,
  Modal,
  Alert,
  message,
} from "antd";
import { ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { getInventory, getOrders } from "../../API";
import Tiny from "../../Hooks/Tiny";

const { confirm } = Modal;

function Orders() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  console.log("🚀 ~ file: index.js:26 ~ Orders ~ image:", image)
  const [risk, setRisk] = useState("");
  const [attack, setAttack] = useState("");
  const [detect, setDetect] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const showConfirm = () => {
    confirm({
      title: "Xác nhận",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc chắn muốn thêm bài học?",
      okText: "Đồng ý",
      cancelText: "Hủy",
      onOk: handleSubmit,
    });
  };

  const handleSubmit = (values) => {
    setLoading(true);
    // Gửi yêu cầu thêm bài học

    // console.log(dataToSend);
    // setLoading(false);
    // form.resetFields();
    const dataToSend = {
      name: name,
      image: image,
      description: description,
      risk: risk,
      attack: attack,
      detect: detect,
      recommendation: recommendation,
    };
    console.log(dataToSend);
    setLoading(false);
    form.resetFields();
    setShowSuccess(true);
    message.success("Thêm bài học thành công");
    navigate("/inventory");
  };

  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          value={name}
          getValueFromEvent={(e) => setName(e.target.value)}
          label="Tên khóa học"
          rules={[{ requiattack: true, message: "Vui lòng nhập tên khóa học" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="image"
          label="Ảnh"
          rules={[{ requiattack: true, message: "Vui lòng tải lên ảnh" }]}
          valuePropName="fileList"
          getValueFromEvent={(e) => setImage(e.fileList)}
        >
          <Upload beforeUpload={() => false} listType="picture">
            <Button icon={<UploadOutlined />}>Tải lên</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả"
          value={description}
          getValueFromEvent={(e) => setDescription(e.target.value)}
          rules={[{ requiattack: true, message: "Vui lòng nhập mô tả" }]}
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
          name="attack"
          label="Mô tả Tấn công (attack)"
          message="Mô tả Tấn công (attack)"
          value={attack}
          setValue={setAttack}
        />

        <Tiny
          name="detect"
          label="Mô tả Phòng thủ (detect)"
          message="Mô tả Phòng thủ (detect)"
          value={detect}
          setValue={setDetect}
        />

        <Tiny
          name="recommendation"
          label="Mô tả cách phòng chống (recommendation)"
          message="Mô tả cách phòng chống (recommendation)"
          value={recommendation}
          setValue={setRecommendation}
        />

        <Form.Item className="mt-10">
          <Button
            type="primary"
            loading={loading}
            className="text-gray-500"
            onClick={showConfirm}
            disabled={showSuccess}
          >
            Thêm bài học
          </Button>
          <Button onClick={form.resetFields}>Hủy</Button>
        </Form.Item>
      </Form>
      {showSuccess && (
        <div style={{ margin: "20px 0" }}>
          <Alert message="Thêm bài học thành công" type="success" />
        </div>
      )}
    </>
  );
}
export default Orders;
