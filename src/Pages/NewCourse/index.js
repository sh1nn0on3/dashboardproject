import React, { useState } from "react";
import { Form, Input, Button, Space, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Editor } from "@tinymce/tinymce-react";

import { getInventory, getOrders } from "../../API";

function Orders() {
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    // Gửi yêu cầu thêm bài học
    const dataToSend = {
      ...values,
      description: editorContent,
    };
    console.log(dataToSend);
    setLoading(false);
    form.resetFields();
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="courseName"
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
        name="description"
        label="Mô tả"
        rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item
        name="red"
        label="Mô tả Tấn công (Red)"
        rules={[{ required: true, message: "Mô tả Tấn công (Red)" }]}
      >
        <Editor
          // initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 300,
            menubar: "favs file edit view insert format tools table help",
            plugins: [
              "advlist autolink link image lists charmap print preview hr anchor pagebreak",
              "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
              "table emoticons template paste help",
            ],
            toolbar:
              "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | link image | print preview media fullscreen | " +
              "forecolor backcolor emoticons | help",
            menu: {
              favs: {
                title: "My Favorites",
                items: "code visualaid | searchreplace | emoticons",
              },
            },
            // content_css: "css/content.css",
          }}
          value={editorContent}
          onEditorChange={handleEditorChange}
        />
      </Form.Item>

      <Form.Item
        name="blue"
        label="Mô tả Phòng thủ (blue)"
        rules={[{ required: true, message: "Mô tả Phòng thủ (blue)" }]}
      >
        <Editor
          // initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 300,
            menubar: "favs file edit view insert format tools table help",
            plugins: [
              "advlist autolink link image lists charmap print preview hr anchor pagebreak",
              "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
              "table emoticons template paste help",
            ],
            toolbar:
              "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | link image | print preview media fullscreen | " +
              "forecolor backcolor emoticons | help",
            menu: {
              favs: {
                title: "My Favorites",
                items: "code visualaid | searchreplace | emoticons",
              },
            },
            // content_css: "css/content.css",
          }}
          value={editorContent}
          onEditorChange={handleEditorChange}
        />
      </Form.Item>

      <Form.Item
        name="protect"
        label="Mô tả cách phòng chống (Protect)"
        rules={[{ required: true, message: "Mô tả cách phòng chống (Protect)" }]}
      >
        <Editor
          // initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 300,
            menubar: "favs file edit view insert format tools table help",
            plugins: [
              "advlist autolink link image lists charmap print preview hr anchor pagebreak",
              "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
              "table emoticons template paste help",
            ],
            toolbar:
              "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | link image | print preview media fullscreen | " +
              "forecolor backcolor emoticons | help",
            menu: {
              favs: {
                title: "My Favorites",
                items: "code visualaid | searchreplace | emoticons",
              },
            },
            // content_css: "css/content.css",
          }}
          value={editorContent}
          onEditorChange={handleEditorChange}
        />
      </Form.Item>

      <Form.Item className="mt-10">
        <Button type="primary" htmlType="submit" loading={loading} className="text-gray-500">
          Thêm bài học
        </Button>
        <Button onClick={form.resetFields}>Hủy</Button>
      </Form.Item>
    </Form>
  );
}
export default Orders;
