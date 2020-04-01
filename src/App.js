import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Profile from './component/Profile/Profile'
import Posts from './component/Posts/Posts'
import axios from 'axios'
import Comments from './component/Comments/Comments'
export default class App extends Component {
state= {
  profile:[]
}
componentDidMount (){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>{
      this.setState({
          profile : res.data
      })
  })
      }

  render() {
    return (
      <div>
         <BrowserRouter>
  
        
        <Route exact path='/' render={()=><>
        <Profile profile={this.state.profile}/>
        </>
        }
        />
        
        <Route exact path='/posts/:id' render={(props)=><>
        <Posts {...props}/>
        </>
        }
        />
<Route exact path='/comment/:id' render={(props)=>
        <Comments {...props}/>}/>
        


      </BrowserRouter>
      </div>
    )
  }
}
