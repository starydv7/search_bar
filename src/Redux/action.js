import * as types from "./actionTypes";

const getPrductsRequest =()=>{
    return {type:types.GET_PRODUCTS_REQUEST};
}

const getProductsSuccess =(payload)=>{
    return {type:types.GET_PRODUCTS_SUCCESS,payload};
}
const getProductsFailure =()=>{
    return {type:types.GET_PRODUCTS_FAILURE};
}
const updateProductsRequest =()=>{
    return {type:types.EDIT_PRODUCT_REQUEST};
}

const updateProductssSuccess =(payload)=>{
    return {type:types.EDIT_PRODUCT_SUCCESS,payload};
}
const updateProductssFailure =()=>{
    return {type:types.EDIT_PRODUCT_FAILURE};
}
 const deleteproductsRequest =()=>{
    return {type:types.DELETE_PRODUCT_FAILURE};
}
     const deleteProductsSuccess =(payload)=>{
    return {type:types.DELETE_PRODUCT_REQUEST,payload};
}
const deleteproductsFailure =()=>{
    return {type:types.DELETE_PRODUCT_SUCCESS};
}


export {
    getPrductsRequest,
    getProductsSuccess,
    getProductsFailure,
    updateProductsRequest,
    updateProductssFailure,
    updateProductssSuccess,
    deleteproductsRequest,
    deleteProductsSuccess,
    deleteproductsFailure


}