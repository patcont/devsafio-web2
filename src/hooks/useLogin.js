import  { useReducer } from "react";
const initialState = {
  user: {},
  logged: false,
  token: null,
  role: '',
}

const reducer = (state,action) => {
  switch (action.type){
    case 'login':
      return {
        ...action.payload,
        logged: true
      }
    case 'logout':
      return {
        ...action.payload,
        logged: false
      }
    default:
      return state;
  }
}
const useLogin = () => {
  const [ user, dispatch ] = useReducer(reducer, initialState);
  const localstorage = window.localStorage.length > 0 ? window.localStorage.getItem('user') : null;

  if(user.token === null && localstorage !== null){
    dispatch({type: 'login', payload: JSON.parse(localStorage.getItem('user'))})
  }
  const handleLogin = (token, user) =>{  
    dispatch({type: 'login' , payload:{user, token: token}})
    localStorage.setItem('user', JSON.stringify({user, token: token}))
  }
  const handleLogOut = () =>{
    dispatch({type:'logout', payload: initialState})
    window.localStorage.removeItem('user');
  } 
  return {
    user,
    handleLogin,
    handleLogOut
  }
}

export { useLogin };