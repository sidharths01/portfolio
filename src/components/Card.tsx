import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

export default function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`rounded-sm border border-grid bg-surface-raised p-5 transition-colors duration-200 hover:border-accent/35 sm:p-6 ${className}`}
    >
      {children}
    </Tag>
  );
}