import React, { useState } from "react";
import Cropper from "react-easy-crop";
import "./styles.css";

export default function App() {
  const [image] = useState("https://placehold.co/800x600");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropSize] = useState({ width: 400, height: 300 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (_croppedArea: any, croppedAreaPixels: any) => {
    console.log("onCropComplete fired");
  };

  const handleCenterX = () => {
    console.log("Image centered X , but no crop event triggered.");
    setCrop((prev) => ({ ...prev, x: 0 }));
  };

  const handleCenterY = () => {
    console.log("Image centered Y, but no crop event triggered.");
    setCrop((prev) => ({ ...prev, y: 0 }));
  };

  return (
    <div className="container">
      <div className="crop-container">
        <Cropper
          image={image}
          crop={crop}
          cropSize={cropSize}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          aspect={4 / 3}
          restrictPosition={false}
        />
      </div>
      <button onClick={handleCenterX}>Center Image X</button>
      <button onClick={handleCenterY}>Center Image Y</button>
      <div>
        <p>Cropped Area Pixels:</p>
        <pre>{JSON.stringify(croppedAreaPixels, null, 2)}</pre>
        <p>Crop</p>
        <pre>{JSON.stringify(crop, null, 2)}</pre>
        <p>Crop Size</p>
        <pre>{JSON.stringify(cropSize, null, 2)}</pre>
      </div>
    </div>
  );
}
