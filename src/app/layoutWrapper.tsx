'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/globals.css";

const backgroundByPathname: Record<string, string> = {
  "/": "bg-home",
  "/about": "bg-about",
  "/projects": "bg-projects",
  "/contact": "bg-contact",
  "*": "bg-foreground",
};

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [backgroundClass, setBackgroundClass] = useState(backgroundByPathname["*"]);

  useEffect(() => {
    const bgClass = backgroundByPathname[pathname] || backgroundByPathname["*"];
    setBackgroundClass(bgClass);
  }, [pathname]);

  return (
    <div className={`transition-colors duration-300 ease-in-out ${backgroundClass} min-h-screen`}>
      {children}
    </div>
  );
}