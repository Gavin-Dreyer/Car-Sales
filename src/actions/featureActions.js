export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = (price, featureName, id) => {
    return { type: ADD_FEATURE, payload: price, payload2: featureName, payload3: id }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const removeFeature = (price, featureName, id) => {
    return { type: REMOVE_FEATURE, payload: price, payload2: featureName, payload3: id }
}