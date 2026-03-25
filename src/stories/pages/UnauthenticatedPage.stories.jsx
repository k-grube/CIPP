import React from "react";
import { within, expect } from "storybook/test";
import UnauthenticatedPage from "../../pages/unauthenticated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock API calls
import { vi } from "vitest";
vi.mock("../../api/ApiCall", () => ({
  ApiGetCall: ({ url }) => {
    if (url === "/api/me") {
      return { isSuccess: true, data: { message: "Permission Denied" } };
    }
    return { isSuccess: true, data: { clientPrincipal: null } };
  },
}));

const queryClient = new QueryClient();

export default {
  title: "Pages/Unauthenticated",
  component: UnauthenticatedPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export const AccessDenied = {
  render: () => <UnauthenticatedPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Access Denied")).toBeInTheDocument();
    await expect(canvas.getByText("Permission Denied")).toBeInTheDocument();
    const loginButton = canvas.getByRole("link", { name: /Login/i });
    await expect(loginButton).toBeInTheDocument();
  },
};
