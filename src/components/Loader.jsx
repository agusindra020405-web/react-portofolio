import React, { useEffect, useState } from "react";

const Loader = ({ size = 80, stroke = 6, color = "#f5fafd", speed = 2 }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frame;

    const animate = () => {
      setRotation((prev) => (prev + speed) % 360);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [speed]);

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg width={size} height={size}>
      <g
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "50% 50%",
        }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={`${circumference * 0.7} ${circumference}`}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Loader;
