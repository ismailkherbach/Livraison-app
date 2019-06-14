import AppStackNavigator from '../navigation/Navigation'



const navReducer = ( state, action) => {
    const newState = AppStackNavigator.router.getStateForAction(action, state);
    return newState || state
};

const rootReducer = combineReducers({
    nav : navReducer,
});
