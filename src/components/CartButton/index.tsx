import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'

import { useCart } from 'hooks/use-cart'

import Button, { ButtonProps } from 'components/Button'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const buttonText = isInCart(id) ? 'Remove from cart' : 'Add to Cart'

  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default CartButton
