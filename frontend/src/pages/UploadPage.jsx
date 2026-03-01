import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadCSV } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const {
    getRootProps,
    getInputProps
  } = useDropzone({ onDrop });


  const handleUpload = async () => {

    if (!file) {
      alert("Select file");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    setProgress(30);

    await uploadCSV(formData);

    setProgress(100);

    setTimeout(() => {
      navigate("/table");
    }, 500);

  };


  return (

    <div className="center">

      <div className="uploadCard">

        <h2>Upload CSV File</h2>

        <div
          {...getRootProps()}
          className="drop"
        >

          <input {...getInputProps()} />

          {
            file
              ? <p>{file.name}</p>
              : <p>Drag & Drop CSV here</p>
          }

        </div>


        <button onClick={handleUpload}>
          Upload
        </button>


        {progress > 0 && (

          <div className="progress">

            <div
              className="bar"
              style={{
                width: progress + "%"
              }}
            />

          </div>

        )}

      </div>

    </div>

  );

}