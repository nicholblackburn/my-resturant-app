import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Form from './Form'

class Dashboard extends React.Component {
  state = { menus: [], showForm: false }

  componentDidMount() {
    axios.get('/api/menus')
    .then( res => this.setState({ menus: res.data }) )
  }

  show() {
    const { menus } = this.state 
    return (
      <ul>
        { menus.map( m =>
        <li key={m.id}>
          <Link to={`/menus/${m.id}`}>
          {m.description}
          </Link>
        </li>
    )
  }
</ul>
)
}

form() {
  return <Form submit={this.submit} />
}

submit = (menu) => {
  const { menus } = this.state
  axios.post('/api/menus', { menu })
  .then( res => {
    this.setState({
      menus: [res.data, ...menus],
      showForm: false
    })
  })
}

toggleForm = () => {
  this.setState({ showForm: !this.state.showForm })
}

render() {
  const { showForm } = this.state
  return (
    <div>
      <h2>Menu</h2>
    <button onClick={this.toggleForm}>
      { showForm ? 'Hide' : 'Show' }
    </button>
    { showForm ? this.form() : this.show() }
    </div>
    )
  }
}

export default Dashboard 