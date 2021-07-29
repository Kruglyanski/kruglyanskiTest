import {createSelector} from '@reduxjs/toolkit'

export const selectAllFlats = state => state.companies.flats
export const selectCurrentStreet = state => state.companies.currentStreet
export const selectCurrentBuilding = state => state.companies.currentBuilding
export const selectCurrentFlatId = state => state.companies.currentFlatId
export const selectIsLoading = state => state.companies.isLoading

export const selectStreetsArray = createSelector(
    selectAllFlats, flats => Array.from(new Set(flats.map(i => (i.streetName))))
)

export const selectFlatsByStreet = createSelector(
    [selectAllFlats, selectCurrentStreet],
    (flats, street) => flats.filter(flat => flat.streetName === street)
)
export const selectClientsById = createSelector(
    [selectAllFlats, selectCurrentFlatId],
    (flats, id) => flats.find(flat => flat.addressId === Number(id)).clients
)

export const selectFlatsByBuilding = createSelector(
    [selectAllFlats, selectCurrentBuilding, selectCurrentStreet],
    (flats, building, street) => flats.filter(flat => (flat.building === building
        && flat.streetName === street
        )
    )
)

export const selectBuildingsArray = createSelector(
    selectFlatsByStreet, flats => Array.from(new Set(flats.map(i => (i.building))))
)

// export const selectCurrentBindId = createSelector(
//     [selectAllFlats, selectCurrentFlatId],
//     (flats, id) => flats.find(flat => flat.addressId === Number(id)).accounts[0].bindId
// )
