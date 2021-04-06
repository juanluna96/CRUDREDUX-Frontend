// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: '',
    loading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state
    }
}
