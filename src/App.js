import './App.css';
import Button from './components/Button';
import Post from './components/Post';
import GlobalChat from './GlobalChat';
import * as GC from './GlobalChat.js'
import { useState } from 'react'

/*
export var setName = (name, v) => {
  console.log('peaches')
  v = name
}
*/

let username = null



function App() {
  const [messages1, setMessage] = useState([
    {
      id: 1,
      message: "This is a chat message.",
      sender: "Team SplashFace"
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello and welcome to SplashFace!</h1>
        <h3>
          <div>Enter your name: </div>
          <input type="text" style={Stylez.textbox} id="name_setter" />
          <Button text='Set Name' onClick={() => GC.setName(GC.textField(document.getElementById("name_setter")), username)} />
        </h3>
        <text id="posting_as" >Posting as</text>
        <h2>
          <input type="file" id="btn" />
          <Button text='Submit' />
          <GlobalChat messages={messages1} />
        </h2>
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
  "chatbox": {color: 'black', backgroundColor: '#fff'}
}

export const getUsername = () => {
  return username
}