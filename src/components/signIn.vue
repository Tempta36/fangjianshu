<template>
  <div class="sign">
    <div class="logo"><a href="/"><img src="../../static/img/logo.png" alt="LOGO"></a></div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <a @click="toSignIn()" class="active">登陆</a><b>·</b><a @click="toSignUp()">注册</a>
        </div>
      </h4>
      <div class="signIn-container">
        <form action="#" id="new_session">
          <div class="input-prepend restyle js-normal">
            <input placeholder="手机号或邮箱" type="text"  id="email_or_mobile_number" v-model="username">
            <i class="iconfont ic-user"></i>
          </div>
          <div class="input-prepend">
            <input placeholder="密码" type="password" id="password" v-model="password">
            <i class="iconfont ic-password"></i>
          </div>
          <div class="remember-btn">
            <input type="checkbox" v-model="isChecked" checked="checked" id="remember_me" @click="changeCheckStatus()">
            <span>记住我</span>
          </div>
          <div class="forget-btn">
            <a class="" data-toggle="dropdown" href="">登录遇到问题?</a>
            <ul class="dropdown-menu">
              <li><a href="">用手机号重置密码</a></li>
              <li><a href="">用邮箱重置密码</a></li>
              <li><a href="">无法用海外手机号登录</a></li>
              <li><a href="">无法用 Google 帐号登录</a></li>
            </ul>
          </div>
          <button class="sign-in-button" id="sign-in-form-submit-btn" type="button" @click="signInBtnClick()">
            <span id="sign-in-loading"></span>登录
          </button>
        </form>
        <div class="more-sign">
          <h6>社交帐号登录</h6>
          <ul>
            <li id="weibo-link-wrap" class="">
              <a class="weibo" id="weibo-link">
                <i class="iconfont ic-weibo"></i>
              </a>
            </li>
            <li><a class="weixin" href=""><i class="iconfont ic-wechat"></i></a></li>
            <li><a class="qq" href=""><i class="iconfont ic-qq_connect"></i></a></li>
            <li class="js-more-method"><a href="javascript:void(0);"><i class="iconfont ic-more"></i></a></li>
            <li class="js-hide-method hide"><a class="douban" href=""><i class="iconfont ic-douban"></i></a></li>
          </ul>

          <div class="weibo-geetest-captcha"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data(){
    return {
      isChecked:true,
      username:'',
      password:''
    }
  },
  computed:{
    ...mapGetters({
      user:'userInfo'
    })
  },
  methods:{
    toSignIn(){
      event.stopPropagation();
    },
    toSignUp(){
      this.$router.push({path:'/signUp'});
    },
    signInBtnClick(){
      let username = this.username.trim();
      let password = this.password.trim();
      if(username === '' || password === ''){
        alert('手机号/邮箱或密码不能为空');
        this.username = '';
        this.password = '';
      }else {
        let _this = this;

        //验证登陆。首先在本地存储中查看是否存在该用户名并校验
        let username_session = localStorage.getItem(username);
        if(username_session && username_session === password){
          this.$store.dispatch('signUpUser',{username:username,password:password,login:true});
          sessionStorage.setItem('isLogin','true');
          _this.$router.push('/');
        }else{
          //若本地存储无该用户名信息，则请求后台接口，验证用户名和密码是否一致
          this.$store.dispatch('getUserInfo',_this.username);

          if(username === _this.user.username && password === _this.user.password){
            //登陆成功
            this.$store.dispatch('signUpUser',{username:username,password:password,login:true});
            sessionStorage.setItem('isLogin','true');
            if(_this.isChecked){
              localStorage.setItem(username,password);
            }
            _this.$router.push('/');
          }else {
            alert('手机号/邮箱或密码不正确，请重新输入！');
            _this.password = '';
          }
        }
      }
    },
    changeCheckStatus(){
      this.isChecked = !this.isChecked;
    }
  }
}
</script>

<style>
.sign {
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
  margin-top: -30px;
}
.sign .logo {
  position: absolute;
  top: 28px;
  /*margin-left: 50px;*/
}
.sign .logo img {
  width: 170px;
}
.sign .main {
  width: 400px;
  margin: 110px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
}
.sign .main .title {
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
}
.sign .main .title .active {
  font-weight: 700;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
}
.sign .main .title b {
  padding: 10px;
}
.sign .main .title a {
  padding: 10px;
  color: #969696;
}
.sign form {
  margin-bottom: 30px;
}
.sign form .restyle {
  margin-bottom: 0;
}
.sign form .input-prepend {
  position: relative;
  width: 100%;
}
.sign form .input-prepend input {
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
}
.sign form .input-prepend i {
  position: absolute;
  top: 14px;
  left: 10px;
  font-size: 18px;
  color: #969696;
}
.sign form .restyle input {
  border-bottom: none;
  border-radius: 4px 4px 0 0;
}
.sign .remember-btn {
  float: left;
  margin: 15px 0;
}
.sign .forget-btn {
  float: right;
  position: relative;
  margin: 15px 0;
  font-size: 14px;
}
.sign .forget-btn a {
  color: #999;
}
.sign .forget-btn .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  /*border: 1px solid rgba(0,0,0,.15);*/
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  background-clip: padding-box;
}
.sign .sign-in-button {
  background: #3194d0;
}
.sign .sign-in-button, .sign .sign-up-button {
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
}
.sign .more-sign {
  margin-top: 50px;
}
.sign .more-sign h6 {
  position: relative;
  margin: 0 0 10px;
  font-size: 12px;
  color: #b5b5b5;
}
.sign .more-sign ul {
  margin-bottom: 10px;
  list-style: none;
}
.sign .more-sign ul li {
  margin: 0 5px;
  display: inline-block;
  font-size: 28px;
}
.sign .more-sign .ic-weibo {
  color: #e05244;
}
.sign .more-sign .ic-wechat {
  color: #00bb29;
}
.sign .more-sign .ic-qq_connect {
  color: #498ad5;
}
</style>
