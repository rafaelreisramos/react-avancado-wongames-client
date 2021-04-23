import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/client'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { useMutation } from '@apollo/client'

import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormContainer, FormLink, FormLoading } from 'components/Form'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { loading, error }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => console.log(err),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <form>
        <TextField
          name="username"
          type="text"
          placeholder="Username"
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />

        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />

        <TextField
          name="password"
          type="password"
          placeholder="Password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />

        <TextField
          name="confirm-password"
          type="password"
          placeholder="Confirm password"
          onInputChange={(v) => handleInput('confirm-password', v)}
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
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
}

export default FormSignUp
