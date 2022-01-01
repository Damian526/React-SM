import * as AppFunctions from './App'
import Button from "./components/Button"
import Message from "./components/Messaging"

export var setText = (oldText, newText) => {
    let pa = document.getElementById("posterName")
    oldText = newText
    pa.innerHTML = oldText
}

export var textField = (tf) => {
    if (tf != null) {
        console.log("innertext: " + tf.value)
        return tf.value
    }
    else {
        return "TEXT HERE"
    }
}

export function log(s) {
    console.log(s)
}

let allMessages = [
    { name: "System: ", text: "This is the chat" }
]

function getMessages(array) {
    array.map((v) => { return (v.name + ": " + v.text) })
}
/**/
function refresh() {
    return (allMessages.map((v) => { return (v.name + ": " + v.text) }))
}
let createMessage = (sender, msg) => {
    let onesMessage = {
        name: '',
        text: ''
    }
    onesMessage.name = sender
    onesMessage.text = msg
    allMessages.push(onesMessage)
    //getMessages(allMessages)
    console.log(allMessages)
    //return <div><TextBox textMessage = {refresh()} /></div>
}


export const TextBox = (props) => {
    return (
        <h2>
            <div>{props.textMessage + '\n'}</div>
        </h2>)
}
function sendMessage(user, elem_id) {
    createMessage(user, textField(document.getElementById(elem_id)))
    refresh()
    // console.log("sent by: " + user)
    return <div><Message text={refresh()} /></div>
}

const MapFunction = () => {
    sendMessage(AppFunctions.getUsername(), 'send_msg')
    return (allMessages.map((v) => { return <Message key={v.id + 1} sentBy={v.sender} text={v.message} /> }))
    //return (props.messages.map((v) => {return <Message key={v.id} sentBy={v.sender} text={v.message} />}))
}

const GlobalChat = (props) => {
    // { document.getElementById("textsContainer").innerHTML=  props.messages.map((v) => {return <Message key={v.id} sentBy={v.sender} text={v.message} />}) }
    return (
        <div>
            <input id='send_msg' type="text" />
            <Button text='Send' onClick={
                props.messages.map((v) => (<Message key={v.id} sentBy={v.sender} text={v.message} />))
            }/>
            <div type="text" id="textsContainer"></div>
        </div>
    )
}

export default GlobalChat
// <TextBox textMessage = {refresh()} />
// {allMessages.map((v) => {return(v.name + ": " + v.text)})}
// <Button text='Send' onClick={() => createMessage(AppFunctions.getUsername, textField(document.getElementById('send_msg')))} />
// {() => sendMessage(AppFunctions.getUsername, 'send_msg')}
// {props.messages.map((v) => (<Message key={v.id} sentBy={v.sender} text={v.message} />) )}