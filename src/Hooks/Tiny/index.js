import { Editor } from "@tinymce/tinymce-react";
import { Form } from "antd";

const Tiny = ({ name, label, message, value, setValue }) => {
  return (
    <div className="mt-10">
      <Form.Item
        name={name}
        label={label}
        rules={[{ required: true, message: { message } }]}
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
          value={value}
          onEditorChange={(content) => {
            setValue(content);
          }}
        />
      </Form.Item>
    </div>
  );
};

export default Tiny;
