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
export class Register extends Component {
  state = {
    publisherName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    submitting: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
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
                    <strong>Register</strong>
                  </h3>
                </div>

                <MDBInput
                  label="Publisher's Name"
                  group
                  type='text'
                  icon='user'
                  validate
                  error='wrong'
                  name='publisherName'
                  success='right'
                  onChange={this.handleChange}
                  required
                />

                <MDBInput
                  label='Your email'
                  group
                  type='email'
                  name='email'
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
                  name='password'
                  icon='lock'
                  containerClass='mb-0'
                  onChange={this.handleChange}
                  required
                />

                <MDBInput
                  label='Confirm password'
                  group
                  type='password'
                  validate
                  name='confirmPassword'
                  icon='lock'
                  containerClass='mb-0'
                  onChange={this.handleChange}
                  required
                />

                <MDBInput
                  label='Your phone number'
                  group
                  type='number'
                  name='phoneNumber'
                  validate
                  icon='phone-alt'
                  containerClass='mb-0'
                  onChange={this.handleChange}
                  required
                />
                <MDBInput
                  type='textarea'
                  label='Address'
                  name='address'
                  rows='2'
                  icon='address-card'
                />

                <div className='text-center mb-3'>
                  <MDBBtn
                    type='button'
                    gradient='teal'
                    rounded
                    className='btn-block z-depth-1a'
                    onClick={this.handleSubmit}
                  >
                    Register
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className='mx-5 pt-3 mb-1'>
                <p className='font-small grey-text d-flex justify-content-end'>
                  Already a member?
                  <Link to='/login' className='blue-text ml-1'>
                    Login
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

export default Register;
