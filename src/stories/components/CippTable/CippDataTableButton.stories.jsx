import React from "react";
import { within, userEvent, expect } from "storybook/test";
import CippDataTableButton from "../../../components/CippTable/CippDataTableButton";

// Mock CippDataTable
import { vi } from "vitest";
vi.mock("../../../components/CippTable/CippDataTable", () => ({
  CippDataTable: () => <div data-testid="cipp-data-table">MOCK TABLE</div>,
}));

// Mock the translation utility
vi.mock("../../../utils/get-cipp-translation", () => ({
  getCippTranslation: (key) => key,
}));

export default {
  title: "Components/CippTable/CippDataTableButton",
  component: CippDataTableButton,
  tags: ["autodocs"],
};

export const ArrayData = {
  args: {
    title: "View List",
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ],
    tableTitle: "Items List",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toHaveTextContent("2 items");

    await userEvent.click(button);

    // Dialog is rendered in a portal, need to search in document.body
    const root = within(document.body);
    await expect(root.getByTestId("cipp-data-table")).toBeInTheDocument();
  },
};

export const ObjectData = {
  args: {
    title: "View Details",
    data: {
      "Display Name": "John Doe",
      Email: "john@example.com",
    },
    tableTitle: "User Details",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("2 items")).toBeInTheDocument();
  },
};

export const EmptyData = {
  args: {
    title: "No Data",
    data: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toHaveTextContent("No items");
    await expect(button).toBeDisabled();
  },
};
