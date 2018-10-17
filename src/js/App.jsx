import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import logo from '../images/logo.svg';
import { AppContainer, AppLogo, AppLink, AppHeader, Code } from './App.style';

class App extends PureComponent {
  static propTypes = {
    theme: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  render() {
    const { theme } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <p>
              Edit <Code>src/App.jsx</Code> and save to reload
            </p>
            <AppLink
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </AppLink>
          </AppHeader>
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App;
