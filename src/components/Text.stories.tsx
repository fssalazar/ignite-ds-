import { Meta, StoryObj } from '@storybook/react'
import {Text, TextProps} from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomText: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    asChild: true,
    children: <h1>Eai parças</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
