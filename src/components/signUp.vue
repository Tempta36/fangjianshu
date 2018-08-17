<template>
  <div class="signUp">
    <div class="sign">
      <div class="logo"><a href="/"><img src="../../static/img/logo.png" alt="Logo"></a></div>
      <div class="main">
        <h4 class="title">
          <div class="normal-title">
            <a class="" href="/signIn">登录</a>
            <b>·</b>
            <a id="js-sign-up-btn" class="active" href="">注册</a>
          </div>
        </h4>
        <div class="js-sign-up-container">
          <form class="new_user" id="new_user" action="" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="jzqKinA+mP1raG3N2RaNWZtfKe/UTnaCgPaj3MtTA34+tDvHIASgZ7h18xSP7fyDvHdV9PKBRTxVsec/zcfBsA==">
            <div class="input-prepend restyle">
              <input placeholder="你的昵称" type="text" value="" name="user[nickname]" id="user_nickname">
              <i class="iconfont ic-user"></i>
            </div>
            <div class="input-prepend restyle no-radius js-normal">
              <input type="hidden" value="CN" id="user_mobile_number_country_code">
              <input placeholder="手机号" type="tel" id="user_mobile_number">
              <i class="iconfont ic-phonenumber"></i>
            </div>
            <input type="hidden" id="oversea" value="false">
            <input type="hidden" id="force_user_nonexist" value="true">
            <div class="input-prepend restyle no-radius security-up-code js-security-number hide">
              <input type="text" id="sms_code" placeholder="手机验证码">
              <i class="iconfont ic-verify"></i>
              <a tabindex="-1" class="btn-up-resend js-send-code-button disable" href="javascript:void(0);" id="send_code">发送验证码</a>
              <div><div class="captcha"><input autocomplete="off" type="hidden" value="df7f442b0b5a34cea348a03e44e7fa10"> <input autocomplete="off" type="hidden"> <input autocomplete="off" type="hidden" value=""> <input autocomplete="off" type="hidden" value=""> <input autocomplete="off" type="hidden" value=""> <div id="geetest-area" class="geetest"></div></div></div>
            </div>
            <input type="hidden" id="security_number">
            <div class="input-prepend">
              <input placeholder="设置密码" type="password" id="user_password">
              <i class="iconfont ic-password"></i>
            </div>
            <input type="submit" name="commit" value="注册" class="sign-up-button" id="sign_up_btn" data-disable-with="注册">
            <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br> <a  href="">用户协议</a> 和 <a href="">隐私政策</a> 。</p>
          </form>
          <!-- 更多注册方式 -->
          <div class="more-sign">
            <h6>社交帐号直接注册</h6>
            <ul>
              <li><a id="weixin" class="weixin" href=""><i class="iconfont ic-wechat"></i></a></li>
              <li><a id="qq" class="qq" href=""><i class="iconfont ic-qq_connect"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.signUp {
  margin-top: -30px;
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
}
.signUp .title .active {
  font-weight: 700;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
}
.signUp .logo {
  position: absolute;
  top: 28px;
  /*margin-left: 50px;*/
}
.signUp .logo img {
  width: 170px;
}
.signUp .main {
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
}
.signUp .title {
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
}
.signUp .title a  {
  padding: 10px;
  color: #969696;
}
.signUp .title b {
  padding: 10px;
}
.signUp form {
  margin-bottom: 30px;
}
.signUp form .restyle {
  margin-bottom: 0;
}
.signUp form .input-prepend {
  position: relative;
  width: 100%;
}
.signUp form .input-prepend input {
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
}
.signUp form .input-prepend i {
  position: absolute;
  top: 14px;
  left: 10px;
  font-size: 18px;
  color: #969696;
}
.signUp form .restyle input {
  border-bottom: none;
  border-radius: 4px 4px 0 0;
}
.signUp form .no-radius input {
  border-radius: 0;
}
.signUp form .no-radius input {
  border-radius: 0;
}
.signUp .sign-up-button {
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #42c02e;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
}
.signUp .sign-up-msg {
  margin: 10px 0;
  padding: 0;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: #969696;
}
.signUp .sign-up-msg a, .signUp .sign-up-msg a:hover {
  color: #3194d0;
}
.signUp .more-sign {
  margin-top: 50px;
}
.signUp .more-sign h6 {
  position: relative;
  margin: 0 0 10px;
  font-size: 12px;
  color: #b5b5b5;
}
.signUp .more-sign ul {
  margin-bottom: 10px;
  list-style: none;
}
.signUp .more-sign ul li {
  margin: 0 5px;
  display: inline-block;
}
.signUp .more-sign ul a {
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: block;
}
.signUp .more-sign ul i {
  font-size: 28px;
}
.signUp .more-sign .ic-wechat {
  color: #00bb29;
}
.signUp .more-sign .ic-qq_connect {
  color: #498ad5;
}
</style>
