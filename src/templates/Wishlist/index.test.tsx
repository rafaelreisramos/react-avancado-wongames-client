import 'matchMediaMock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

import Wishlist, { WhishlistTemplateProps } from '.'

const props: WhishlistTemplateProps = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: [gamesMock[0]]
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /wishlist/i
      })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(1)
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})