import { connect } from 'react-redux';
import React from 'react';

import Output from '../components/Output';

import ErrorableRadioButtons from '@department-of-veterans-affairs/formation-react/ErrorableRadioButtons';

class AppDemoRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        value: 'option 2',
        dirty: false,
      },
    };
  }
  render() {
    return (
      <div>
        <Output output={this.state.value.value} />
        hello from the burial elibility root react component
        <ErrorableRadioButtons
          onValueChange={value => this.setState({ value })}
          id="defaultId"
          name="defaultName"
          errorMessage="Radio Button errorMessage"
          label="Errorable Radio Buttons"
          options={[
            'option 1',
            'option 2',
            'option 4',
            {
              label: 'option 3 label',
              value: 'expanding option 3',
              additional: 'expanded option 3',
            },
          ]}
          value={this.state.value}
          required={false}
          toolTipText="this triggers a tooltip"
        />{' '}
      </div>
    );
  }
}

export default connect(
  null,
  null,
)(AppDemoRoot);

//https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/visual-design/components/errorableradiobuttons/
