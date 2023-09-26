import React, { useRef, useState } from "react";
import info from "../../assets/info.png";
import gallery from "../../assets/media.png";
import upload from "../../assets/upload.png";

const Media = () => {
  const mediaRef = useRef();
  const [media, setMedia] = useState([]);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setMedia([...media, selectedFile]);
    }
  };
  return (
    <div className="profileForm  bg-white rounded-2xl p-p_23 mb-7">
      <div className="flex items-center justify-start">
        <p className="text-fs_14 text-c_85 mb-2 uppercase">Media</p>
        <img src={info.src} alt="Media" />
      </div>
      <hr className="mb-6" />
      <form action="">
        <div className="mediaProfile flex flex-wrap  items-center  gap-2">
          {media.map((file, index) => (
            <img
              key={index}
              className="rounded-2xl"
              src={URL.createObjectURL(file)}
              alt={file.name}
            />
          ))}

          <div className="rounded-2xl bg-c_f5 border border-dashed border-c_54 hover:opacity-90 p-p_63">
            <img
              onClick={() => mediaRef.current.click()}
              src={upload.src}
              alt="upload"
              style={{ height: "34px", width: "34px" }}
            />
            <input
              onChange={handleFileChange}
              ref={mediaRef}
              type="file"
              accept="image/*"
              hidden
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Media;
