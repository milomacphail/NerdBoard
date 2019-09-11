import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions'


class Posts extends Component {
    
    componentDidMount() {
        this.props.getPosts();
    }
    
    render() {
        
        const { posts, loading } = this.props.post;
        let postContent;
        
        if (posts === null || loading) {
            postContent = <Spinner /> 
        } else {
            postContent = <PostFeed posts={posts} />
        }
        
        return (
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <PostForm />
                            {postContent}
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

<<<<<<< HEAD
Posts.propTypes = {
=======
Posts.proptypes = {
>>>>>>> d41a4659d45e24292ac0d4c8daf9ec4bae2684b0
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
   post: state.post,
});

export default connect(mapStatetoProps, { getPosts })(Posts);