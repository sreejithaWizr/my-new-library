import { fn } from '@storybook/test';
import Button from '../components/Button/Button';
import { Star } from 'lucide-react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const IconButton = {
  args: {
    variant: 'icon',
    icon: Star,
    label: '',
  },
};

export const TextButton = {
  args: {
    variant: 'text',
    label: 'Text Button',
  },
};

export const OutlineButton = {
  args: {
    variant: 'outline',
    label: 'Outline Button',
  },
};

export const LoadingButton = {
  args: {
    variant: 'loading',
    label: 'Loading...',
    loading: true,
  },
};

export const DisabledButton = {
  args: {
    variant: 'disabled',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const ImageButton = {
  args: {
    variant: 'image',
    imageSrc: 'https://via.placeholder.com/20',
    label: 'Image Button',
  },
};
