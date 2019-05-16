import React from 'react';
import { connect } from 'react-redux';
import { getChoices, getChosen } from '../../redux/selectors';

class Selector extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="selector" style={{marginTop: "50px"}}>
        <h3>{this.props.title}</h3>
        <p>Current selection: {this.props.chosen}</p>
        <p>Available choices: {this.props.choices.toString()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const choices = getChoices(state, ownProps.choiceType);
  const chosen = getChosen(state, ownProps.choiceType);
  return { choices, chosen }
};

export default connect(mapStateToProps)(Selector);
