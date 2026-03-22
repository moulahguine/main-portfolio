"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

export default function useThemeAsset({ fallbackTheme = "dark" } = {}) {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeTheme = isMounted
    ? (resolvedTheme ?? fallbackTheme)
    : fallbackTheme;

  const pickByTheme = useMemo(
    () => (lightValue, darkValue) =>
      activeTheme === "light" ? lightValue : darkValue,
    [activeTheme]
  );

  return { activeTheme, pickByTheme, isMounted };
}
