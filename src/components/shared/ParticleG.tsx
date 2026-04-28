"use client";
import { useEffect, useRef } from "react";

const palette = [
  "#FDC365",
  "#FFD97D",
  "#F5A623",
  "#FFF0C2",
  "#E8881A",
  "#FFEAA0",
  "#ffffff",
];

const backgroundColor = "#1a1a1a";

type Particle = {
  color: string;
  opacity: number;
  r: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

export default function ParticleG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let particles: Particle[] = [];
    const mouse = { x: -999, y: -999 };

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    }

    function getGPixels() {
      const off = document.createElement("canvas");
      off.width = canvas.width;
      off.height = canvas.height;
      const oc = off.getContext("2d")!;
      const fontSize = Math.min(canvas.width, canvas.height) * 0.7;
      oc.fillStyle = "#fff";
      oc.font = `900 ${fontSize}px serif`;
      oc.textAlign = "center";
      oc.textBaseline = "middle";
      oc.fillText("G", canvas.width / 2, canvas.height / 2);
      const data = oc.getImageData(0, 0, canvas.width, canvas.height).data;
      const pts: { x: number; y: number }[] = [];
      const gap = 5;
      for (let y = 0; y < canvas.height; y += gap)
        for (let x = 0; x < canvas.width; x += gap)
          if (data[(y * canvas.width + x) * 4 + 3] > 128) pts.push({ x, y });
      return pts;
    }

    function init() {
      const pts = getGPixels();
      particles = pts.map((p) => ({
        tx: p.x,
        ty: p.y,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        r: Math.random() * 1.6 + 0.6,
        color: palette[Math.floor(Math.random() * palette.length)],
        opacity: 0.6 + Math.random() * 0.4,
      }));
    }

    function animate() {
      ctx.fillStyle = "rgba(26,26,26,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.vx += (p.tx - p.x) * 0.06;
        p.vy += (p.ty - p.y) * 0.06;
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 90) {
          const force = (90 - md) / 90;
          p.vx -= (mdx / md) * force * 7;
          p.vy -= (mdy / md) * force * 7;
        }
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouse.y = (e.clientY - rect.top) * (canvas.height / rect.height);
    };
    const onMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "400px",
        background: backgroundColor,
        borderRadius: "12px",
        cursor: "crosshair",
      }}
    />
  );
}
