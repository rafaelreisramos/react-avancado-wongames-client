import { Story, Meta } from '@storybook/react/types-6-0'

import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Desktop</MediaMatch>
)

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
