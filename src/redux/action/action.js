import { ADD_TOWISHLIST, REMOVE_FROMWISHLIST } from "../actionType";
export const addtowhishlistAction = (wishlist) => {
    console.log('wishlist==>', wishlist);
    return {
        type: ADD_TOWISHLIST,
        payload: wishlist
    }

}
export const removefromwishlistAction = (id) => {
    console.log('Id:=====>', id);
    return {
        type: REMOVE_FROMWISHLIST,
        payload: id
    }
}