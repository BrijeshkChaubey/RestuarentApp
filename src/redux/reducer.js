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
            // cardata = state.cardata.filter((item) => {
            //     console.log("item.id", item.id, "action.payload", action.payload.id, "Carddata", state.cardata);
            //     item.id != action.payload.id
            // })
            return {
                ...state,
                cardata: state.cardata.filter((item) => {
                    console.log("item.id", item.id, "action.payload", action.payload.id, "Carddata", state.cardata);
                    item.id != action.payload.id
                })
            }
        default:
            return state;

    }
}
// item.id != action.payload.id

// case "DELETEITEM" :
//         return {
//             ...state,
//             items:state.items.filter((item) =>item.id != action.payload.id)
//         }