import { ADD_TOWISHLIST, REMOVE_FROMWISHLIST } from "./actionType"


const initialstate = {
    cardata: []
}
export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_TOWISHLIST:
            return { ...state, cardata: [...state.cardata, action.payload] };

        case REMOVE_FROMWISHLIST:
            const arr = [...state.cardata.filter((item) => {
                console.log("item.id", item.id, "action.payload", action.payload.id, "Carddata", state.cardata);
                return item.id !== action.payload
            })]
            console.log("Arrr", arr);
            return {
                ...state,
                cardata: arr
            }
        default:
            return state;

    }
}
