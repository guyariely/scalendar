import React, { useState } from "react";
import { useSignUp } from "../../../../hooks/auth/use-sign-up";
import {
  SignInForm,
  StyledButton,
  Title,
  StyledInput,
  Container,
} from "./style";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loading, error, data } = useSignUp(email, password);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <Container>
      <Title>Sign Up</Title>
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
      <StyledButton onClick={signUp}>Sign Up</StyledButton>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </Container>
  );
}

export default SignUpPage;
