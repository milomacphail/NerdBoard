import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
             text: '',
            errors: {} 
        }
<<<<<<< HEAD
        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
=======
        this.onChange = this.onChange.bing(this);
        this.onSubmit= this.onSubmit.bing(this);
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
    }
    
    componentWillReceiveProps(newProps) {
        if(newProps.errors) {
            this.setState({errors: newProps})
        } 
    }
    
    onSubmit(e){
        e.preventDefault();
        
        const { user } = this.props.auth;
        
        const newPost = {
            text: this.state.text,
            name: user.name,
            avatar: user.avatar
        };
        
        this.props.addPost(newPost);
        this.setState({text: ''});
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }
    
    render () {
        
        const { errors } = this.state;
        
        return (
            <div className="post-form mb-3">
            <div className="card card-info">
              <div className="card-header bg-info text-white">
                Say Somthing...
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <TextAreaFieldGroup
                        placeholder="Create a Post"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        error={errors.text}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
            )
    }
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
   auth: state.auth,
   errors: state.errors 
});

export default connect(mapStatetoProps, {addPost})(PostForm);