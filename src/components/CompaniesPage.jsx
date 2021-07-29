import React from 'react'

import {useSelector} from 'react-redux'

import {Link} from 'react-router-dom'

const CompaniesPage = () => {
    const companies = useSelector(state => state.companies.companies)

    return (
        <div>
            <ul>
                {companies.map((company) => <li
                        key={company.id}
                        id={company.id}
                    >
                        <Link
                            to={`/companies/${company.id}`}
                        >
                            {company.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CompaniesPage
