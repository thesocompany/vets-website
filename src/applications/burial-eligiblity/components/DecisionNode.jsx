import React from 'react';
import ErrorableRadioButtons from '@department-of-veterans-affairs/formation-react/ErrorableRadioButtons';

export class DecisionNode extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      value: {
        dirty: false,
      },
    };
  }
  render() {
    const { currentNode, stateUpdater } = this.props;

    return (
      <div>
        <ErrorableRadioButtons
          onValueChange={value => {
            this.setState({ value });
          }}
          id={currentNode.id}
          name="Node"
          // errorMessage="Response required"
          label={currentNode.question}
          options={currentNode.response.map(ele => ({
            label: ele.text,
            value: ele.id,
          }))}
          value={{
            value: this.state.value.value,
            dirty: this.state.value.dirty,
          }}
          required={false}
          toolTipText="this triggers a tooltip"
        />
        <button onClick={() => stateUpdater(this.state.value.value)}>
          Submit
        </button>
        <button onClick={() => stateUpdater(0)}>reset</button>
      </div>
    );
  }
}
