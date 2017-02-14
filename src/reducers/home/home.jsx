function home(state = { count: 0}, action) {
    switch(action.type) {
        case 'HOME':
            return Object.assign({}, state, {
                count: state.count - 1
            });
        default:
            return state;
    }
}

module.exports = {
    home
};