import React from "react";
import { within, expect } from "storybook/test";
import { Layout } from "../../layouts/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock Next.js navigation hooks
import { vi } from "vitest";
vi.mock("next/navigation", () => ({
  usePathname: () => "/dashboard",
}));

// Mock API calls
vi.mock("../../api/ApiCall", () => ({
  ApiGetCall: () => ({
    isSuccess: true,
    data: { clientPrincipal: { userRoles: ["Global Administrator"] } },
    isLoading: false,
  }),
}));

const mockStore = configureStore({
  reducer: {
    toasts: (state = { list: [] }, action) => state,
  },
});

const queryClient = new QueryClient();

export default {
  title: "Layouts/DashboardLayout",
  component: Layout,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </Provider>
    ),
  ],
};

export const Default = {
  args: {
    children: (
      <div style={{ padding: "20px" }}>
        <h1>Dashboard Content</h1>
        <p>This is the main content of the dashboard layout.</p>
      </div>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Dashboard Content")).toBeInTheDocument();
    await expect(canvas.getByRole("navigation")).toBeInTheDocument();
  },
};
