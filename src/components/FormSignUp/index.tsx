import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormContainer, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormContainer>
    <form>
      <TextField
        name="name"
        type="text"
        placeholder="Name"
        icon={<AccountCircle />}
      />

      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        icon={<Email />}
      />

      <TextField
        name="password"
        type="password"
        placeholder="Password"
        icon={<Lock />}
      />

      <TextField
        name="confirm-password"
        type="password"
        placeholder="Confirm password"
        icon={<Lock />}
      />
      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        {`Already have an account? `}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormContainer>
)

export default FormSignUp
