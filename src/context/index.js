import * as React from "react";
import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default AppProviders;
