import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
           <div className="form-group">
                              <input 
                              type={ type }
                              className= { classnames('form-control form-control-lg', {'is-invalid': error})}
                              placeholder={ placeholder } 
                              name={ name }
                              value= { value }
                              onChange={ onChange }
                              disabled = { disabled }
                              />
                              {info && <small className="form-text text-muted">{info}</small>}
                                {error && <div className = "invalid-feedback">{error}</div>}
                            </div>    
    )
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
<<<<<<< HEAD
}

TextFieldGroup.defaultProps = {
    type: 'text'
}
=======
};

TextFieldGroup.defaultProps = {
    type: 'text'
};
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0

export default TextFieldGroup;