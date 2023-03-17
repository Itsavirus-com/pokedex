import classNames from 'classnames'
import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

import { useToggle } from 'hooks/use-toggle.hook'

export const PasswordInput = (props) => {
  const { label, name, placeholder, onChange, containerClass, error } = props

  const [showPassword, togglePassword] = useToggle()

  return (
    <Form.Group className={containerClass}>
      <Form.Label>{label}</Form.Label>
      <InputGroup className='mb-0'>
        <Form.Control
          name={name}
          id={name}
          as='input'
          isInvalid={!!error?.message}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          onChange={onChange}
        />
        <div
          className={classNames('input-group-text', 'input-group-password', {
            'show-password': showPassword,
          })}
          data-password={showPassword ? 'true' : 'false'}
        >
         <span><i className={showPassword ? 'uil-eye-slash' : 'uil-eye'} onClick={togglePassword} /></span>
        </div>
      </InputGroup>


      {error && (
        <Form.Control.Feedback className='d-block' type='invalid'>
          {error.message}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}
