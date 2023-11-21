import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form ,Button,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {adminlogin} from '../actions/userAction'
import FormContainer from '../Components/FormContainer'
import styled from 'styled-components';
import axios from 'axios'


const AdminLoginScreen = () => {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate=useNavigate()
   
    const alogin = useSelector(state => state.AdminLogout);
    const userInfo = alogin ;
    

  
    useEffect(() => {
        if (userInfo) {
            navigate("/adminhome/")
        }
    }, [userInfo])
    
    const submitHandler = async(e) => {
        console.log("object")
        e.preventDefault()
         await axios.post(
            `/customadmin/adminlogin/`,
            { 'username': email, 'password': password }
        )
        navigate("/adminhome/")
        // dispatch(adminlogin(email,password))
    }
    

  return (
    <FormContainer>
       <h1>Sign In</h1>
            {/* {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />} */}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
               

                <Button type='submit' variant='primary'  style={{ padding: '10px 20px', marginTop: '10px' }} >
                    
                     
                    Login
                </Button>
            </Form>

    </FormContainer>
  )
}

export default AdminLoginScreen
