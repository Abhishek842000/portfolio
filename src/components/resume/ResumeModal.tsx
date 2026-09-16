"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function ResumeModal({
  open,
  onClose,
  src,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[45] flex flex-col bg-surface"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-5 pl-[4.75rem] sm:gap-4 sm:px-12 sm:py-6 sm:pl-24">
            <h2
              id="resume-modal-title"
              className="font-display text-xl font-bold tracking-[0.14em] uppercase sm:text-3xl sm:tracking-[0.16em]"
            >
              Resume
            </h2>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <a
                href={src}
                download="Abhishek_Deshpande_Resume.pdf"
                className="resume-pill inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-white uppercase sm:px-7 sm:py-3 sm:text-sm"
              >
                <span className="relative z-10">Download</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-2xl leading-none text-muted transition-[background-color,color,border-color] duration-200 hover:border-ink hover:text-ink sm:h-12 sm:w-12"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
          <div className="flex min-h-0 flex-1 justify-center px-4 pb-6 sm:px-8 sm:pb-8">
            <iframe
              title="Resume PDF"
              src={`${src}#toolbar=1&navpanes=0&scrollbar=0&view=Fit`}
              className="resume-frame h-full rounded-2xl bg-[#2b2b2b] shadow-[0_16px_40px_rgba(17,17,20,0.18)]"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
