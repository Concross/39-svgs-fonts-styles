import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import createAppStore from '../../lib/store';
import PlayersContainer from '../players-container';
import Landing from '../landing';

const store = createAppStore();

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <h1>Rugby Scout!</h1>
              <Navbar>
                <Nav>
                  <LinkContainer to="/welcome/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/welcome/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/players">
                    <NavItem>Dashboard</NavItem>
                  </LinkContainer>
                </Nav>
              </Navbar>

              <main>
                <Route exact path="/welcome/:auth" component={Landing} />
                <Route exact path="/players" component={PlayersContainer} />
              </main>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
