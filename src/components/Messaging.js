import * as App from '../App.js'

const Message = (props) => {
    return (
        <div style={App.Stylez.chatbox} className="task">
            <h3>{props.text}</h3>
            <h5>{props.sentBy}</h5>
        </div>
    )
}

export default Message
