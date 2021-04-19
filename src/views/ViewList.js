import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

const ViewList = () => {
    const dispatch = useDispatch();
    const viewList = useSelector(state => state.ViewList);

    const ShowData = () => {
        if (!_.isEmpty(viewList.data)) {
            return <p> Data Received </p>
        }

        if (viewList.loading) {
            return <p> Loading... </p>
        }

        if (viewList.errorMsg !== "") {
            return <p> {viewList.errorMsg} </p>
        }
        return <p> Unable to find </p>
    }

    return (
        <div> 
            {ShowData()}
        </div>
    )
}

export default ViewList;