import React from 'react'
import { Form } from 'react-bootstrap'

export const Input = (props) => {
  const { label, name, containerClass, children, error,placeholder } = props

  return (
    <Form.Group className={containerClass}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        id={name}
        as='input'
        isInvalid={!!error?.message}
        placeholder={placeholder}
      >
        {children}
      </Form.Control>

      {error?.message && <Form.Control.Feedback type='invalid'>{error.message}</Form.Control.Feedback>}
    </Form.Group>
  )
}
