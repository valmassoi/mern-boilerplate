import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {
    SomeStore.removeAllListeners("change")
  }

  render() {

    return(
      <div>
        <h5>home</h5>
      </div>
    )
  }
}
