import React, { PureComponent, createElement } from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import PageHome from './pages/home'

function getAsyncComponent (load) {
  return class AsyncComponent extends PureComponent {
    componentDidMount () {
      load().then(({ default: component }) => {
        this.setState({
          component
        })
      })
    }

    render () {
      const { component } = this.state || {}
      return component ? createElement(component) : null
    }
  }
}

function App () {
  return (
    <HashRouter>
      <div>
        <nav>
          <Link to='/'>Home</Link> |
          <Link to='/about'>About</Link> |
          <Link to='/login'>Login</Link>
        </nav>
        <hr />
        <Route exact path='/' component={PageHome} />
        <Route path='/about' component={getAsyncComponent(
          () => import(/* webpackChunkName: 'page-about' */'./pages/about')
        )} />
        <Route path='/login' component={getAsyncComponent(
          () => import(/* webpackChunkName: 'page-login' */'./pages/login')
        )} />
      </div>
    </HashRouter>
  )
}

render(
  <App />,
  window.document.getElementById('app')
)