'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import BottomNav from "@/components/BottomNav";

const backgroundByPathname: Record<string, string> = {
  "/": "bg-home",
  "/about": "bg-about",
  "/projects": "bg-projects",
  "/contact": "bg-contact",
  "*": "bg-foreground",
};

const navBgByPathname: Record<string, string> = {
  "/": "bg-homenav",
  "/about": "bg-aboutnav",
  "/projects": "bg-projectsnav",
  "/contact": "bg-contactnav",
  "*": "bg-foreground",
};

const navAltBgByPathname: Record<string, string> = {
  "/": "shadow-homenav-alt",
  "/about": "shadow-aboutnav-alt",
  "/projects": "shadow-projectsnav-alt",
  "/contact": "shadow-contactnav-alt",
  "*": "shadow-foreground",
};

const bottomNavBgByPathname: Record<string, string> = {
  "/": "bg-homenav-alt",
  "/about": "bg-aboutnav-alt",
  "/projects": "bg-projectsnav-alt",
  "/contact": "bg-contactnav-alt",
  "*": "bg-foreground-alt",
};

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [backgroundClass, setBackgroundClass] = useState(backgroundByPathname["*"]);
  const [navBgClass, setNavBgClass] = useState(navBgByPathname["*"]);
  const [navAltBgClass, setNavAltBgClass] = useState(navAltBgByPathname["*"]);
  const [bottomNavBgClass, setBottomNavBgClass] = useState(bottomNavBgByPathname["*"]);

  useEffect(() => {
    const bgClass = backgroundByPathname[pathname] || backgroundByPathname["*"];
    const navClass = navBgByPathname[pathname] || navBgByPathname["*"];
    const navAltClass = navAltBgByPathname[pathname] || navAltBgByPathname["*"];
    setBackgroundClass(bgClass);
    setNavBgClass(navClass);
    setNavAltBgClass(navAltClass);
    setBottomNavBgClass(bottomNavBgByPathname[pathname] || bottomNavBgByPathname["*"]);
  }, [pathname]);

  return (
    <div className={`transition-colors duration-300 ease-in-out ${backgroundClass} h-dvh`}>
      <NavBar bgClass={navBgClass} altBgClass={navAltBgClass} />
      {children}
      <BottomNav bgClass={bottomNavBgClass} altBgClass={navBgClass} pathname={pathname} />
    </div>
  );
}