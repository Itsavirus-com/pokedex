import React, { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import { logo } from "assets/images"
import { Input } from "components/input"
import { PasswordInput } from "components/password-input"

export const Login = () => {
  const navigate = useNavigate()

  const [emailValid, setEmailValid] = useState("")
  const [passwordValid, setPasswordValid] = useState("")

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  })

  function emailValidation(){
    switch (true) {
      case !auth.email:
        setEmailValid("Email is required")
        return false
      case !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(auth.email):
        setEmailValid("Email is not valid")
        return false
      default:
        return true
    }
  }

  function passwordValidation(){
    switch (true) {
      case !auth.password:
        setPasswordValid("Password is required")
        return false
      case !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(auth.password):
        setPasswordValid("Password must 8 character, string, number")
        return false
      default:
        return true
    }
  }

  const doLogin = (event) => {
    event.preventDefault()
    passwordValidation()
    emailValidation()
    if (passwordValidation() && emailValidation()) return navigate('/pokemons')
  }

  const handleChange = (event) => {
    setAuth({ ...auth, [event.target.name]: event.target.value })
  }

  return (
    <div className="login pt-2 pt-sm-5 pb-4 pb-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5} xxl={4}>
            <Card>
              <Card.Header className="pt-4 pb-4 bg-primary">
                <img src={logo} className="login-logo" />
                <h4 className="login-title">Pokedex Login</h4>
              </Card.Header>
              <Card.Body className="p-4">
                <Form onSubmit={doLogin}>
                  <Input
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    onChange={(e) => {
                      handleChange(e)
                      setEmailValid("")
                    }}
                    error={{ message: emailValid }}
                  />

                  <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    containerClass="mt-3"
                    onChange={(e) => {
                      handleChange(e)
                      setPasswordValid("")
                    }}
                    error={{ message: passwordValid }}
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
