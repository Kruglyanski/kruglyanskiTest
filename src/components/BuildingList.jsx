import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    setCurrentBuilding
} from '../app/companiesReducer'
import {FlatList} from './FlatList'
import {selectBuildingsArray} from '../app/selectors'

export const BuildingList = ({visible}) => {
    const dispatch = useDispatch()
    const buildings = useSelector(state => selectBuildingsArray(state))
    const [toggleFlatVisible, setToggleFlatVisible] = useState({})

    useEffect(() => {
        const obj = {}
        buildings.map(building => {
                obj[[building]] = false
                return null
            }
        )
        setToggleFlatVisible(obj)
    }, [buildings])

    const clickHandler = (e) => {
        setToggleFlatVisible({...toggleFlatVisible, [e.target.id]: !toggleFlatVisible[e.target.id]})
        dispatch(setCurrentBuilding(e.target.id))
        localStorage.setItem('currentBuilding', e.target.id)

    }
    return (
        <div>
            {
                visible
                    ?
                    <ul style={{marginLeft:50}}>
                        {buildings.sort((a, b) => (a - b)).map(building => {
                            return (
                                <li key={building}>
                                    <div
                                        style={{cursor: 'pointer'}}
                                        id={building}
                                        onClick={clickHandler}
                                    >
                                        дом {building}
                                    </div>
                                    <FlatList visible={toggleFlatVisible[building]}/>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    null
            }
        </div>
    )
}
