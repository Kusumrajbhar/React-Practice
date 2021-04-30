import axios from 'axios'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export class ApiTaskget extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            name: ''
        }
    }

    getCommentList = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                this.setState({ comments: response.data })
                console.log('response', response)
                console.log('response', this.state.comments[0].name)
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    componentDidMount() {
        this.getCommentList()
    }
    // deleteHandler = (id) => {
    //     //alert('deleted')
    //     axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
    //         .then((response) => {
    //                 alert(id)
    //                 this.getCommentList()              
    //          
    //         })
    // }

    deleteHandler = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((response) => {
                alert(id)
                console.log(Response)
                this.getCommentList()
            })
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addHandler = (e) => {
        e.preventDefault()    //to prevent page refresh
        console.log('this.state', this.state)     //whatever filled in input box consoled as a object
        axios.post('https://jsonplaceholder.typicode.com/comments', this.state)  //this.state is the response value
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // changeHandler = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    //    }

    render() {
        const { comments, name } = this.state
        return (
            <>
                <div>
                    <input type='text' name='name' value={name} onChange={this.changeHandler} />
                    <button onClick={this.addHandler}>Add</button>
                </div>
                <br />
                <div>List of Comments</div>
                <br />
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.length ? comments.map(comment => <tr key={comment.id}>
                            <td>{comment.id} </td>
                            <td>{comment.name} </td>
                            <td>{comment.email} </td>
                            <td><button onClick={() => this.deleteHandler(comment.id)}>Delete</button> </td>
                        </tr>) : null
                    }
                </tbody>

            </>
        )
    }
}

export default ApiTaskget
