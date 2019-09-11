import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
<<<<<<< HEAD
import { createProfile } from '../../actions/profileActions';
=======
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0


class CreateProfile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
         displaySocialInputs: false, 
         handle: '',
         company: '',
         website: '',
         location: '',
         status: '',
<<<<<<< HEAD
         skills: '',
=======
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
         githubusername:'',
         bio: '',
         twitter:'',
         facebook: '',
         linkedin: '',
         youtube: '',
         instagram: '',
         errors: {}
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
<<<<<<< HEAD
  
=======
    
    componentDidMount(){
        this.props.getCurrentProfile();
    }
    
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    } 
    
    onSubmit(e) {
        e.preventDefault();
        
        const profileData = {
<<<<<<< HEAD
           handle: this.state.handle,
=======
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
           company: this.state.company,
           website: this.state.website,
           location: this.state.location,
           status: this.state.status,
           skills: this.state.skills,
           githubusername: this.state.githubusername,
           bio: this.state.bio,
           twitter: this.state.twitter,
           facebook: this.state.facebook,
           linkedin: this.state.linkedin,
           youtube: this.state.youtube,
           instagram: this.state.instagram
        }; 
     
        this.props.createProfile(profileData, this.props.history);  
    }
    
    onChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }
    
    render() {
        const { errors, displaySocialInputs } = this.state;
        
        let socialInputs;
        
        if (displaySocialInputs) {
            socialInputs = (
            <div>
                <InputGroup
                placeholder ="Twitter Profile URL"
                name="twitter"
                icon="fab fa-twitter"
                value={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}
                />
                <InputGroup
                placeholder ="Facebook Profile URL"
                name="facebook"
                icon="fab fa-facebook"
                value={this.state.facebook}
                onChange={this.onChange}
                error={errors.facebook}
                />
                <InputGroup
                placeholder ="LinkedIn Profile URL"
                name="linkedin"
                icon="fab fa-linkedin"
                value={this.state.linkedin}
                onChange={this.onChange}
                error={errors.linkedin}
                />
                <InputGroup
                placeholder ="YouTube Profile URL"
                name="youtube"
                icon="fab fa-youtube"
                value={this.state.youtube}
                onChange={this.onChange}
                error={errors.youtube}
                />
                <InputGroup
                placeholder ="Instagram Profile URL"
                name="instagram"
                icon="fab fa-instagram"
                value={this.state.instagram}
                onChange={this.onChange}
                error={errors.instagram}
                />
            </div>
                )
        }
        
<<<<<<< HEAD
=======
        
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
      //Select options for status  
        const options = [
            { label: '* Select Professional Status', value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student', value: 'Student' },
            { label: 'Instructor', value: 'Instructor' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' }
            ];    
        
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create Profile</h1>
                            <p className="lead text-center">
                            Let's get some information about you...
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                placeholder="*Profile Handle"
                                name="handle"
                                value={this.state.handle}
                                onChange={this.onChange}
                                error={errors.handle}
                                info="A unique profile URL for your full name, company name or nickname."
                                />
                                <SelectListGroup
                                placeholder="Status"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                                options={options}
                                error={errors.status}
                                info="Tell us about your career level."
                                />
                                <TextFieldGroup
                                placeholder="Company"
                                name="company"
                                value={this.state.company}
                                onChange={this.onChange}
                                error={errors.company}
                                info="Tell us who and how you work!"
                                />
                                <TextFieldGroup
                                placeholder="Website"
                                name="website"
                                value={this.state.website}
                                onChange={this.onChange}
                                error={errors.website}
                                info="Website"
                                />
                                <TextFieldGroup
                                placeholder="Location"
                                name="location"
                                value={this.state.location}
                                onChange={this.onChange}
                                error={errors.location}
                                info="Location"
                                />
                                <TextFieldGroup
                                placeholder="Skills"
                                name="skills"
                                value={this.state.skills}
                                onChange={this.onChange}
                                error={errors.skills}
                                info="List your skills, separating each one with a comma."
                                />
                                <TextFieldGroup
                                placeholder="GitHub Username"
                                name="githubusername"
                                value={this.state.githubusername}
                                onChange={this.onChange}
                                error={errors.githubusername}
                                info="Show off what you've done."
                                />
                                <TextAreaFieldGroup
                                placeholder="Short Bio"
                                name="bio"
                                value={this.state.bio}
                                onChange={this.onChange}
                                error={errors.bio}
                                info="Talk about yourself, you show-off."
                                />
                                <div className="mb-3">
                                    <button
                                    type= "button"
                                    onClick ={() => {
                                        this.setState(prevState => ({displaySocialInputs: !prevState.displaySocialInputs }))
                                    }} className="btn btn-light"> 
                                    Add Social Links
                                    <span className="text-muted"> (Optional)  </span>
                                    </button>
                                </div>
                                {socialInputs}
<<<<<<< HEAD
                                <input type="submit" value="Submit" 
                                className="btn btn-info btn-block mt-4"  />
=======
                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4"  />
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
                            </form>
                        </div>
                    </div>
                </div>    
            </div>
<<<<<<< HEAD
            );
=======
            )
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
<<<<<<< HEAD
    errors: PropTypes.object.isRequired
=======
    errors: PropTypes.object.isRequired,
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
};

const mapStatetoProps = state => ({
  profile: state.profile,
<<<<<<< HEAD
  errors: state.errors    
});


export default connect(mapStatetoProps, { createProfile })(withRouter(CreateProfile));
=======
  errors: state.errors
    
});


export default connect(mapStatetoProps, { createProfile, getCurrentProfile })(withRouter(CreateProfile));
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
