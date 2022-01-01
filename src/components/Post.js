import PropTypes from 'prop-types'
import Button from './Button'
import Picture from './Picture'
//import LikePost from './Button'
import './Button'

const LikePost = () => {
    var Post_liked = Post.liked = true
    console.log("Liked")
    return(Post_liked)
}

const AlreadyLiked = () => {
    console.log("Already liked")
}

var Post = (props) => {
    return (
        <header className='header'>
            <h1><Picture /></h1>
            <h2>
                <Button className='btn' text='Like' onClick={props.liked === false ? LikePost : AlreadyLiked} />
                <div style = {Stylez.caption}>{props.caption}</div>
            </h2>
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