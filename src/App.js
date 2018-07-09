import React, { Component } from 'react'
import './App.css'
import { Provider } from "react-redux"
import { Values } from "redux-form-website-template"
import store from './store/store'
import SimpleForm from './components/SimpleForm'

class App extends Component {
  handleSubmit = values => {
    alert('Values---',values)
  }
  render () {
    return (
      <Provider store={store}>
        <div style={{ padding : 15 }}>
          <h2 className='header'>Simple Form </h2>
          <SimpleForm handleSubmit={this.handleSubmit} />
          <Values form="simple" />
        </div>
      </Provider>
    )
  }
}

export default App
