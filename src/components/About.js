import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom
import ProfileFunctionalComponent from "./Profile"
import Profile from './ProfileClass';
import { Component } from 'react';




class About extends Component{
    constructor(props){
        super(props)
        
        //console.log("parent - constructor")
    }
   componentDidMount(){
       //console.log("parent - componentDidMount")
    }
    render(){
        //console.log("parent - render")
        return (
            <div>
              <h1>About us page</h1>
              <p>This is the React page for finding the path</p>
             
              <ProfileFunctionalComponent/>
            </div>
          );
    }
}

export default About;

/*
const About2 = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the React page for finding the path</p>
      <ProfileFunctionalComponent  name="Indra"/>
      <Profile name="sena" xyz="abc"/>
    </div>
  );
  
    <Profile name="first child" xyz="abc"/>
   <ProfileFunctionalComponent  name="Indra"/>
};*/