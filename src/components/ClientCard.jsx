import React, {useState} from 'react'
import {deleteClient} from '../app/companiesReducer'
import {useDispatch} from 'react-redux'

const ClientCard = ({client}) => {
    const [deleteIsVisible, setDeleteIsVisible] = useState(false)
    const dispatch = useDispatch()

    const clickHandler = () => {
        setDeleteIsVisible(!deleteIsVisible)
    }
    const deleteHandler = (e) => {
        dispatch(deleteClient(e.target.id))
    }
    return (
        <div  onClick={clickHandler}>
            {client.name}<br/>{client.phone}
            {deleteIsVisible &&
            <button style={{backgroundColor: 'red'}} id={client.id} onClick={deleteHandler}>Удалить</button>}
        </div>
    )
}

export default ClientCard
