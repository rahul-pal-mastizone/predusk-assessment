import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputBar } from './InputBar'

const meta: Meta<typeof InputBar> = {
  title: 'Components/InputBar',
  component: InputBar
}
export default meta

export const Default: StoryObj<typeof InputBar> = {
  render: () => {
    const [v, setV] = useState('')
    return <div className="max-w-xl"><InputBar value={v} onChange={setV} onSubmit={()=>{}} onReset={()=>setV('')} /></div>
  }
}