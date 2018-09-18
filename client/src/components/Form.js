import React from 'react'

class Form extends React.Component {
  state = { description: '', price:'' }


handleSubmit = (e) => {
  e.preventDefault()
  this.props.submit(this.state)
  this.setState({...this.state })
}



handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
}

render() {
  const { price, description } = this.state 
  return (
    <form onSubmit={this.handleSubmit}>
      <input 
        name="description"
        placeholder="Description"
        value={description}
        onChange={this.handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        value={price}
        onChange={this.handleChange}
      />
      <button>Submit</button>
    </form>
    ) 
  }
}
  

export default Form