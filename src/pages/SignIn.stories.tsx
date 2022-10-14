import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('Digite o seu e-mail'),
      'pedro.henrique.torres@hotmail.com'
    );
    userEvent.type(canvas.getByPlaceholderText('*********'), '1234567890');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    });
  },
};
