import { func } from "prop-types"
import App from "./App"
import * as AppFunctions from './App'
import Button from "./components/Button"
import Message from "./components/Messaging"

export var setName = (name, v) => {
    let pa = document.getElementById("posting_as")
    v = name
    pa.innerHTML = "Posting as " + v
    console.log('peaches' + pa.innerHTML)
}

export var textField = (tf) => {
    return tf.value
}

export function log(s) {
    console.log(s)
}

let allMessages = [
    {name: "System", text: "This is the chat" }
]

function getMessages(array) {
    array.map((v) => {return(v.name + ": " + v.text)})
}
/**/
function refresh() {
    return (allMessages.map((v) => {return(v.name + ": " + v.text)}))
}
let createMessage = (sender, msg) => {
    let onesMessage = {
        name: '',
        text: ''
    }
    onesMessage.name = sender
    onesMessage.text = msg
    allMessages.push( onesMessage )
    //getMessages(allMessages)
    console.log(allMessages)
}


export const TextBox = (props) => {
    return (
    <h2>
        <div>{props.textMessage + '\n'}</div>
    </h2>)
}
function sendMessage(user, elem_id) {
    createMessage(user, textField(document.getElementById(elem_id)));
    refresh();
    return <div><TextBox textMessage = {refresh()} /></div>
}

const GlobalChat = ( props ) => {
    return (
        <div>
            <input id='send_msg' type="text" />
            <Button text='Send' onClick={() => sendMessage(AppFunctions.getUsername, 'send_msg') } />
            <div>
                <>{props.messages.map((v) => (<Message key={v.id} sentBy={v.sender} text={v.message} />) )}</>
            </div>
            
        </div>
    )
}

export default GlobalChat
// <TextBox textMessage = {refresh()} />
// {allMessages.map((v) => {return(v.name + ": " + v.text)})}
// <Button text='Send' onClick={() => createMessage(AppFunctions.getUsername, textField(document.getElementById('send_msg')))} />