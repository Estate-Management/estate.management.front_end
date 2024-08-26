"use client";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import "./scroll-to-top-button.scss";
import { scrollTop } from "../../../helpers/scroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(scrollY > 100);
    };

    addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      className={`btn btn-primary btn-scroll-to-top ${
        isVisible ? "show" : "hide"
      }`}
      onClick={() => scrollTop("smooth")}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
