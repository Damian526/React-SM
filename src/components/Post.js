import PropTypes from 'prop-types'
import Button from './Button'
import Picture from './Picture'
//import LikePost from './Button'
import './Button'

const LikePost = () => {
    alert('Liked')
}
const AlreadyLiked = () => {
    console.log("Already liked")
}

let Post = (props) => {    
    return (
        <header className='header'>
            <Picture />
            <Button className='btn' text='Like' func={props.liked === false ? LikePost : "Hello"} />
            <text style = {Stylez.caption}>{props.caption}</text>
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