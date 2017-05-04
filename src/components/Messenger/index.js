import React, {Component} from 'react';
import './messenger.css';

export default class Messenger extends Component {

    constructor() {
      super();

      this.state = {
        message: '',
        messages: []
      }

      this.handleMessageChange = this.handleMessageChange.bind(this);
      this.handleMessageSend = this.handleMessageSend.bind(this);
    }

    handleMessageChange(event) {
      this.setState({message: event.target.value});
    }

    handleMessageSend(event) {
      event.preventDefault();

      this.resetInput();
    }

    resetInput() {
      this.setState({message: ''});
    }

    renderMessageList() {
      return this.state.messages.map((msg, index) => {
        return (
          <li key={index}>
            {msg}
          </li>
        )
      })
    }

    render() {
      return (
        <div>
          <ul id="messages">
            {this.renderMessageList()}
          </ul>
          <form action="">
            <input value={this.state.message} onChange={this.handleMessageChange} autoComplete="off"/>
            <button onClick={this.handleMessageSend}>Send</button>
          </form>
        </div>
      );
    }
}
