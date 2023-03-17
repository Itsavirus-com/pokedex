import classNames from 'classnames'
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

import { useToggle } from 'hooks/use-toggle.hook'

export const PasswordInput = (props) => {
  const { label, name, containerClass, error, placeholder, onChange } = props

  const [showPassword, togglePassword] = useToggle()

  return (
    <Form.Group className={containerClass}>
      <Form.Label>{label}</Form.Label>
      <InputGroup className='mb-0'>
        <Form.Control
          name={name}
          id={name}
          placeholder={placeholder}
          as='input'
          isInvalid={!!error?.message}
          type={showPassword ? 'text' : 'password'}
          onChange={onChange}
        />
        <div
          className={classNames('input-group-text', 'input-group-password')}
          onClick={togglePassword}
          role="button"
        >
          <i className={showPassword ? 'uil-eye-slash' : 'uil-eye'} />
        </div>
      </InputGroup>
      {error?.message && (
        <Form.Control.Feedback className='d-block' type='invalid'>
          {error?.message}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}
