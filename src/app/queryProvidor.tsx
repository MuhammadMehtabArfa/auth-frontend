"use client";
import React, { useRef } from "react";
// import useLogout from '@/lib/LogOut';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({ children }: any) => {
  // const { logOut } = useLogout();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
      mutations: {
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
