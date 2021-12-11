import React, { useState } from "react";
import { BUTTON_TYPE } from "../../components/button/consts";
import {
  Buttons,
  SignInForm,
  StyledButton,
  Title,
  StyledInput,
  Container,
} from "./style";
import { Link } from "react-router-dom";
import { useSignIn } from "../../hooks/auth/use-sign-in";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loading, error } = useSignIn(email, password);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <Container>
      <Title>Sign In</Title>
      <SignInForm>
        <StyledInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Email"
          type="email"
        />
        <StyledInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Password"
          type="password"
        />
      </SignInForm>
      <Buttons>
        <StyledButton disabled={!email || !password} onClick={signIn}>
          Sign In
        </StyledButton>
        <Link to="/sign-up">
          <StyledButton type={BUTTON_TYPE.SECONDARY}>Sign Up</StyledButton>
        </Link>
      </Buttons>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </Container>
  );
}

export default SignInPage;
