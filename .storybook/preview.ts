import type { Preview } from '@storybook/react'
import '../src/styles.css'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
  },
}
export default preview