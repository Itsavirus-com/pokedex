import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

export type LoginData ={
  email: string
  password: string
}

export default function login() {
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const loginResolver = yupResolver(
    yup.object().shape({
      email: yup
        .string()
        .email('Please enter a valid email')
        .required('Please enter your email'),
      password: yup
        .string()
        .required('Please enter your password')
        .matches(
          /^(?=.*[a-z] [A-Z])(?=.*[0-9])(?=.{8,})/,
          "Must Contain 8 Characters, Must be One Number and One String"
        ),
    })
  )
  const navigateToPokemons = () => {
    navigate('/pokemons', { replace: true })
  }

  const doLogin = async ({email, password}: LoginData) => {
    try {
      setError(null)

      navigateToPokemons()
    }
    catch (error:any) {
  }
  }



  return { loginResolver, doLogin, error }

}
