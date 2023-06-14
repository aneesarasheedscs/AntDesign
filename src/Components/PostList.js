import React, { Component } from 'react'
import axios  from 'axios'

 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: ''
      }
    }
    componentDidMount(){
        // axios is a libarary 
        //Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response =>{
            console.log(response)
            this.setState({posts: response.data})
           })
           .catch(error =>{
             console.log(error)
             this.setState({errorMsg: 'Error retereiving data'})
           })
    }
    
  render() {
    const { posts , errorMsg} =  this.state;
    return (
       
      <div>
         <h3>Lists of Posts</h3>
           {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) :
            null
           }
           {
            errorMsg ? <div>{errorMsg} </div> : null
           }
      </div>
    )
  }
}

export default PostList
