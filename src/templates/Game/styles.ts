import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Main = styled.main`
  margin-top: 20rem;

  ${media.greaterThan('medium')`
    margin-top: 45rem;
  `}
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 39.5rem;
  opacity: 0.4;

  ${media.greaterThan('medium')`
    height: 70rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGameInfo = styled(Section)``

export const SectionGallery = styled(Section)``

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const SectionGameDetails = styled(Section)`
  ${({ theme }) => css`
    > div {
      padding-bottom: ${theme.spacings.xlarge};
      border-bottom: 0.1rem solid rgba(181, 181, 181, 0.3);

      ${media.greaterThan('medium')`
        padding-bottom: calc(${theme.spacings.xxlarge} * 2);
      `}
    }
  `}
`
