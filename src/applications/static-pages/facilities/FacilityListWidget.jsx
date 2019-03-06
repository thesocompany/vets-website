import React from 'react';
import { apiRequest } from '../../../platform/utilities/api';
import LoadingIndicator from '@department-of-veterans-affairs/formation-react/LoadingIndicator';
import { buildAddressArray } from '../../facility-locator/utils/facilityAddress';

const facilityLocationPath = require('../../../site/stages/build/drupal/utilities-drupal');

import FacilityTitle from './FacilityTitle';
import FacilityAddress from './FacilityAddress';
import FacilityPhone from './FacilityPhone';

export default class FacilityListWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const facilityIds = Object.keys(this.props.facilities);
    this.request = apiRequest(
      `/facilities/va?ids=${facilityIds}`,
      null,
      this.handleFacilitiesSuccess,
      this.handleFacilitiesError,
    );
  }

  handleFacilitiesSuccess = facilities => {
    this.setState({
      loading: false,
      facilities: facilities.data,
    });
  };

  handleFacilitiesError = () => {
    this.setState({ error: true });
  };

  facilitiesList = facilities =>
    facilities.sort((a, b) => {
      const aName = a.attributes.name;
      const bName = b.attributes.name;
      if (aName < bName) {
        return -1;
      }

      if (aName > bName) {
        return 1;
      }

      return 0;
    });

  render() {
    if (this.state.loading) {
      return <LoadingIndicator message="Loading facilities..." />;
    }

    const facilitiesList = this.facilitiesList(this.state.facilities).map(
      facility => (
        <div
          key={facility.id}
          className="usa-grid vads-u-background-color--gray-lightest vads-u-margin-bottom--2p5 vads-u-padding-y--1p5"
        >
          <section className="usa-width-one-half">
            <FacilityTitle
              facility={facility}
              nickname={this.props.facilities[facility.id].nickname}
              regionPath={this.props.path}
            />
            <FacilityAddress facility={facility} />
            <div className="vads-u-margin-bottom--1p5">
              <FacilityPhone facility={facility} />
            </div>
            <div className="location-details-link">
              <a
                href={facilityLocationPath(
                  this.props.path,
                  facility.id,
                  this.props.facilities[facility.id].nickname,
                )}
                className="usa-button usa-button-secondary"
              >
                Location details <i className="fa fa-chevron-right" />
              </a>
            </div>
          </section>
          <section className="usa-width-one-half">
            <img
              src={
                this.props.facilities[facility.id].derivative
                  ? this.props.facilities[facility.id].derivative.url
                  : ''
              }
              alt={
                this.props.facilities[facility.id].alt
                  ? this.props.facilities[facility.id].alt
                  : ''
              }
            />
          </section>
        </div>
      ),
    );
    return <div className="locations">{facilitiesList}</div>;
  }
}
