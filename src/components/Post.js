import PropTypes from 'prop-types'
import Button from './Button'
import Picture from './Picture'
//import LikePost from './Button'
import './Button'
import { useState } from 'react'
import App from '../App.js';


const LikePost = () => {
    var Post_liked = Post.liked = true
    console.log("Liked")
    return(Post_liked)
}

const AlreadyLiked = () => {
    console.log("Already liked")
}

var Post = (props) => {
    const [post, createPost] = useState({
        poster: "Team SplashFace",
        image: "./favicon.ico",
        likes: 0,
        comments: 0,
        id: 1
    })
    var likeButton = (<Button className='btn' id="like-button" text='Like' onClick={props.liked === false ? LikePost : AlreadyLiked} />)
    return (
        <header className='header'>
            <h1><Picture source={"./favicon.ico"} /></h1>
            <div>
                {likeButton}
                <div style = {Stylez.caption}>{props.caption}</div>
            </div>
            <h3>Posted by {props.user}</h3>
        </header>
    )
}

Post.defaultProps = {
    image: 'Image Here-\n',
    caption: 'PLACEHOLDER CAPTION',
    numLikes: 0,
    likedBy: null,
    liked: false, 
    writable: true
}

Post.propTypes = {
    image: PropTypes.string,       //CHANGE THIS TO AN IMAGE???
    caption: PropTypes.string,
    numLikes: PropTypes.number,
    likedBy: PropTypes.array,
    liked: PropTypes.bool
}

export default Post

const Stylez = {
    "caption": {color: 'white'},
    "hashtag": {color: 'steelblue'},
    "like": {color: 'red'},
    "unlike": {color: 'white'}
}