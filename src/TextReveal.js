import React, { useEffect, useRef } from "react";
import "./App.css";

const TextReveal = ({ scroll, before, children }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const elTopPos = elRef.current.offsetTop;
    if (scroll >= elTopPos - before) {
      elRef.current.classList.add("reveal");
    }
  }, [scroll]);

  return (
    <div ref={elRef} className="text">
      {children}
    </div>
  );
};

export default TextReveal;
