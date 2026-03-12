import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let t = 0;

    function draw() {
      ctx.fillStyle = "#0b0b0b"; // warna background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,0.05)";

        for (let x = 0; x < canvas.width; x++) {
          let y =
            canvas.height / 2 + Math.sin(x * 0.01 + t + i * 0.2) * 40 + i * 8;

          ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      t += 0.01;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} className="wave-bg"></canvas>;
}
