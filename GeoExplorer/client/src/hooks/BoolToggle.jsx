import { useState } from "react";

//No longer used since redux store implementation
const useBoolToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const toggle = (toggleTo) => {
    if (toggleTo !== undefined) {
      setValue(toggleTo);
    } else {
      setValue(!value);
    }
  };

  return [value, toggle];
}

export default useBoolToggle;