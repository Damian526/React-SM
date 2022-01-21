import './App.css';
import Button from './components/Button';
import Post from './components/Post';
import * as GC from './GlobalChat.js'
import { useState } from 'react'
import Chat2 from './Chat2';

/*
export var setName = (name, v) => {
  console.log('peaches')
  v = name
}
*/

export var username = "Hello"

function App() {
  const [post, createPost] = useState({
    user: "Team SplashFace",
    image: "./favicon.ico",
    caption: "this is a caption",
    likes: 0,
    comments: 0,
    id: 1
  })

  const likePost = (buttonId, postId) => {
    const likeButton = document.getElementById(buttonId)
    const fullPost = document.getElementById(postId)
    createPost({
      user: "Team SplashFace",
      image: "./favicon.ico",
      caption: fullPost.props.caption,
      likes: fullPost.props.likes + 1,
      // likedBy: []
      comments: fullPost.props.comments,
      // commenters: []
      id: fullPost.props.id
    })
    return (
      <Post liked={false} user={'@' + fullPost.user} image={fullPost.image} caption={fullPost.caption} id={fullPost.id} />
    )
  }

  const [messages1, setMessage] = useState([
    {
      //id: 1,
      message: "This is a chat message.",
      sender: "Team SplashFace",
      messageId: 0
    }
  ])

  const SendMsg = (messages2) => {
    if (messages2.length > 0 && document.getElementById("posterName").textContent.length > 2) {
      const id = Math.floor(Math.random() * 23455) + 1
      //console.log(getUsername() + ": "+ messages2)
      setMessage([...messages1, {
        message: messages2,
        sender: getUsername(),
        messageId: id
      }])
    }
  }

  const [pfp, setPfp] = useState("./favicon.ico")
  // URL.createObjectURL(pfp)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello and welcome to SplashFace!</h1>

        <h3>
          <div>Enter your username: </div>
          <input type="text" style={Stylez.textbox} id="name_setter" />
          <Button text='Set Name' onClick={() => GC.setText(username, GC.textField(document.getElementById("name_setter")))} />
        </h3>

        <h3>
          <div>Set your profile picture: <img id="profile-pic" src={pfp} alt={pfp || "Image not found"} /> </div>
          <input type="file" accept="image/*" style={Stylez.textbox} id="pfp-setter" onChange={(e) => setPfp(e.target.files[0])} />
        </h3>

        <h3 id="posting_as" >
          Posting as: {" "} <div id="posterName"></div>
        </h3>

        <Chat2 onAdd={SendMsg} chatlog={messages1} />
        <Post liked={false} user={'@' + post.user} image={post.image} caption="this is a caption" numLikes={0} id={"Post-" + 1} />

      </header>
    </div>
  );
}

export default App;

export const Stylez = {
  "caption1": { color: 'black' },
  "caption": { color: 'white' },
  "hashtag": { color: 'steelblue' },
  "like": { color: 'red' },
  "unlike": { color: 'white' },
  "textbox": { height: '20px' },
  "chatbox": { color: 'black', backgroundColor: '#fff' }
}

export const getUsername = () => {
  if (document.getElementById("posterName") != null) {
    console.log("Gotten username: " + document.getElementById("posterName").textContent)
    return document.getElementById("posterName").innerHTML
  }
  else {
    return "NAME HERE"
  }
}

/* OLD CHAT STUFF
<h2>
  <input type="file" id="btn" />
  <Button text='Submit' />
  <GlobalChat messages={messages1} />
</h2>
*/