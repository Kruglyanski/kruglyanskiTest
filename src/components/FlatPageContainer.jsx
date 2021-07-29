import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchCompanies, fetchFlatsByCompanyId, setCurrentCompanyId, setCurrentFlatId} from '../app/companiesReducer'
import {selectCurrentFlatId} from '../app/selectors'
import FlatPage from './FlatPage'

const FlatPageContainer = () => {
    const currentFlatId = useSelector(state => selectCurrentFlatId(state))
    const dispatch = useDispatch()
    const lSCompany = JSON.parse(localStorage.getItem('company'))
    const lSCurrentFlatId = JSON.parse(localStorage.getItem('currentFlatId'))
    console.log(lSCurrentFlatId)
    useEffect(() => {
        const asyncFn = () => {
            !currentFlatId && dispatch(setCurrentFlatId(lSCurrentFlatId))
            && dispatch(setCurrentCompanyId(lSCompany))
            && dispatch(fetchCompanies())
            && dispatch(fetchFlatsByCompanyId(lSCompany))
        }
        asyncFn()
    }, [dispatch])

    return (
        <div>
            {currentFlatId && <FlatPage/>}
        </div>
    )
}

export default FlatPageContainer
