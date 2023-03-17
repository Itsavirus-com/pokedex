import React, { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { logo } from "assets/images"
import { Input } from "components/input"
import { PasswordInput } from "components/password-input"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()

  const [emailResolver, setEmailResolver] = useState('')

  const [passwordResolver, setPasswordResolver] = useState('')

  const [login, setLogin,] = useState({
    email: '',
    password: ''
  })

  const emailValidate = () =>  {
    if(login.email === '') {
      setEmailResolver("Please input an email")
      return false
    }

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login.email)) {
      setEmailResolver("Please input a valid email")
      return false
    }
    setEmailResolver('')
    return true
  }

  const passwordValidate = () => {
    if(login.password === '') {
      setPasswordResolver("Please input a password with string and number and at least have 8 characters, ")
      return false
    }

    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(login.password)) {
      setPasswordResolver("Please input a valid email")
      return false
    }
    setPasswordResolver('')
    return true
  }


  const onLogin = (event) => {
    event.preventDefault()
    passwordValidate()
    emailValidate()

    if (passwordValidate() && emailValidate()){ navigate('/pokemons')}
  }
  const onChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  return (
    <div className='login pt-2 pt-sm-5 pb-4 pb-sm-5'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={8} lg={6} xl={5} xxl={4}>
            <Card>
              <Card.Header className='pt-4 pb-4 bg-primary'>
                <img src={logo} className='login-logo' />
                <h4 className="login-title">Pokedex Login</h4>
              </Card.Header>
              <Card.Body className='p-4'>
                <Form onSubmit={onLogin}>
                  <Input
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    onChange={(e) => onChange(e)}
                    error={{ message: emailResolver }}
                  />
                  <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    containerClass="mt-3"
                    error={{ message: passwordResolver }}
                    onChange={(e) => onChange(e)}
                  />
                  <Button type="submit" className="mt-4">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
