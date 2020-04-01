import React, { Component } from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'

class Comments extends Component {
state={
    Comments :[]
}

componentDidMount(){
    this.getComments();
}

getComments=()=>axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.userId}`)
.then(Posts=>this.setState({
   Comments:Posts.data
}))
.catch(err=>console.log(err))





    render() {
        return (
            <div>
                   {this.state.Comments
                
                
                .map((el,key)=>
                
                

                
                  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>{el.name}</Card.Header>
    <Card.Body>
                <Card.Title>{el.email}</Card.Title>
      <Card.Text>
       {el.body}
      </Card.Text>
                }</Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> 
                )
            }
            </div>
        )
    }
}
export default Comments