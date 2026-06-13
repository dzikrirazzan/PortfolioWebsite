import { useEffect } from "react";

const SUFFIX = "Dzikri Razzan Athallah";

const usePageTitle = (title, { raw = false } = {}) => {
  useEffect(() => {
    document.title = raw || !title ? title ?? SUFFIX : `${title} | ${SUFFIX}`;
  }, [title, raw]);
};

export default usePageTitle;
