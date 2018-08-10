<template>
  <div class="author">
    <div class="main-left">
      <div class="author-top">
        <a href="#" class="author-avatar">
          <img src="../../static/img/hot5.png" alt="">
        </a>
        <a href="#" class="btn btn-success follow"><i class="iconfont ic-follow"></i><span>关注</span></a>
        <a href="#" class="btn btn-hollow">投稿</a>
        <div class="title"><a href="#" class="name">摄影</a></div>
        <div class="info">收录了47107篇文章<br/>1460560人关注</div>
      </div>
    </div>
    <div class="main-right">
{{author}}
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data(){
    return {

    }
  },
  computed:mapState({
    author:state => state.Author.authorInformation
  })
}
</script>

<style>
.author .author-top .author-avatar{
  float: left;
  width: 80px;
  height: 80px;
}
.author .author-top .author-avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 10%;
}
.author .author-top .btn {
  float: right;
  margin: 20px 0 23px 16px;
  font-size: 15px;
}
.author .author-top .follow{
  padding: 8px 0;
  width: 100px;
}
.author .author-top .follow span {
  margin-left: 2px;
  display: inline;
}
.author .author-top .btn-hollow {
  padding: 8px 0;
  width: 90px;
}
.author .author-top .title {
  padding: 0 0 0 100px;
}
.author .author-top .title .name {
  display: inline;
  font-size: 21px;
  font-weight: 700;
  vertical-align: middle;
}
.author .author-top .info {
  margin-top: 10px;
  padding-left: 100px;
  font-size: 14px;
  color: #969696;
}
</style>
