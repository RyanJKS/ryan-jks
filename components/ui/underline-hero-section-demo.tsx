"use client";

import { useState } from "react";
import Component from "@/components/ui/underline-hero-section";

export default function Demo() {
  const [message, setMessage] = useState<string>("");

  const onSignIn = () => {
    setMessage("Sign In clicked");
    setTimeout(() => setMessage(""), 3000);
  };

  const onTryForFree = () => {
    setMessage("Try for Free clicked");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      <style>{`
        .font-lobster {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-style: italic;
        }

        .demo-message {
          position: fixed;
          top: 80px;
          right: 20px;
          background: var(--foreground);
          color: var(--background);
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
          z-index: 100;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      {message && <div className="demo-message">{message}</div>}

      <Component
        brand="SaaS"
        heroClassName="font-lobster"
        onSignIn={onSignIn}
        onTryForFree={onTryForFree}
      />
    </>
  );
}
