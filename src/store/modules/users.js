import * as types from '../mutation-types'

let users = [
  {"username":"Lucy","password":"123456"},
  {"username":"qweasd","password":"123456"},
  {"username":"iopjkl","password":"123456"}
];

const state = {
  users
};

const mutations = {
  [types.SIGN_UP_USER](state,user){
    users.push(user);
  }
};

export default {
  state,
  mutations
}
