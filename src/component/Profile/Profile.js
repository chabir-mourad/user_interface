import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'
import {Link} from 'react-router-dom'
 
import {Card,Button} from "react-bootstrap"
function Profile({profile}){

  
  
  
        return (
            <div className="cards">
                {profile
                
                
                
                .map((el,key)=>( 
                    <Link to={`/posts/${el.id}`}>
                    
               
                <Card style={{ width: '18rem' }} key={key} >
  <Card.Img variant="top" src="https://learn.pandasuite.com/hc/article_attachments/360002295111/Proprie_te_s_des_images.png" />
  <Card.Body>
                <Card.Title className="nameOfUser">{el.name} {el.username}</Card.Title>
                <p className="jobOfuser">{el.company.bs}</p>
    <Card.Text>
                <h1>adress:</h1>
                <ul className="adress">
                <li>street:{el.address.street}</li>
                <li>suite:{el.address.suite}</li>
                <li>city: {el.address.city}</li>
                <li>zipcode: {el.address.zipcode}</li>
             
                </ul>
    </Card.Text>
    <Button variant="outline-success">following</Button>
  </Card.Body>
</Card>
</Link>             )  ) }
            </div>
        )
    }


export default Profile