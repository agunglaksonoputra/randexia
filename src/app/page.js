"use client";

import MainLayout from "@layouts/MainLayout";
import { useRef } from "react";
import HeroSection from "@app/home/HeroSection";
import ToolsSection from "@app/home/ToolsSection";
import FeaturesSection from "@app/home/AboutSection";

export default function HomePage() {
  const homeRef = useRef(null);
  const toolsRef = useRef(null);
  const aboutRef = useRef(null);

  const handleNavigate = (section) => {
    const map = {
      home: homeRef,
      tools: toolsRef,
      about: aboutRef,
    };

    const target = map[section]?.current;
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <MainLayout onNavigate={handleNavigate}>
      <HeroSection ref={homeRef} onNavigate={handleNavigate} />
      <ToolsSection ref={toolsRef} />
      <FeaturesSection ref={aboutRef} />
    </MainLayout>
  );
}
