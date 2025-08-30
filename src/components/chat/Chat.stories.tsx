import type { Meta, StoryObj } from '@storybook/react'
import { Chat } from './Chat'

const meta: Meta<typeof Chat> = {
  title: 'Components/Chat',
  component: Chat
}
export default meta
export const Default: StoryObj<typeof Chat> = {}