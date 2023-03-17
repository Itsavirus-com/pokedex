import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import { logo } from "assets/images"
import { Input } from "components/input"
import { PasswordInput } from "components/password-input"
import { LoginForm } from "../components/form-login"
import useLogin from "hooks/use-login.hooks"

export const Login = () => {
  const navigate = useNavigate()
  const {login, loginResolver, error} =useLogin()

  return (
    <div className='login pt-2 pt-sm-5 pb-4 pb-sm-5'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={8} lg={6} xl={5} xxl={4}>
            <Card>
              <Card.Header className='pt-4 pb-4 bg-primary'>
                <img src={logo} className='login-logo' />
                <h4 className="login-title">Pokedex Login</h4>
                {error && (
                  <Alert variant='danger' className='my-2'>
                    {error}
                  </Alert>
                )}
              </Card.Header>
              <LoginForm  resolver={loginResolver}>
                <Card.Body className='p-4'>
                  <Input
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    />

                  <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    containerClass="mt-3"
                    />

                  <Button type="submit" className="mt-4" onClick={() => navigate('/pokemons')}>
                    Login
                  </Button>
                </Card.Body>
              </LoginForm>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
