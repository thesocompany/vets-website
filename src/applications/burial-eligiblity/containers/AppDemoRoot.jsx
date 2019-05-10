import { connect } from 'react-redux';
import React from 'react';

import { DecisionNode } from '../components/DecisionNode';

/*

QUESTION1: did you have a purple heart? 
  |_> YES -> DONE: VET      
  |_> NO
        |_> QUESTION2: Do you have honerable discharge?
              |_>YES: -> DONE: VET
              |_>NO:
                  |_>QUESTION99: Do you military records?
                        |_>YES: DONE:VET
                        |_> NO: DONE: Not vet
  |_> MAYBE
          |_>Goes to question99


create a JS graph datastructure, with each node containing the question, response(link to the next node)

create a function that finds position in graph

create a React child component which represents a node to show question and response

*/
const decisionTree = {
  0: {
    id: 0,
    question: 'Do you have a purple heart?',
    response: [
      {
        id: 1,
        text: 'No',
      },
      {
        id: 99,
        text: 'Yes',
      },
      {
        id: 2,
        text: 'Maybe',
      },
    ],
  },
  1: {
    id: 1,
    question: 'Do you have honerable discharge?',
    response: [
      {
        id: 2,
        text: 'No',
      },
      {
        id: 99,
        text: 'Yes',
      },
    ],
  },
  2: {
    id: 2,
    question: 'Do you military records?',
    response: [
      {
        id: 98,
        text: 'No',
      },
      {
        id: 99,
        text: 'Yes',
      },
    ],
  },
  99: {
    id: 99,
    question: 'YES vet',
    response: [],
  },
  98: {
    id: 98,
    question: 'NO VET',
    response: [],
  },
};

class AppDemoRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNode: decisionTree[0],
    };
  }

  stateUpdater = id => {
    this.setState({
      currentNode: decisionTree[id],
    });
  };

  render() {
    return (
      <div>
        <DecisionNode
          currentNode={this.state.currentNode}
          stateUpdater={this.stateUpdater}
        />
      </div>
    );
  }
}

export default connect(
  null,
  null,
)(AppDemoRoot);

//https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/errorableradiobuttons/
