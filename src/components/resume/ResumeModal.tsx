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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close resume"
            onClick={onClose}
          />
          <motion.div
            className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28 }}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2
                id="resume-modal-title"
                className="font-display text-2xl tracking-tight"
              >
                Resume
              </h2>
              <div className="flex items-center gap-3">
                <a
                  href={src}
                  download
                  className="rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase"
                >
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-2xl leading-none text-muted"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            <iframe
              title="Resume PDF"
              src={`${src}#view=FitH`}
              className="h-full w-full bg-card"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
