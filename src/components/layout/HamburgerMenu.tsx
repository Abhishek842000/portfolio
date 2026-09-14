"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/content/site-config";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const chrome = document.querySelectorAll("[data-chrome]");
    const main = document.getElementById("main");
    main?.setAttribute("inert", "");
    chrome.forEach((node) => node.setAttribute("inert", ""));
    const frame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      main?.removeAttribute("inert");
      chrome.forEach((node) => node.removeAttribute("inert"));
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
      buttonRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="fixed top-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-md"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Menu"}</span>
        {open ? (
          <span className="text-2xl leading-none" aria-hidden="true">
            ×
          </span>
        ) : (
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-4 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
          </span>
        )}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[48] bg-surface/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              id="site-nav"
              aria-label="Primary"
              className="flex min-h-full flex-col justify-center gap-4 px-10 sm:gap-5 sm:px-20"
              initial={{ x: -28 }}
              animate={{ x: 0 }}
              exit={{ x: -16 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="w-fit font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.28 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
