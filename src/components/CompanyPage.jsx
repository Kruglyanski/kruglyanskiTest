import React, {useEffect} from 'react'
import {StreetsList} from './StreetsList'
import {useDispatch, useSelector} from 'react-redux'
import {fetchFlatsByCompanyId} from '../app/companiesReducer'
import {useHistory} from 'react-router'
import {selectIsLoading} from '../app/selectors'

const CompanyPage = ({match}) => {
    const isLoading = useSelector(state => selectIsLoading(state))
    const {company} = match.params
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFlatsByCompanyId(company))
    }, [dispatch, company])

    return (
        <div>
            {isLoading
                ?
                <p>...loading</p>
                :
                <StreetsList/>
            }
            <button onClick={() => history.push('/')}>К списку компаний</button>
        </div>
    )
}

export default CompanyPage
