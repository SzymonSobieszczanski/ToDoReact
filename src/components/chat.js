import React, { Component } from 'react';
var socket = require('socket.io-client')('http://localhost:3000');
var messageComponent = require('./message');

class Chat extends Component
{
constructor(){
    super();
    this.state = {
    
        nickname: '',
        message: '',
        whostyping: '',
        messageList: [],
        currentMessage: ''
       
    };


    this.send = this.send.bind(this);
   this.updateNickname = this.updateNickname.bind(this);
   this.updateMessage = this.updateMessage.bind(this);
   this.handleMessageEvent = this.handleMessageEvent.bind(this);
   this.handleTypingEvent = this.handleTypingEvent.bind(this);
}

componentDidMount()
{this.handleMessageEvent()
   this.handleTypingEvent()
  

         


}

handleMessageEvent()
{
    socket.on('chat', (data)=>{
        let temp = this.state.messageList;
       
         let message = this.state.currentMessage;
         message = {nickname: data.nickname,message: data.message}
         temp.push(message);
      
         this.setState({messageList: temp})
       console.log(message);
    })   
}
handleTypingEvent()
{
    socket.on('typing',function(data){
        
        this.setState({whostyping: data})
            console.log(data);
          });

}

send()
{
  socket.emit('chat',{
    nickname: this.state.nickname,
message: this.state.message
 });
 this.setState({message: ''})
}
updateNickname(evt)
{
this.setState({nickname: evt.target.value})
}
updateMessage(evt)
{

    this.setState({message: evt.target.value})

    socket.emit('typing', this.state.nickname);
}


render(){
   let temp = this.state.messageList;
   console.log(temp);
    const messages = temp.map(message => {
        return(      
              
        <div key={message}>
        <messageComponent
         message={message}
         
        />   
        </div>
        
        
        )
         })
   

return(
<div>
<div id="chat">
            <h2>Chat</h2>
            <div id="chat-window">
                <div id="output">
                    {messages}              
                </div>
            </div>
            <input   name="nickname"
                value={this.state.nickname}
                placeholder="name"
                onChange={this.updateNickname}
                type="text" />
            <input name="message"
                value={this.state.message}
                placeholder="Message"
                onChange={this.updateMessage} />
            <button id="send-button" onClick={this.send}>Send</button>
        </div>

</div>


)






}



}

export default Chat;