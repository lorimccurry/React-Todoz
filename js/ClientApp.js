import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { StyleRoot } from 'radium'
import '../public/css/style.css'
import TodoList from './TodoList'

injectTapEventPlugin()

class App extends React.Component {
  render () {
    return (
      <StyleRoot>
        <MuiThemeProvider>
          <div className='page-container'>
            <TodoList />
          </div>
        </MuiThemeProvider>
      </StyleRoot>
    )
  }
}

render(<App />, document.getElementById('app'))

