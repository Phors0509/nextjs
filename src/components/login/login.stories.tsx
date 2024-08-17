import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/test";

import { Login } from "./login";

const meta: Meta<typeof Login> = {
    component: Login,
};

export default meta;
type Story = StoryObj<typeof Login>;

export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const emailInput = canvas.getByPlaceholderText("Email");
        await userEvent.type(emailInput, "Ahjm");
        const passwordInput = canvas.getByPlaceholderText("Password");
        await userEvent.type(passwordInput, "1234");
        const loginButton = canvas.getByRole("button", { name: "Login" });
        await userEvent.click(loginButton);
    },
};
