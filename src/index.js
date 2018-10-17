import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import App from './js/App';

const domElementGetter = () => {
  let el = document.getElementById('react-app')
  if (!el) {
    el = document.createElement('div')
    el.id = 'react-app'
    document.body.appendChild(el)
  }

  return el
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
})

const bootstrap = props => reactLifecycles.bootstrap(props)

const mount = props => reactLifecycles.mount(props)

const unmount = props => reactLifecycles.unmount(props)

export {
  bootstrap,
  mount,
  unmount
}
