import * as React from "react";
import { AuthProvider } from "./auth";
import { UserProvider } from "./user";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { Toast } from "../components";

const queryClient = new QueryClient();

function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toast />
        <AuthProvider>
          <UserProvider>{children}</UserProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default AppProviders;
