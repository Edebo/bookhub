import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter
} from "mdbreact";
import { Link } from "react-router-dom";
export class Login extends Component {
  state = {
    email: "",
    password: "",
    submitting: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("i got here");
  };
  render() {
    return (
      <MDBContainer className='my-4 '>
        <MDBRow className='d-flex justify-content-center'>
          <MDBCol md='6'>
            <MDBCard>
              <MDBCardBody className='mx-4'>
                <div className='text-center'>
                  <h3 className='dark-grey-text mb-5'>
                    <strong>Login</strong>
                  </h3>
                </div>
                <MDBInput
                  label='Your email'
                  group
                  type='email'
                  icon='envelope'
                  validate
                  error='wrong'
                  success='right'
                  pattern='	
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'
                  onChange={this.handleChange}
                  required
                />
                <MDBInput
                  label='Your password'
                  group
                  type='password'
                  validate
                  icon='lock'
                  containerClass='mb-0'
                  onChange={this.handleChange}
                  required
                />
                <p className='font-small blue-text d-flex justify-content-end pb-3'>
                  Forgot
                  <a href='#!' className='blue-text ml-1'>
                    Password?
                  </a>
                </p>
                <div className='text-center mb-3'>
                  <MDBBtn
                    type='button'
                    gradient='teal'
                    rounded
                    className='btn-block z-depth-1a'
                    onClick={this.handleSubmit}
                  >
                    Log in
                  </MDBBtn>
                </div>
                <p className='font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2'>
                  or Login with:
                </p>
                <div className='row my-3 d-flex justify-content-center'>
                  <MDBBtn
                    type='button'
                    color='white'
                    rounded
                    className='mr-md-3 z-depth-1a'
                  >
                    <MDBIcon
                      fab
                      icon='facebook-f'
                      className='blue-text text-center'
                    />
                  </MDBBtn>
                  <MDBBtn
                    type='button'
                    color='white'
                    rounded
                    className='mr-md-3 z-depth-1a'
                  >
                    <MDBIcon fab icon='twitter' className='blue-text' />
                  </MDBBtn>
                  <MDBBtn
                    type='button'
                    color='white'
                    rounded
                    className='z-depth-1a'
                  >
                    <MDBIcon fab icon='google-plus-g' className='blue-text' />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className='mx-5 pt-3 mb-1'>
                <p className='font-small grey-text d-flex justify-content-end'>
                  Not a member?
                  <Link to='/register' className='blue-text ml-1'>
                    Register
                  </Link>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Login;
