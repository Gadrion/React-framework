import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const Login = ({onLogin}) => (
  <Form onSubmit={onLogin}>
    <Form.Field name="id">
      <label>ID</label> 
      <input placeholder='ID'/>
    </Form.Field>
    <Form.Field name="password">
      <label>password</label>
      <input type="password" placeholder='password'/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
);

export default Login;
