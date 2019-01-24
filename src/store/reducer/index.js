import { ADD_PRODUCT } from '../../common/constants/actionType';

const initialState = {
  Products: [],
  CartProducts: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return Object.assign({}, state, {
        CartProducts: [state.CartProducts, ...[action.payload]]
      });

    default:
      return state;
  }
}

export default rootReducer;
