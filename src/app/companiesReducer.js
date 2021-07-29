import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from '../api/api'


const initialState = {
    companies: [],
    flats: [],
    isLoading: false,
    currentCompanyId: null,
    currentStreet: null,
    currentBuilding: null,
    currentFlatId: null,
    currentClientId: null,

}

export const fetchCompanies = createAsyncThunk(
    'companiesReducer/fetchCompanies',
    async () => {
        const data = await api.getCompanies()
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data
    }
)

export const fetchFlatsByCompanyId = createAsyncThunk(
    'companiesReducer/fetchFlatsByCompanyId',
    async (id) => {
        const data = await api.getFlatsByCompanyId(id)
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data
    }
)
export const createClient = createAsyncThunk(
    'companiesReducer/createClient',
    async ({name, phone, email}, {dispatch,getState}) => {

        const form = {
            Name: name,
            Phone: phone,
            Email: email
        }
        const state = getState()

        const data = await api.postClientForm(form)
            .then((res) => res && res.json())

        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }
        await api.bindClient({AddressId: state.companies.currentFlatId, ClientId: data.id} )
        dispatch(fetchFlatsByCompanyId(getState().companies.currentCompanyId))
        return data
    }
)

export const deleteClient = createAsyncThunk(
    'companiesReducer/deleteClient',
    async (id) => {
        const data = await api.deleteClient(id)
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }
        return data
    }
)


const companiesReducer = createSlice({
    name: 'companiesReducer',
    initialState,
    reducers: {
        setCurrentCompanyId(state, action) {
            state.currentCompanyId = action.payload
        },
        setCurrentStreet(state, action) {
            state.currentStreet = action.payload
        },
        setCurrentBuilding(state, action) {
            state.currentBuilding = action.payload
        },
        setCurrentFlatId(state, action) {
            state.currentFlatId = action.payload
        },
        setCreatedClientId(state, action) {
            state.createdClientId = action.payload
        }

    },
    extraReducers: {
        [fetchCompanies.pending]: (state) => {
            return {
                ...state,
                isLoading: true
            }
        },
        [fetchCompanies.fulfilled]: (state, action) => {
            return {
                ...state,
                companies: action.payload,
                isLoading: false
            }
        },
        [fetchFlatsByCompanyId.pending]: (state) => {
            return {
                ...state,
                isLoading: true
            }
        },
        [fetchFlatsByCompanyId.fulfilled]: (state, action) => {
            return {
                ...state,
                flats: action.payload,
                isLoading: false
            }
        },
    }
})

export const {setCurrentStreet, setCurrentBuilding, setCurrentFlatId, setCurrentCompanyId} = companiesReducer.actions
export default companiesReducer.reducer
