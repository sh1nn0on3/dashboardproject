import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";

const Tiny = () => {
  const editorRef = useRef();

  const [demo, setDemo] = useState("");
  console.log("🚀 ~ file: index.jsx:8 ~ Tiny ~ demo:", demo);

  const handleEditorChange = (content, editor) => {
    // console.log("Nội dung mới:", content);
    setDemo(content);
  };

  return (
    <div className="w-full bg-red-100 flex flex-col justify-center items-center">
      {/* <Editor onInit={(evt, editor) => (editorRef.current = editor)} /> */}
      <Editor
        // apiKey="YOUR_API_KEY" // Thay YOUR_API_KEY bằng API key của bạn
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
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default Tiny;
