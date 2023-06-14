import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submithandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios .post('https://jsonplaceholder.typicode.com/posts', this.state)
          .then(response =>{
            console.log(response)
          })
          .catch(error =>{
            console.log(error)
          })
    }
  render() {
    const { userId, title, body } = this.state
    return (
      <div>
         <form onSubmit={this.submithandler}>
            <div>
                <input type='text' name='userId' 
                onChange={this.changeHandler} 
                value={userId}/>
            </div>
            <div>
                <input type='text' name='title' 
                onChange={this.changeHandler}
                value={title}/>
            </div>
            <div>
                <input type='text' name='body'
                onChange={this.changeHandler}
                 value={body}/>
            </div>
            <button>Submit</button>
         </form>
      </div>
    )
  }
}

export default PostForm
