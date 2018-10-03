
import React, { Component } from 'react';
import Chat from "./Chat";
import NewChat from "./NewChat"

class App extends Component {
  render() {
    return (
      <div>
    
          <Chat/>
          <NewChat />

      </div>
    );
  }
}

export default App;
