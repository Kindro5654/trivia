import logo from './icons/logo.svg';
import React from 'react';
import './App.css';
import Form from './components/form'



class App extends React.Component {
 
   state = {
     results: undefined,
     error: undefined
   }

   gettingQuestion = async (e) => {
     e.preventDefault();
    var amount = e.target.elements.amount.value;
    var difficulty = e.target.elements.difficulty.value;
    const api_url = await
    fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`);
    const data = await api_url.json();
    console.log(data);

    this.setState({
      results: data.results,
      error: ""
    });
  }

  render() {
    return (
      <div className="main-theme">
        <div className="content">
          <p className="welcome-text">Welcome to the</p>
          <img src={logo} className="logo" alt="logo" />
          <Form questionMethod={this.gettingQuestion}/>
      </div>
      </div>
    );
  }
}

export default App;
