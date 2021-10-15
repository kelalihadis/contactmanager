import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
const TextInputGroup =
({label,name,type,placeholder,onChange,value,error}) => {
    return (
    
          <div className="form-group">
             <label htmlFour={name}>{label}</label>
              <input type={type} name={name} placeholder={placeholder}
                className={classnames('form-control form-control-lg', {'is-invalid': error })}
                onChange={onChange}
                value={value}  />

               {error && <div className="invalid-feedback">{error}</div>}
           </div>
    )
}

TextInputGroup.propTypes ={
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string
}
TextInputGroup.defaultProps ={
    type: 'text'
}

export default TextInputGroup;