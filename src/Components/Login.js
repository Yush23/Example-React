import React, { useState } from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container} from 'react-bootstrap';

function Login (props){

    

    var getUsername = sessionStorage.getItem("username");
    var getUserPW = sessionStorage.getItem("userpw");

    var formUsername;
    var formPW;

   

    const [enteredPw, setId] = useState('');
    const [enteredName, setName] = useState('');
    const PwChangeHandler = (event) => {
        setId(event.target.value);

    };
    
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    
        //reset the values of input fields
            setId('');
            setName('');
            formUsername = enteredName;
            formPW = enteredPw;

            // if(getUsername === formUsername && getUserPW === formPW){
            //     this.setState({isLoggedIn: true});
            // }
            // else{
            //     this.setState({isLoggedIn: false});
            // }
        return  console.log('Entered Values are: '+enteredPw+' , '+ enteredName);
        
      };
      
    
        return(
            <Container>
            <Form style={{margin: "20%" }} onSubmit={submitHandler}>
            <Form.Group controlId="form.Name">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={enteredName} onChange={nameChangeHandler} placeholder="Enter User Name" required/>
                </Form.Group>
            
            <Form.Group  controlId="form.id">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" value={enteredPw} onChange={PwChangeHandler}placeholder="Enter Password" required/>
                </Form.Group>
                
                
                <Button type='submit'>Sign In</Button>
            </Form>
            </Container>
        );
   
    
}

// const nav = useNavigate();

// async function submitHandler(event) {
//     event.preventDefault();
  
//     try {
//       await Auth.signIn(enteredName, password);
//       userHasAuthenticated(true);
//       nav("/");
//     } catch (e) {
//       alert(e.message);
//     }
//   }

export default Login;