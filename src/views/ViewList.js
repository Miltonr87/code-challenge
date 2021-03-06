import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetViewList } from '../actions/viewActions';
import { Link } from 'react-router-dom';

const ViewList = () => {
    const dispatch = useDispatch();
    const viewList = useSelector(state => state.ViewList);
    
    useEffect(() => {
        FetchData()
    }, [])

    const FetchData = (page = 1) => {
        dispatch(GetViewList(page))
    }

    const viewMap = viewList.data.map(object => {
        return (
        <div className={"item"}>
            <p> {object.id} </p>
            <Link to={`/view/${object.id}`}>View</Link>
        </div>)
    })

    const ShowData = () => {
        if (!_.isEmpty(viewList.data)) {
            return (
            <div className={"container"}>    
            {viewMap}
            </div>)
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