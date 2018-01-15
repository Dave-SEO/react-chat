const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const initState={isAuth:false,user:'name',age:'18'}
export function Auths (state=initState, action) {
    switch (action.type){
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        default:
            return state;
    }
}
export function LOGINS(){
    return {type:'LOGIN'}
}
export function LOGOUTS(){
    return {type:'LOGOUT'}
}