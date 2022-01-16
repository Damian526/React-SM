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

    return (
        <form className="task" key={props.key} onSubmit={onSubmit}>
            <div>
                <input type='text'
                    placeholder='Send a message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
            </div>
        </form>
    )
}

export default Chat2
