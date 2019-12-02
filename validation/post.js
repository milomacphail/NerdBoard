/*global import export */ 

const Validator = require('validator');
const isEmpty =  require('./is-empty');

module.exports = function validatePostInput(data){
    
    let errors = {};
    
    data.text = !isEmpty(data.text) ? data.text : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    
    if (!Validator.isLength(data.text, {min: 1, max: 300})) {
        errors.text = "Post must be less than 300 characters. "
    }
   
    if (Validator.isEmpty(data.text)){
        errors.text = "Text field is required.";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};