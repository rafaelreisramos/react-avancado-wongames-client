import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Container>
    <S.BannerBox>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBox>

    <S.Content>
      <S.ContentBox>
        <Link href="/">
          <a>
            <Logo id="sign" color="black" size="large" />
          </a>
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentBox>
    </S.Content>
  </S.Container>
)

export default Auth
