import * as App from '../App.js'

const Message = (props) => {
    return (
        <div style={App.Stylez.chatbox} className="task" key={props.key} >
            <h5>{props.sentBy}:</h5>
            <h3>{props.text}</h3>
        </div>
    )
}


export default Message
/*
export default Message2
export default AddMsg
*/
