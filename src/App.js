import "./App.css";
import React, { useEffect, useState } from "react";
import FakePic from "./FakePic";
import TextReveal from "./TextReveal";

function App() {
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ height: "150vh" }}>
      <FakePic />
      <TextReveal scroll={scrollPos} before={200}>
        <div style={{padding: 70}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </TextReveal>
      <FakePic />
      <TextReveal scroll={scrollPos} before={200}>
        <div style={{padding: 70}}>
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </TextReveal>
      <FakePic />
      <TextReveal scroll={scrollPos} before={500}>
        <div style={{padding: 70}}>
          including versions of Lorem Ipsum.
        </div>
      </TextReveal>
      <FakePic />
    </div>
  );
}

export default App;
