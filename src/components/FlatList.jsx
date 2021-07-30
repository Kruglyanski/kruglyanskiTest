import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrentFlatId } from '../app/companiesReducer'
import { selectFlatsByBuilding } from '../app/selectors'

export const FlatList = ({ visible }) => {
  const dispatch = useDispatch()
  const flats = useSelector(state => selectFlatsByBuilding(state))
  const clickHandler = e => {
    dispatch(setCurrentFlatId(e.target.id))
    localStorage.setItem('currentFlatId', e.target.id)
  }
  return (
    <div>
      {visible ? (
        <ul style={{ marginLeft: 100 }}>
          {flats
            .sort((a, b) => a - b)
            .map(f => {
              return (
                <li key={f.addressId}>
                  <Link to={`/flats/${f.addressId}`} id={f.addressId} onClick={clickHandler}>
                    квартира {f.flat}
                  </Link>
                </li>
              )
            })}
        </ul>
      ) : null}
    </div>
  )
}
