import axios from 'axios';


export const GetViewList = (page) => async dispatch => {

    try {
        dispatch({
            type: "VIEW_LIST_LOADING"
        })


        const perPage= 4;
        const offset = (page * perPage) - perPage;

        const res = await axios.get (
            url: `https://jsonplaceholder.typicode.com/posts?limit=${perPage}&offset=${offset}`
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