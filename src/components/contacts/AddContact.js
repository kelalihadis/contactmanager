
import axios from 'axios';
import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layouts/TextInputGroup';
//import {uuid} from 'uuid';

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '', 
        errors: {}
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone} = this.state;

      
        if (name === '') { this.setState({errors: {name: 'name is required' } }); }
        if (email === '') { this.setState({errors: {email: 'email is required' } }); }
        if (phone === '') { this.setState({errors: {phone: 'phone is required' } }); }


        const newcontacts = {
           // id: 5,uuid(),
            name,
            email,
            phone
        }
           const response  = await  axios.post('https://jsonplaceholder.typicode.com/users',newcontacts)
        
          dispatch({ type: 'ADD_CONTACT', payload: response.data })
        
          // clear
          this.setState
         ({
            name: '',
            email: '',
            phone: '',
            errors: {}
         });
      this.props.history.push('/');
    }


    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header"><h2>Add Contact</h2> </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        onChange={this.onChange}
                                        value={name}
                                        error={errors.name}
                                    />

                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        placeholder="Enter Email"
                                        onChange={this.onChange}
                                        value={email}
                                        type="email"
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone"
                                        onChange={this.onChange}
                                        value={phone}
                                        error={errors.phone}

                                    />
                                    <input type="submit" value="Add Contact" className="btn btn-block btn-dark mt-3" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

