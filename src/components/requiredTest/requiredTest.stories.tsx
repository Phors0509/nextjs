import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/test";

import RequiredTest from "./requiredTest";

const meta: Meta<typeof RequiredTest> = {
    component: RequiredTest,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RequiredTest>;

export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const emailInput = canvas.getByPlaceholderText("email");

        await userEvent.type(emailInput, "example-email@email.com", {
            delay: 100,
        });

        const passwordInput = canvas.getByPlaceholderText("password");

        await userEvent.type(passwordInput, "ExamplePassword", {
            delay: 100,
        });
        const submitButton = canvas.getByRole("button");

        await userEvent.click(submitButton);
    },
};

export const EmptyForm: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const submitButton = canvas.getByRole("button");

        await userEvent.click(submitButton);
    },
};

export const InvalidEmail: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const emailInput = canvas.getByPlaceholderText("email");

        await userEvent.type(emailInput, "example-email", {
            delay: 100,
        });

        const passwordInput = canvas.getByPlaceholderText("password");

        await userEvent.type(passwordInput, "ExamplePassword", {
            delay: 100,
        });
        const submitButton = canvas.getByRole("button");

        await userEvent.click(submitButton);
    },
};

export const InvalidPassword: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const emailInput = canvas.getByPlaceholderText("email");
        await userEvent.type(emailInput, "example-email@email.com", {
            delay: 100,
        });

        const passwordInput = canvas.getByPlaceholderText("password");
        await userEvent.type(passwordInput, "Exame", {
            delay: 100,
        });
        const submitButton = canvas.getByRole("button");

        await userEvent.click(submitButton);
    },
};

export const InvalidEmailAndPassword: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const emailInput = canvas.getByPlaceholderText("email");
        await userEvent.type(emailInput, "example-email", {
            delay: 100,
        });

        const passwordInput = canvas.getByPlaceholderText("password");
        await userEvent.type(passwordInput, "Exame", {
            delay: 100,
        });
        const submitButton = canvas.getByRole("button");

        await userEvent.click(submitButton);
    },
};
