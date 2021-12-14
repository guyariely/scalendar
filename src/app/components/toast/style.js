import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const themedToast = ({ theme, bgColor, textColor }) => `
  --toastify-color-${theme}: ${bgColor};
  --toastify-text-color-${theme}: ${textColor};
  .Toastify__toast--${theme} {
    .Toastify__close-button {
      color: var(--toastify-text-color-${theme});
    }

    .Toastify__progress-bar {
      --toastify-color-transparent: var(--toastify-text-color-${theme});
    }
  }
`;

export const StyledToast = styled(ToastContainer)`
  width: 98%;

  .Toastify__toast {
    margin-bottom: 0;
  }

  ${themedToast({ theme: "success", bgColor: "#def0a5", textColor: "#769c00" })}
  ${themedToast({ theme: "error", bgColor: "#ffc2c1", textColor: "#ea2b2b" })}
`;
