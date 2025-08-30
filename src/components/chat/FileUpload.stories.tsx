import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload
}
export default meta

export const Default: StoryObj<typeof FileUpload> = {
  render: () => <FileUpload onText={()=>{}} />
}