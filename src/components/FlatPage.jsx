import React from 'react'
import { useSelector } from 'react-redux'
import { selectFlatById } from '../app/selectors'
import ClientCard from './ClientCard'
import Form from './Form'

const styleUl = {
  display: 'flex',
  flexWrap: 'wrap',
  flexGrow: 1,
  width: 1010,
  height: 'auto',
  margin: '0 auto',
  border: '1px solid #666'
}

const styleLi = {
  width: 150,
  height: 'auto',
  border: '1px solid #666',
  alignItems: 'stretch',
  backgroundColor: '#ccc',
  float: 'left',
  margin: '25px',
  cursor: 'pointer',
  paddingBottom: 10,
  paddingTop: 10
}
const FlatPage = () => {

  const flat = useSelector(state => selectFlatById(state))

  return (
    <div style={{ height: '100%' }}>
      <ul style={styleUl}>
        {flat && flat.clients.length ? (
          flat.clients.map(c => (
            <li style={styleLi} key={c.id}>
              <ClientCard client={c} />
            </li>
          ))
        ) : (
          <p style={{ margin: '0 auto' }}>Жителей нет</p>
        )}
      </ul>
      <h3>Добавить жильца</h3>
      <Form />
      <h4>Чтобы удалить жильца, нажмите на карточку, а затем - удалить.</h4>
    </div>
  )
}

export default FlatPage
