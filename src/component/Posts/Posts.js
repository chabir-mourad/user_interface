import React, { Component } from 'react'
import Axios from 'axios'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
 class Posts extends Component {
     state ={
         posts:[]
           
     }
     componentDidMount(){
        this.getPosts();
    }

   getPosts=()=>Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
    .then(Profils=>this.setState({
       posts:Profils.data
    }))
    .catch(err=>console.log(err))


    render() {
    
    
        return (
            <div>
                {this.state.posts
                
                
                .map((el,key)=>
                
                

                <Link to={`/comments/${el.userId}`}>
                  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
                <Card.Title>{el.title}</Card.Title>
      <Card.Text>
       {el.body}
      </Card.Text>
                }</Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> 
  </Link>
                )
            }
            </div>

        )
    }
}
export default Posts