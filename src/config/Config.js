import React, { useEffect } from 'react';
import Routes from './Routes';

import Page from 'app/components/Page';

const Config = () => {

    useEffect(() => {
    //   setPreviousUrl(window.location.href);
    });

    return  (
        <Page>
          {/* <MetaTagsContainer /> */}
          <Routes/>
        </Page>
      );
  }

  export default Config