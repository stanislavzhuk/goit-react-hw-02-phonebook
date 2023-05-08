import { Component } from 'react';
// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
      </div>
    );
  }
}

export default App;