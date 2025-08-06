"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-T9WMRTZH";

export const GTMProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (GTM_ID) {
      TagManager.initialize({ gtmId: GTM_ID });
    }
  }, []);

  return children;
};
