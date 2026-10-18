import { useEffect } from "react";

function usePageTitle(title) {
  useEffect(() => {
    const base = "Franky Interiano";
    document.title = title ? `${title} | ${base}` : `${base} | Software Engineer · Fintech & Production Support`;
  }, [title]);
}

export default usePageTitle;
