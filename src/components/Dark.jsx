import React, { useRef, useState } from "react";

function Dark({ text }) {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const conRefDark = useRef(null);
  return (
    <div
      className="container font-CDisplay text-5xl font-semibold w-fit mx-auto leading leading-none block dark:hidden border-black"
      ref={conRefDark}
    >
      <h1>{text}</h1>
      <div
        className="dark  duration-500"
        style={{
          background: x
            ? `radial-gradient(
            circle at ${x}px ${y}px,
            transparent 5%,
            rgba(160, 160, 180, 0.2) 18%
          )`
            : null,
        }}
        onMouseMove={(e) => {
          console.log(e);
          console.log(conRefDark);
          setX(e.pageX - conRefDark.current.offsetLeft);
          setY(e.pageY - conRefDark.current.offsetTop);
        }}
        onMouseLeave={() => setX(null)}
      ></div>
    </div>
  );
}

export default Dark;
