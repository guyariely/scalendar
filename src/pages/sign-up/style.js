import styled from "styled-components";
import { Button, Input } from "components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    to bottom,
    var(--color-background) 96%,
    var(--color-stripes) 5%
  );
  background-size: 100% 25px;
  height: 100%;
`;

export const Title = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  margin: 10px 0;
`;

export const StyledButton = styled(Button)`
  margin: 30px 10px;
`;
