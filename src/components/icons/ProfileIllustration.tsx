"use client";

import { useEffect, useRef } from "react";

export function ProfileIllustration() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const leftEyeRef = useRef<SVGGElement | null>(null);
  const rightEyeRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;

    if (!svg || !leftEye || !rightEye) {
      return;
    }

    let pointerX = 0;
    let pointerY = 0;
    let hasPointer = false;
    let frameId = 0;

    const target = {
      leftX: 0,
      leftY: 0,
      rightX: 0,
      rightY: 0
    };

    const current = {
      leftX: 0,
      leftY: 0,
      rightX: 0,
      rightY: 0
    };

    const eyeCenters = {
      left: { x: 139, y: 209 },
      right: { x: 187, y: 209 }
    };

    const maxOffset = 2.8;

    const getOffset = (eyeX: number, eyeY: number, rect: DOMRect) => {
      const screenX = rect.left + (eyeX / 320) * rect.width;
      const screenY = rect.top + (eyeY / 380) * rect.height;

      const dx = pointerX - screenX;
      const dy = pointerY - screenY;
      const distance = Math.hypot(dx, dy) || 1;
      const clamped = Math.min(maxOffset, distance / 16);
      const ratio = clamped / distance;

      return {
        x: dx * ratio,
        y: dy * ratio
      };
    };

    const animate = () => {
      if (hasPointer) {
        const rect = svg.getBoundingClientRect();
        const leftOffset = getOffset(eyeCenters.left.x, eyeCenters.left.y, rect);
        const rightOffset = getOffset(eyeCenters.right.x, eyeCenters.right.y, rect);

        target.leftX = leftOffset.x;
        target.leftY = leftOffset.y;
        target.rightX = rightOffset.x;
        target.rightY = rightOffset.y;
      } else {
        target.leftX = 0;
        target.leftY = 0;
        target.rightX = 0;
        target.rightY = 0;
      }

      current.leftX += (target.leftX - current.leftX) * 0.2;
      current.leftY += (target.leftY - current.leftY) * 0.2;
      current.rightX += (target.rightX - current.rightX) * 0.2;
      current.rightY += (target.rightY - current.rightY) * 0.2;

      leftEye.setAttribute("transform", `translate(${current.leftX.toFixed(3)} ${current.leftY.toFixed(3)})`);
      rightEye.setAttribute("transform", `translate(${current.rightX.toFixed(3)} ${current.rightY.toFixed(3)})`);

      frameId = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: MouseEvent) => {
      hasPointer = true;
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const onPointerLeave = () => {
      hasPointer = false;
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseout", onPointerLeave);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseout", onPointerLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 320 380" xmlns="http://www.w3.org/2000/svg" className="profile-illustration" aria-hidden="true">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1c26" />
          <stop offset="100%" stopColor="#0f0f18" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8956c" />
          <stop offset="100%" stopColor="#a8754c" />
        </linearGradient>
        <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a3a" />
          <stop offset="100%" stopColor="#18181f" />
        </linearGradient>
        <radialGradient id="glowGrad" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#7fff8c" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <clipPath id="frameClip">
          <rect width="320" height="380" rx="4" />
        </clipPath>
      </defs>
      <g clipPath="url(#frameClip)">
        <rect width="320" height="380" fill="url(#bgGrad)" />
        <rect width="320" height="380" fill="url(#glowGrad)" />
        <g opacity="0.1" stroke="#7fff8c" strokeWidth="0.5">
          <line x1="0" y1="60" x2="320" y2="60" />
          <line x1="0" y1="120" x2="320" y2="120" />
          <line x1="0" y1="180" x2="320" y2="180" />
          <line x1="0" y1="240" x2="320" y2="240" />
          <line x1="0" y1="300" x2="320" y2="300" />
          <line x1="60" y1="0" x2="60" y2="380" />
          <line x1="120" y1="0" x2="120" y2="380" />
          <line x1="180" y1="0" x2="180" y2="380" />
          <line x1="240" y1="0" x2="240" y2="380" />
        </g>
        <ellipse cx="160" cy="420" rx="130" ry="120" fill="url(#shirtGrad)" />
        <rect x="60" y="300" width="200" height="120" fill="#22222e" />
        <polygon points="160,295 140,320 160,315 180,320" fill="#2e2e40" />
        <rect x="143" y="255" width="34" height="55" rx="10" fill="url(#skinGrad)" />
        <ellipse cx="160" cy="210" rx="68" ry="78" fill="url(#skinGrad)" />
        <ellipse cx="160" cy="148" rx="68" ry="44" fill="#1a0e08" />
        <ellipse cx="100" cy="178" rx="26" ry="34" fill="#1a0e08" />
        <ellipse cx="220" cy="178" rx="26" ry="34" fill="#1a0e08" />
        <ellipse cx="94" cy="215" rx="10" ry="14" fill="#b8855c" />
        <ellipse cx="226" cy="215" rx="10" ry="14" fill="#b8855c" />
        <ellipse cx="136" cy="208" rx="14" ry="10" fill="white" />
        <ellipse cx="184" cy="208" rx="14" ry="10" fill="white" />
        <g ref={leftEyeRef}>
          <circle cx="139" cy="209" r="7" fill="#2a1a10" />
          <circle cx="141" cy="207" r="2.5" fill="white" />
        </g>
        <g ref={rightEyeRef}>
          <circle cx="187" cy="209" r="7" fill="#2a1a10" />
          <circle cx="189" cy="207" r="2.5" fill="white" />
        </g>
        <path d="M122 196 Q136 190 150 194" stroke="#1a0e08" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M170 194 Q184 190 198 196" stroke="#1a0e08" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M156 218 Q152 234 158 238 Q162 240 166 238 Q172 234 164 218" fill="#b0754a" opacity="0.6" />
        <path d="M144 252 Q160 264 176 252" stroke="#8a5535" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="290" cy="30" r="3" fill="#7fff8c" opacity="0.7" />
        <circle cx="30" cy="350" r="2" fill="#4af0ff" opacity="0.5" />
        <line x1="0" y1="0" x2="30" y2="0" stroke="#7fff8c" strokeWidth="2" opacity="0.6" />
        <line x1="0" y1="0" x2="0" y2="30" stroke="#7fff8c" strokeWidth="2" opacity="0.6" />
        <line x1="320" y1="380" x2="290" y2="380" stroke="#4af0ff" strokeWidth="2" opacity="0.6" />
        <line x1="320" y1="380" x2="320" y2="350" stroke="#4af0ff" strokeWidth="2" opacity="0.6" />
      </g>
    </svg>
  );
}
