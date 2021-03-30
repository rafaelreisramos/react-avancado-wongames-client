import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

import ordersMock from 'components/OrdersList/data.mock'

export default function ProfileOrders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
