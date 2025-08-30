import type { Meta, StoryObj } from '@storybook/react'
import { MicButton } from './MicButton'

const meta: Meta<typeof MicButton> = {
  title: 'Components/MicButton',
  component: MicButton
}
export default meta

export const Default: StoryObj<typeof MicButton> = {
  render: () => <MicButton onTranscript={()=>{}} />
}