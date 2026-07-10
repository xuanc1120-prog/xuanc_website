"use client";

import { Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
}

export default function TypewriterText({
  text,
  delay = 0,
  speed = 60,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayed, text, speed, started]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <Text
      wrap="balance"
      onBackground="neutral-weak"
      variant="heading-default-xl"
      style={{ minHeight: "2em" }}
    >
      {displayed}
      <span
        style={{
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
          fontWeight: 100,
          marginLeft: "2px",
        }}
      >
        |
      </span>
    </Text>
  );
}
