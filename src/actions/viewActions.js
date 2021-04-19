import axios from 'axios';


export const GetViewList = (page) => async dispatch => {

    try {
        dispatch({
            type: "VIEW_LIST_LOADING"
        })


        // const perPage= 4;
        // const offset = (page * perPage) - perPage;

        
        const res = await axios.get (
            `https://jsonplaceholder.typicode.com/posts?userId=1`
        )
        dispatch({
            type: "VIEW_LIST_SUCCESS",
            payload: res.data
        })
    } catch(e) {
        dispatch({
            type: "VIEW_LIST_FAIL"
        })
    }
}