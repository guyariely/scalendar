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

  ${themedToast({
    theme: "success",
    bgColor: "var(--color-success-background)",
    textColor: "var(--color-success-text)",
  })}
  ${themedToast({
    theme: "error",
    bgColor: "var( --color-error-background)",
    textColor: "var(--color-error-text)",
  })}
`;
