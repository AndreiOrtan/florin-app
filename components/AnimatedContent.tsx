// AnimatedContent.js
import React, { useState, useEffect, useRef, ReactNode } from "react";
import styles from "./AnimatedContent.module.css"; // Import the CSS module for the custom animation styles

const AnimatedContentY = ({
  children,
  direction,
}: {
  children: ReactNode;
  direction: string;
}) => {
  const [showContent, setShowContent] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowContent(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as needed (0.2 means 20% of the element is visible)
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles["animated-content" + direction]} ${
        showContent ? styles["fade-in"] : ""
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedContentY;
