import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    setCurrentStreet
} from '../app/companiesReducer'
import {BuildingList} from './BuildingList'
import {selectStreetsArray} from '../app/selectors'

export const StreetsList = () => {
    const dispatch = useDispatch()
    const streets = useSelector(state => selectStreetsArray(state))
    const [toggleBuildingVisible, setToggleBuildingVisible] = useState({})

    useEffect(() => {
        const obj = {}
        streets.map(street => {
                obj[[street]] = false
                return null
            }
        )
        setToggleBuildingVisible(obj)
    }, [streets])


    const clickHandler = (e) => {
        setToggleBuildingVisible({...toggleBuildingVisible, [e.target.title]: !toggleBuildingVisible[e.target.title]})
        dispatch(setCurrentStreet(e.target.title))
        localStorage.setItem('currentStreet', e.target.title)
    }
    return (
        <div>{streets.length
            ?
            <ul>
                {streets.map(street => {
                        return (<li key={street}>
                                <div
                                    style={{cursor: 'pointer'}}
                                    title={street}
                                    onClick={clickHandler}>улица {street}
                                </div>
                                <BuildingList streetName={street} visible={toggleBuildingVisible[street]}/>
                            </li>
                        )
                    }
                )}
            </ul>
            :
            <p>Эта компания пока не обслуживает клиентов!</p>
        }

        </div>
    )
}

