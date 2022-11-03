import { ADD_TOWISHLIST, REMOVE_FROMWISHLIST } from "../actionType";
export const addtowhishlistAction = (wishlist) => {
    console.log('wishlist==>', wishlist);
    return {
        type: ADD_TOWISHLIST,
        payload: wishlist
    }

}
export const removefromwishlistAction = (id) => ({

    type: REMOVE_FROMWISHLIST,
    payload: { id: id }

});
// export const DeleteItems= (id) => ({
//     type:DELETEITEM ,
//     payload : {
//         id :id
//     }
// });
