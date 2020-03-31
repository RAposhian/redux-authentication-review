const initialState = {
   name: '',
   address: '',
   city: '',
   state: '',
   zip: 0,
   img: '',
   mortgage: 0,
   rent: 0
}

const UPDATE_LOCATION = 'UPDATE_LOCATION';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MONEY = 'UPDATE_MONEY';
const CLEAR_INFO = 'CLEAR_INFO';

export function updateLocation(locationObj) {
   return {
      type: UPDATE_LOCATION,
      payload: locationObj
   }
}

export function updateImage(imgURL) {
   return{
      type: UPDATE_IMAGE,
      payload: imgURL
   }
}

export function updateMoney(moneyObj){
   return {
      type: UPDATE_MONEY,
      payload: moneyObj
   }
}

export function clear() {
   return {
      type: CLEAR_INFO,
      payload: initialState
   }
}

export default function reducer(state = initialState, action) {
   const {type, payload} = action;
   switch (type) {
      case UPDATE_LOCATION:
         return {...state, ...payload};
      case UPDATE_IMAGE:
         return {...state, img: payload}
      case UPDATE_MONEY:
         return {...state, ...payload}
      case CLEAR_INFO:
         return {...state, ...payload}
      default:
         return state;
   }
}