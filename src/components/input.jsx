import React from 'react'
import { Form } from 'react-bootstrap'

export const Input = (props) => {
  const { label, name, containerClass, children, error, placeholder, onChange } = props

  return (
    <Form.Group className={containerClass}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        id={name}
        as='input'
        isInvalid={!!error?.message}
        placeholder={placeholder}
        onChange={onChange}
      >
        {children}
      </Form.Control>

      {error?.message && <Form.Control.Feedback type='invalid'>{error.message}</Form.Control.Feedback>}
    </Form.Group>
  )
}
