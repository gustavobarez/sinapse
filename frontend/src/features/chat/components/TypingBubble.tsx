import { useState, useEffect } from "react";
import { Card } from "@components/ui/card";

export function TypingBubble({ sender }: { sender: "user" | "system" }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") {
          return ".";
        }
        return prev + ".";
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      className={`mb-2 max-w[70%] ${
        sender === "user"
          ? "self-end bg-primary text-primary-foreground"
          : "self-start bg-muted text-muted-foreground"
      }`}
    >
      <div className="p-3">
        <span className="text-xl">{dots}</span>
      </div>
    </Card>
  );
}
