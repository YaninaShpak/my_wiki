import { ReactNode } from "react";

export default function TopicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      {children}
    </div>
  );
}