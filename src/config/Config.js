import React, { useEffect } from 'react';
import Routes from './Routes';

import PageStructure from '../components/PageStructure';

const Config = () => {

    // useEffect(() => {
    //   setPreviousUrl(window.location.href);
    // });

    return  (
        <PageStructure>
          {/* <MetaTagsContainer /> */}
          <Routes/>
        </PageStructure>
      );
  }

  export default Config