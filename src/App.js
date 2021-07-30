import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import CompaniesPage from './components/CompaniesPage'
import CompanyPage from './components/CompanyPage'
import FlatPageContainer from './components/FlatPageContainer'
import { fetchCompanies } from './app/companiesReducer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCompanies())
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CompaniesPage} />
          <Route exact path="/companies/:company" component={CompanyPage} />
          <Route exact path="/flats/:flat" component={FlatPageContainer} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
