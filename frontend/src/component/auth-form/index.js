import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getValidationState() {
    const length = this.state.password.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
      .then(() => {
        this.props.redirect('/players');
      })
      .catch(console.error);
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        {this.props.auth === 'signup' ?
          <FormControl
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          /> : null}

        <FormControl
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <FormGroup
          controlId="password"
          validationState={this.props.auth === 'signup' ? this.getValidationState() : ''}
        >
          <FormControl
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <button type="submit">{this.props.auth}</button>
      </form>
    );
  }
}
