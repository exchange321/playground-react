import styled, { keyframes } from 'styled-components';

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
`;

const AppContainer = styled.div`
  text-align: center;
`

const AppLogo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 40vmin;
`

const AppHeader = styled.header`
  background-color: ${({ theme }) => theme.themeColors.dark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.white};
`

const AppLink = styled.a`
  color: ${({ theme }) => theme.colors.cyan};
`

export {
  AppContainer,
  AppLogo,
  AppHeader,
  AppLink,
  Code
}
