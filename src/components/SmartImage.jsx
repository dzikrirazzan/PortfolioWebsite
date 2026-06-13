import React, { useState } from "react";

/**
 * Image that swaps to a fallback element if the source fails to load,
 * preventing broken-image icons when a photo is missing.
 */
const SmartImage = ({ fallback = null, onError, ...imgProps }) => {
  const [errored, setErrored] = useState(false);

  if (errored) return fallback;

  return (
    <img
      {...imgProps}
      onError={(event) => {
        setErrored(true);
        if (onError) onError(event);
      }}
    />
  );
};

export default SmartImage;
