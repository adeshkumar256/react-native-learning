import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function goBack() {
    return navigationRef?.goBack();
}

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}


function push(routeName, params) {
    throw new Error('Missing implementation of push');
}

function reset(routeName) {
    throw new Error('Missing implementation of reset');
}

function getCurrentRoute() {
    throw new Error('Missing implementation of getCurrentRoute');
}

const getRouteName = () => {
    return navigationRef.getCurrentRoute()?.name ?? '';
};

const NavigationService = {
    navigate,
    push,
    goBack,
    reset,
    getCurrentRoute,
    getRouteName,
};

export default NavigationService;