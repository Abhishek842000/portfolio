"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { siteConfig } from "@/content/site-config";

type ResumeUiValue = {
  openResume: () => void;
};

const ResumeUiContext = createContext<ResumeUiValue | null>(null);

export function ResumeUiProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openResume = useCallback(() => setOpen(true), []);
  const value = useMemo(() => ({ openResume }), [openResume]);

  return (
    <ResumeUiContext.Provider value={value}>
      {children}
      <ResumeModal
        open={open}
        onClose={() => setOpen(false)}
        src={siteConfig.resumePath}
      />
    </ResumeUiContext.Provider>
  );
}

export function useResumeUi() {
  const context = useContext(ResumeUiContext);
  if (!context) {
    throw new Error("useResumeUi must be used within ResumeUiProvider");
  }
  return context;
}
