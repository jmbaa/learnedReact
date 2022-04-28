import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageSuccess = () => (
  <Message positive>
    <Message.Header>You are eligible for a reward</Message.Header>
    <p>
      Go to your <b>special offers</b> page to see now.
    </p>
  </Message>
)

export default MessageSuccess