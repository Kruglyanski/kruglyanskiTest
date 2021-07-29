import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {selectCurrentBindId} from '../app/selectors'
import {createClient} from '../app/companiesReducer'

const Form = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const onNameChanged = e => setName(e.target.value)
    const onPhoneChanged = e => setPhone(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const canSubmit = [name, phone, email].every(Boolean)
    const onSubmit = () => {
        dispatch(createClient({name, phone, email}))
    }
    return (

            <form>
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onNameChanged}
                />
                <label htmlFor="phone">Телефон:</label>
                <input
                    type="text"
                    id="phone"
                    name="name"
                    value={phone}
                    onChange={onPhoneChanged}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onEmailChanged}
                />
                <button type="button" onClick={onSubmit} disabled={!canSubmit}>Добавить жильца</button>
            </form>

    )
}

export default Form
