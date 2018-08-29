import * as types from '../mutation-types'

let users = [
  {"username":"Lucy","password":"123456",login:false},
  {"username":"qweasd","password":"123456",login:false},
  {"username":"iopjkl","password":"123456",login:false}
];

const state = {user:{...users[0]}};

const mutations = {
  [types.SIGN_UP_USER](state,payload){
    users.push({username:payload.username,password:payload.password,login:true});
    if(payload.isChecked){
      localStorage.setItem(payload.username,payload.password);
    }
    state.user = users[users.length-1];console.log(state.user);
  },
  [types.GET_USER_INFO](state,username){
    for(let i = 0,len = users.length; i<len; i++){
      if(users[i].username === username){
        state.user = users[i];
      }
    }
  }
};

const getters = {
  userInfo : state => state.user
};
export default {
  state,
  getters,
  mutations
}

