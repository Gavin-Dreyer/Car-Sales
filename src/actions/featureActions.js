export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = (price, featureName, id) => {
    console.log({price: price, name: featureName})
    return { type: ADD_FEATURE, payload: price, payload2: featureName, payload3: id }
}