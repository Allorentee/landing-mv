import React from "react";

type HighlightProps = {
  children: React.ReactNode;
  className?: string;
};

export const Highlight: React.FC<HighlightProps> = ({
  children,
  className = "",
}) => {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      <span className="highlight-text relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20"
      >
        <span className="highlight-reflection" />
      </span>
      <style jsx>{`
        .highlight-text {
          background: linear-gradient(
            90deg,
            #000000 0%,
            #000000 40%,
            #000000 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          position: relative;
        }
        .highlight-reflection {
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
          animation: shine 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes shine {
          0% {
            left: -75%;
          }
          60% {
            left: 120%;
          }
          100% {
            left: 120%;
          }
        }
      `}</style>
    </span>
  );
};
