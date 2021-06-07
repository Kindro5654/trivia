import React from 'react';
import {ReactComponent as GroupLogo} from '../icons/group.svg';
import {ReactComponent as FrameLogo} from '../icons/frame.svg';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.questionMethod}>
          <div className="tittle">
            <GroupLogo />
            <div className="name-input"><p>Difficulty</p></div>
          </div>
          <select name="difficulty" className="select-margin">
            <option>easy</option>
            <option>hard</option>
          </select><br />
          <div className="tittle">
            <FrameLogo />
            <div className="name-input"><p>Amount</p></div>
          </div>
          <input name="amount" type="number" /><br />
          <button>TRUE</button>
        </form>
      </div>
    );
  }
}

export default Form;
