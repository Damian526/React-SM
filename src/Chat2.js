import React from 'react'
import { useState } from 'react'

const Chat2 = (props) => {
    const [message, setMessage] = useState('')
    const [allMessages2, setAllMessages] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        props.onAdd(message)
        setMessage('')
    }

    const getMsg = () => {
        return message
    }

    return (
        <form className="task" key={props.key} onSubmit={onSubmit}>
            <div>
                <input type='text'
                    placeholder='Send a message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className='task'>
                {props.chatlog.map(v => 
                    (<div key={v.messageId} style={Stylez.caption1}> {"\n" + v.sender + ": " + v.message} </div>) ) }
            </div>
        </form>
    )
}

export default Chat2

const Stylez = {
    "caption1": { color: 'black' },
    "caption": { color: 'white' },
    "hashtag": { color: 'steelblue' },
    "like": { color: 'red' },
    "unlike": { color: 'white' },
    "textbox": { height: '20px' },
    "chatbox": { color: 'black', backgroundColor: '#fff' }
  }
  