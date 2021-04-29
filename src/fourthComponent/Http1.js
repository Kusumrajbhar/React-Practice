import React, { Component } from 'react'
import axios from 'axios'

class Http1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[] ,  //initially empty
             errorMsg:''
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
         console.log(response)
         this.setState({posts: response.data}) //in response getting more elements bt choose only data
         console.log(this.state.posts[0].title)
        })
        .catch(error=>{
            console.log(error)
            this.setState({errorMsg: 'Error while retreiving data'})
        })
    }

    render() {
        const {posts, errorMsg} = this.state
        return (
            <>
                List of posts
                {
                    posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
                {/* {posts.length ? <div key={posts.id[2]}> {this.state.posts[0]} </div> : null} */}
               {/* { posts.length } */}
               {/* {posts[0].title} */}
            </>
        )
    }
}

export default Http1


//control flow
//constructor -- posts is empty
//render -- nothing will shown as posts empty
//didmount posts will set to data of objects
//show error msg when api fails
//obstacle in rendering single value from object