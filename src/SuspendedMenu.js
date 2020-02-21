import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

const normalizePosition = () => {
  let x = 50;
  let y = 50;
  let r = JSON.parse(localStorage.getItem("positions"));

  if (r) {
    x = r.x;
    y = r.y;
  }

  return [x, y];
};

const SuspendMenu = props => {
  const [position, setPosition] = useState(normalizePosition());
  const [isDragging, setIsDragging] = useState(false);
  const refContainer = useRef(null);
  const SuspendMenuContent = props => (
    <div
      className="suspended-menu"
      style={{
        left: position[0],
        top: position[1]
      }}
      onMouseDown={() => setIsDragging(true)}
    >
      <a href="/main">{props.children}</a>
    </div>
  );
  useEffect(() => {
    refContainer.current = { position, isDragging };
  }, [position, isDragging]);

  normalizePosition();

  useEffect(() => {
    function handleMouseMove(e) {
      const { isDragging, position } = refContainer.current;
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        const newX = position[0] + e.movementX;
        const newY = position[1] + e.movementY;
        setPosition([newX, newY]);
        localStorage.setItem("positions", JSON.stringify({ x: newX, y: newY }));
      }
    }
    function handleMouseUp() {
      setIsDragging(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return <SuspendMenuContent>{props.children}</SuspendMenuContent>;
};

export default SuspendMenu;
