import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { AiFillCodepenCircle, AiFillCodepenSquare, AiFillDelete, AiFillDownCircle, AiFillEdit, AiFillFolderOpen } from 'react-icons/ai';
import { Consumer } from '../../context';
import PropTypes from 'prop-types';
import axios from'axios';

class Contact extends Component {

    state = { showContactInf: false }
    onClickDelete = async (id, dispatch) => {
 await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

  dispatch({type: 'DELETE_CONTACT',payload: id})
    }

    render() {



        const { id, name, email, phone } = this.props.contact;
        const { showContactInf } = this.state;
        return (
    
          <Consumer>
              {value =>{
                  const {dispatch} = value;
                  return(
                    < div className="card card-body mb-3">
                    <h3>{name} {'   '}
                        {/* {<button onClick={() => this.setState({
                            showContactInf:
                                !this.state.showContactInf
                        })} >show/hide</button> } */}

                     {<AiFillDownCircle  cursor="pointer"  size="2rem" className="mb-2" onClick={() =>
                      this.setState({showContactInf: !this.state.showContactInf })}/>}  

                       { //<button onClick={this.onClickDelete.bind(this,id,dispatch)} style={{ float: 'right', color: 'red' }}>delete</button>
                       }

                        {<AiFillDelete style={{ float: 'right', color: 'red' , cursor:'pointer'}} size="2rem" className="mb-2" onClick={this.onClickDelete.bind(this,id,dispatch)}/>}  

                        <Link to={`contact/edit/${id}`}>
                        {<AiFillEdit style={{ float: 'right', color: 'black' , cursor:'pointer' , marginRight:'1rem'}} size="2rem" className="mb-2" />}
                        </Link>

                    </h3>
                    {showContactInf ? (<ul className="list-group">
                        <li className="list-group-item">email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>) : null}
               
               
                </div> 
                  )
              }}
          </Consumer>
 
  
    

        )
    }
}

Contact.propTypes =
{
    contact: PropTypes.object.isRequired

}
export default Contact;