import {request} from './request'
const token = '123454321'

export const api = {
    getCompanies() {
        return request(
            `/Request/companies`,
            'GET',
            false,
            {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        )
    },
    getFlatsByCompanyId(id) {
        return request(
            `/HousingStock?companyId=${id}`,
            'GET',
            false,
            {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        )
    },
    deleteClient(id) {
        return request(
            `/HousingStock/bind_client/${id}`,
            'DELETE',
            false,
            {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        )
    },
    postClientForm(form){
        return request(
            '/HousingStock/client',
            'POST',
            false,
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            JSON.stringify({...form})
        )
    },
    bindClient(data){
        return request(
            '/HousingStock/bind_client',
            'PUT',
            false,
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            JSON.stringify({...data})
        )
    },
}
