import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'
import {Link} from 'react-router-dom'
 
import {Card,Button} from "react-bootstrap"

import Modals_poster from '../Modal_poster/Modalu_poster';
function Profile({profile}){

  
  
  
        return (
            <div className="cards">
                {profile
                
                
                
                .map((el,key)=>( 
                 
                    <div>
             
                <Card style={{ width: '18rem' }} key={key} >
               
  <Modals_poster/>
  
  <Card.Body>
                <Card.Title className="nameOfUser">{el.name} {el.username}</Card.Title>
                <p className="jobOfuser">{el.company.bs}</p>
    <Card.Text>
                <h1>Adress:</h1>
                <ul className="adress">
                <li>Street:{el.address.street}</li>
                <li>Suite:{el.address.suite}</li>
                <li>City: {el.address.city}</li>
                <li>Zipcode: {el.address.zipcode}</li>
             
                </ul>
    </Card.Text>
    <Link to={`/posts/${el.id}`}>
    <Button variant="outline-success">following</Button>
    </Link>    
  </Card.Body>
</Card>
</div>
         )  ) }
            </div>
        )
    }


export default Profile