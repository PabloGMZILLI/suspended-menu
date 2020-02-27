import React, { useEffect } from 'react';
import Routes from './Routes';

import PageStructure from '/home/pablo.zilli/Desktop/studies/suspended-menu/src/components/PageStructure';

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