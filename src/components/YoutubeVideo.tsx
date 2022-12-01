import React from "react";

export default ({ src }: { src: string }) => (
  <div style={{ textAlign: "center", marginBottom: "3vh" }}>
    <iframe
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
