import PropTypes from 'prop-types'
import Button from './Button'
import Picture from './Picture'
//import LikePost from './Button'
import './Button'
import { useState } from 'react'
import App from '../App';


const AlreadyLiked = () => {
    console.log("Already liked")
}
const LikePost = () => {
    console.log("Liked")
}
var Post = (props) => {
    var likes = 1
    

    var likeButton = (<Button className='btn' id="like-button-1" text='Like' onClick={props.liked === false ? LikePost : AlreadyLiked} />)
    
    return (
        <header className='header' id={props.id}>
            <h1><Picture source={props.image} /></h1>
            <div>
                {likeButton}
                <div style = {Stylez.caption}>{props.caption}</div>
                <div style = {Stylez.caption}>Likes: {props.numLikes}</div>
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