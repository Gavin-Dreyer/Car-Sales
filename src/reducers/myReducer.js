import { ADD_FEATURE, REMOVE_FEATURE } from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
          const newFeature = {
            name: action.payload2,
            price: action.payload,
            id: Date.now()
            
          }
          return {
            ...state,
            additionalPrice: state.additionalPrice + action.payload,
            car: {...state.car, features: [...state.car.features, newFeature]}
          }
        case REMOVE_FEATURE:
          return{
            ...state,
            additionalPrice: state.additionalPrice - action.payload,
            car: {...state.car, features: state.car.features.filter(item => item.id !== action.payload3)}
          }
        default:
            return state;
    }
}


// state.car.features.map(item => {
//   if(item.id === action.payload3){
//     return {name: action.payload2, price: action.payload}
//   }
// })