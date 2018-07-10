import  React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };
  
  render () {
    return ( 
      <Card>
        <CardSection>
          <Input 
            keyboardType="email-address"
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeText = { text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>  
    );
   }
}

export default LoginForm;