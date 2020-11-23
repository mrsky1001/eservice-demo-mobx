import React from 'react';
import { inject, observer } from 'mobx-react';

import HeaderApp from "./HeaderApp";

const Component = inject('modalStore')(observer(({modalStore}) => (
    <HeaderApp
        isShowLegend={modalStore.isShow}
        showLegend={modalStore.open}
        hideLegend={modalStore.close}/>
)));
Component.displayName = 'HeaderApp'
export default Component;
