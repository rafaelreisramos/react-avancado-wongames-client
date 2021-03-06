import { render } from 'utils/test-utils'

import { FormContainer, FormLink } from '.'

describe('<Form />', () => {
  it('should render the form', () => {
    const { container } = render(
      <FormContainer>
        <FormLink>
          Link <a href="#">link</a>
        </FormLink>
      </FormContainer>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 .sc-bdnxRM {
        margin: 0.8rem 0;
      }

      .c0 .sc-gKAaRy {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c1 a {
        color: #3cd3c1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3cd3c1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        >
          Link 
          <a
            href="#"
          >
            link
          </a>
        </div>
      </div>
    `)
  })
})
