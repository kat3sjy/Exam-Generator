import "./FileUploader.css";
import React, { useState } from "react";

function FileUploader() {

  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files){
      const file = e.target.files[0];
    };
  };

  return (
    <div>
      <label htmlFor="fileUpload" className="file-uploader">Upload File</label>
      <input type="file" id="fileUpload" name="fileUpload" style={{ display: "none" }} onChange={handleFileChange}/>
    </div>
  );
}

export default FileUploader;