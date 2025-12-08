import React, { useEffect, useRef } from "react";

// Опишіть Props
interface Props {
  children: React.ReactNode;
  onContentEndVisible: () => void;
}

export function Observer({ children, onContentEndVisible }: Props) {
  // Вкажіть правильний тип для useRef
  const endContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Вкажіть правильний тип для options
    const options: IntersectionObserverInit = {
      rootMargin: "0px",
      threshold: 1.0,
      root: null,
    };

    // IntersectionObserver - це конструктор, який має глобальний тип
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Ми перевіряємо, що елемент перетинає область видимості (intersectionRatio > 0)
        // або, простіше, за допомогою isIntersecting
        if (entry.isIntersecting) {
          onContentEndVisible();
          observer.disconnect(); // Відключаємо спостерігач після спрацювання
        }
      });
    }, options);

    if (endContentRef.current) {
      observer.observe(endContentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [onContentEndVisible]);

  return (
    <div>
      {children}
      <div ref={endContentRef} />
    </div>
  );
}
