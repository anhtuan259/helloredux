
export default (state, action) => {
    console.log(state);
    console.log('action.tech', action.tech);
    switch (action.type) {
        case "SET_TECHNOLOGY":
            return {
                ...state,
                tech: action.tech
            };

        default:
            return state;
    }
}