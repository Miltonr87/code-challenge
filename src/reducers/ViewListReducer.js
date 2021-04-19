const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
}

const ViewListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "VIEW_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "VIEW_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "Not found"
            }
        case "VIEW_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: ""
            }           
        default:
            return state
    }
}

export default ViewListReducer;