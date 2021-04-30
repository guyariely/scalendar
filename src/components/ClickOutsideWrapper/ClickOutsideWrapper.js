import React, { useRef } from "react";
import { useClickOutside } from "../../hooks/hooks";

function ClickOutsideWrapper(props) {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, props.onClickOutside);
  return <div ref={wrapperRef}>{props.children}</div>;
}

export default ClickOutsideWrapper;
