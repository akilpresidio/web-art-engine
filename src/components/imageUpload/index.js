import React, { useState, useEffect } from "react";
import axios from "axios";

import { PromptsGenerator } from "../prompGenerator/index.js";
import uploadImg from "../../assets/cards 1.svg";
import "./index.css";

const ImageUploaderCard = ({ response, loaderStatus }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finalPrompt, setFinalPrompt] = useState(null);

  useEffect(() => {
    if (finalPrompt) {
      fetch("http://localhost:5000/", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ finalPrompt }),
      })
        .then((res) => res.json())
        .then((data) => response(data.message));
    }
  }, [finalPrompt]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateCode = () => {
    setFinalPrompt(null);
    response("");
    if (imageUploaded && !loading) {
      const apiKey = "X9J14jwmMTjZRNn00orM";
      const apiUrl = "https://detect.roboflow.com/ui-components-detection/2";
      const image = imagePreview.split(",")[1];

      setLoading(true);
      loaderStatus("true");
      axios({
        method: "POST",
        url: apiUrl,
        params: {
          api_key: apiKey,
        },
        data: image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (response) {
          // setRoboflowData(response.data);
          setFinalPrompt(PromptsGenerator(response.data));
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error.message);
          setLoading(false);
          loaderStatus("false");
        });
    }
  };

  const handleResetInput = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.value = "";
    setFinalPrompt(null);
    setImagePreview(null);
    setImageUploaded(false);
  };

  return (
    <div className="image-uploader-card">
      <div className="upload-card">
        {!imagePreview && (
          <div className="card-header">
            <img src={uploadImg} height={"100px"} />
          </div>
        )}
        <div className="card-content">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="fileInput"
          />
          {imagePreview ? (
            <div className="image-preview">
              <img src={imagePreview} alt="Uploaded" />
            </div>
          ) : (
            <label htmlFor="fileInput">
              <span>Drag & Drop your image here to generate code</span>
            </label>
          )}
        </div>
        {imageUploaded && (
          <div className="card-footer">
            <>
              <button
                className={loading ? "basic" : "primary"}
                onClick={handleGenerateCode}
                disabled={loading}
              >
                Generate Code
              </button>
              <button
                className={loading ? "basic" : "secondary"}
                onClick={handleResetInput}
                disabled={loading}
              >
                Change Input
              </button>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploaderCard;
