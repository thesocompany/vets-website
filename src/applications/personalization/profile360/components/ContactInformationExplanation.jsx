import React from 'react';
import AlertBox from '@department-of-veterans-affairs/formation-react/AlertBox';
import AdditionalInfo from '@department-of-veterans-affairs/formation-react/AdditionalInfo';
import recordEvent from 'platform/monitoring/record-event';

import facilityLocator from 'applications/facility-locator/manifest';

export default function ContactInformationExplanation() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <AlertBox status="info" isVisible>
          <p>
            We’ll use this information to contact you about certain benefits and
            services, including disability compensation, pension benefits, and
            claims and appeals. If you’re enrolled in VA health care, we’ll send
            your prescriptions to the mailing address listed below. Your health
            care team may also use this contact information to communicate with
            you.
          </p>
        </AlertBox>
      </div>
      <AdditionalInfo
        triggerText="How do I update my contact information for other benefits?"
        onClick={() => {
          recordEvent({
            event: 'profile-navigation',
            'profile-action': 'view-link',
            'profile-section': 'update-personal-information',
          });
        }}
      >
        <p>
          Some of our departments keep your contact information updated in their
          own separate records. If you use any of the VA benefits or services
          listed below, you’ll need to contact the department that handles those
          benefits directly to update your information.
        </p>
        <h5>
          Contact these departments directly to update your contact information:
        </h5>
        <ul>
          <li>
            <strong>For education benefits:</strong> Call 888-GI-BILL-1
            (888-442-4551), Monday through Friday, 7:00 a.m. to 6:00 p.m. CT
          </li>
          <li>
            <strong>For home loan benefits:</strong> Call 877-827-3702, Monday
            through Friday, 8:00 a.m. to 6:00 p.m. ET to reach the nearest VA
            regional benefit office with loan guaranty staff.
          </li>
          <li>
            <strong>For Veterans' Mortgage Life Insurance:</strong> Call the VA
            Insurance Center (VAIC) at 800-669-8477, Monday through Friday, 8:00
            a.m. to 6:00 p.m. ET
          </li>
        </ul>
        <a href={facilityLocator.rootUrl}>
          Find your nearest VA medical center
        </a>
      </AdditionalInfo>
    </div>
  );
}
