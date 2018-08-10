/**
 * Created by 12973 on 2018/8/8.
 */
import * as types from './mutation-types.js'

export const confirmAuthor = ({commit},str)=>{
  commit(types.CONFIRM_AUTHOR,str)
};
