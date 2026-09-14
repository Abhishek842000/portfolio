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
          className="fixed inset-0 z-[45] flex flex-col bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div className="flex items-center justify-between gap-2 px-4 py-5 pl-[4.75rem] sm:gap-4 sm:px-12 sm:pl-24">
            <h2
              id="resume-modal-title"
              className="font-display text-lg font-bold tracking-[0.14em] uppercase sm:text-2xl sm:tracking-[0.18em]"
            >
              Resume
            </h2>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <a
                href={src}
                download="Abhishek_Deshpande_Resume.pdf"
                className="rounded-full bg-ink px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-white uppercase sm:px-5 sm:text-xs"
              >
                Download
              </a>
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center text-2xl leading-none text-muted"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
          <div className="min-h-0 flex-1 px-4 pb-6 sm:px-10 sm:pb-8">
            <iframe
              title="Resume PDF"
              src={`${src}#toolbar=1&navpanes=1&view=FitH`}
              className="h-full w-full rounded-2xl bg-[#2b2b2b] shadow-[0_16px_40px_rgba(17,17,20,0.18)]"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
