import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import { logo } from "assets/images"
import { Input } from "components/input"
import { PasswordInput } from "components/password-input"

export const Login = () => {
  const navigate = useNavigate()

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
                  error={{ message: 'Error message example' }}
                />

                <Button type="submit" className="mt-4" onClick={() => navigate('/pokemons')}>
                  Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
