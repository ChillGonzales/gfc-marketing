"use client";

import { useCallback, useRef, useState } from "react";
import useOnScreen from "@/app/hooks/useOnScreen";

export default function AnimatedElement({ animationClass, children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const onScreenVisible = useOnScreen(ref);

  if (!visible && onScreenVisible) {
    setVisible(true);
  }

  return (
    <div
      ref={ref}
      className={visible ? `${animationClass} visible delay-150` : "invisible"}
    >
      {children}
    </div>
  );
}
