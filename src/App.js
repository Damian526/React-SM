import './App.css';
import Button from './components/Button';
import Post from './components/Post';
import GlobalChat from './GlobalChat';
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
  const [messages1, setMessage] = useState([
    {
      //id: 1,
      message: "This is a chat message.",
      sender: "Team SplashFace"
    }
  ])

  const SendMsg = (messages2) => {
    const id = Math.floor(Math.random() * 23455) + 1
    console.log(getUsername() + ": "+ messages2)
    
    setMessage([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello and welcome to SplashFace!</h1>
        <h3>
          <div>Enter your name: </div>
          <input type="text" style={Stylez.textbox} id="name_setter" />
          <Button text='Set Name' onClick={() => GC.setText(username, GC.textField(document.getElementById("name_setter")))} />
        </h3>
        <h3 id="posting_as" >
          Posting as: {" "} <div id="posterName"></div>
        </h3>
        <Chat2 onAdd={SendMsg} />
        <h3></h3>
        <Post liked={false} user={username} caption='this is a caption' />
      </header>
    </div>
  );
}

export default App;

export const Stylez = {
  "caption": { color: 'white' },
  "hashtag": { color: 'steelblue' },
  "like": { color: 'red' },
  "unlike": { color: 'white' },
  "textbox": { height: '20px' },
  "chatbox": { color: 'black', backgroundColor: '#fff' }
}

export const getUsername = () => {
  if (document.getElementById("posterName") != null) {
    console.log("Gotten username: " + document.getElementById("posterName").innerHTML)
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