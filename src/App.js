import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className='body'>
      <div className= 'Box' >
        <h1 className='heading'>EMPLOYMENT FEEDBACK FROM</h1>
        <label className='name'>Name</label>:
        <input className='typebox' type={'text'}></input>
        <br/>
        <br/>
        <label className='name' >Departement</label>
        <input className='typebox' type={'text'}></input>
        <br/>
        <br/>
        <label className='name'>Rating</label>
        <input className='typebox' type={'text'}></input>
        <br/>
        <br/>
        <button className='submit' >SUBMIT HERE</button>
      </div>
      <div className='box2'>

      </div>
    </div>
    )
  }
}

export default App;
