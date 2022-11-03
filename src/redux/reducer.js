import { ADD_TOWISHLIST, REMOVE_FROMWISHLIST } from "./actionType"


const initialstate = {
    cardata: []
}
export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_TOWISHLIST:
            // console.log('Action.payload', action.payload);
            return { ...state, cardata: [...state.cardata, action.payload] };

        case REMOVE_FROMWISHLIST:
            const updated = state.cardata.filter((item) => {
                console.log("item.id", item.id, "action.payload", action.payload);
                item.id !== action.payload
            })
            return {
                ...state,
                cardata: updated
            }
        default:
            return state;

    }
}
// item.id != action.payload.id

