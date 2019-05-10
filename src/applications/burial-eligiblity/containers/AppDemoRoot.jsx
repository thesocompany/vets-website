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
    id: '0',
    question: 'Are you a Veteran who is under age 65?',
    response: [
      {
        id: '1',
        uuid: '1',
        text: 'Yes',
      },
      {
        id: '99',
        uuid: '2',
        text: 'No',
      },
    ],
  },
  1: {
    id: '1',
    question: 'Do you have honorable discharge?',
    response: [
      {
        id: '2',
        uuid: '3',
        text: 'Yes',
      },
      {
        id: '99',
        uuid: '4',
        text: 'No',
      },
    ],
  },
  2: {
    id: '2',
    question: 'Did you serve at least 1 day during wartime?',
    response: [
      {
        id: '3',
        uuid: '5',
        text: 'Yes',
      },
      {
        id: '99',
        uuid: '6',
        text: 'No',
      },
    ],
  },
  3: {
    id: '3',
    question: 'Are either of the descriptions below true for you?',
    response: [
      {
        id: '4',
        uuid: '7',
        text:
          'Started on active duty before September 8, 1980, and you served at least 90 days on active duty',
      },
      {
        id: '4',
        uuid: '8',
        text:
          'Started on active duty as an enlisted person after September 7, 1980, and served at least 24 months or the full period for which you were called or ordered to active duty',
      },
      {
        id: '4',
        uuid: '9',
        text:
          'Were you an officer and started on active duty after October 16, 1981, and you hadn’t previously served on active duty for at least 24 months?',
      },
      {
        id: '99',
        uuid: '10',
        text: 'None',
      },
    ],
  },
  4: {
    id: '4',
    question: 'Do you have no income, or an income less than $13,855?',
    response: [
      {
        id: '5',
        uuid: '11',
        text: 'Yes',
      },
      {
        id: '99',
        uuid: '12',
        text: 'No',
      },
    ],
  },
  5: {
    id: '5',
    question: 'Do any of the following apply to you?',
    response: [
      {
        id: '98',
        uuid: '13',
        text:
          "have a service-connected disability that we've rated as totally and permanently disabling?",
        isCheckbox: true,
      },
      {
        id: '98',
        uuid: '14',
        text:
          'currently live in a nursing home or other care facility because of your disability?',
        isCheckbox: true,
      },
      {
        id: '98',
        uuid: '15',
        text:
          'currently receive Social Security Disability Insurance or Supplemental Security Income?',
        isCheckbox: true,
      },
      {
        id: '99',
        uuid: '16',
        text: 'None',
        isCheckbox: true,
      },
    ],
  },
  98: {
    id: '98',
    uuid: '17',

    question: 'Congratulations, you are eligible!',
    response: [],
  },
  99: {
    id: '99',
    uuid: '18',
    question: 'Sorry, you are not eligible.',
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
