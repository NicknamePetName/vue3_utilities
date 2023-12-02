<template>
  <div id="layout">
    <nav id="navbar">
      <div class="logo">
        <img src="https://github.com/NicknamePetName/Photo/blob/main/source/yixin.jpg?raw=true" alt="亦忻" />
      </div>
      <div class="nav">
        <div class="home" @click="tohome">主页</div>
        <div class="student" @click="tostudent">学生信息</div>
        <div class="teacher" @click="toteacher">教师信息</div>
        <div class="statistics" @click="tostatistics">数据统计</div>
        <div class="login" @click="tologin">返回登录页面</div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
  
</template>

<script>
import router from '@/router'
export default {
  name: '#layout',
  data() {
    return {

    }
  },
  methods: {
    tohome: function () {
      router.push('/layout/home');
    },
    tostudent: function () {
      router.push('/layout/student');
    },
    toteacher: function () {
      router.push('/layout/teacher');
    },
    tologin: function () {
      router.push('/');
    },
    tostatistics: function() {
      router.push('/layout/statistics');
    }
  }
}
</script>


<style lang="scss" scoped>
nav {
  background-color: darkturquoise;
  border-right: 2px solid rgba(200, 200, 200, 0.1);
  color: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  z-index: 100;
  cursor: pointer;

  .logo {
    padding: 30px 0;
    text-align: center;

    img {
      height: 75px;
      width: 75px;
      border-radius: 50%;
    }
  }

  .nav {
    padding: 0;
    list-style-type: none;
    margin: 0;

    div {
      color: #FFFFFF;
      border-bottom: 2px solid rgba(200, 200, 200, 0.7);
      padding: 20px;

      &:first-of-type {
        border-top: 2px solid rgba(200, 200, 200, 1);
      }
    }

  }

}
</style>