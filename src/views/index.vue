<template lang="html">
<div> 
  <div class="nav">
      <router-link to="/"><el-button type="success">首页</el-button></router-link>
      <router-link to="/register"><el-button type="warning">注册</el-button></router-link>
      <router-link to="/login"><el-button type="danger">登录</el-button></router-link>
  </div>
  <div>
    首页 - 已登录用户信息
    <ul v-if="users">
      <li>用户名：{{ users.username }}</li>
      <li>创建时间：{{ users.createdAt }}</li>
    </ul>
    <el-button type="danger" v-on:click.native="handlelogOut">退出登录</el-button>
  </div>
  <div class="header">
        <nav class="navbar navbar-default" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html"><h1>Deliccio</h1> <span>Healthy And Tasty Food</span></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav pull-right">
                    <li   class="active"><a href="/">Home</a></li>
                    <li><a href="#/services">Services</a></li>
                    <li ><a href="#/typo">Typo</a></li>
                    <li><a href="#/menu">Menu</a></li>
                    <li><a href="#/contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>

        <div class="baner-info">
            <div class="col-md-6 banner-info-left">
                <h1>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</h1>
                <ul>
                    <li><a href="#" class="twitter"></a></li>
                    <li><a href="#" class="g"></a></li>
                    <li><a href="#" class="v"></a></li>
                    <li><a href="#" class="dribble"></a></li>
                </ul>
                <div class="more">
                    <a href="#/single">Learn More</a>
                </div>
            </div>
            <div class="col-md-6 banner-info-right">
                <video width="400" height="280" controls>
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    <source src="movie.webm" type="video/webm">
                    <object data="movie.mp4" width="320" height="240">
                      <embed src="movie.swf" width="320" height="240">
                    </object> 
                </video>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="col-md-12 text-center">
            <div class="text">
                <h1>Welcome !</h1>
                <div class="line">
                </div>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumfugiat
                    quo voluptas nulla pariatur.</p>
            </div>
        </div>
        <div class="col-md-6 welcome-left">
            <div class="col-md-5 welcome-left-img">
                <img src="../assets/images/1.1.jpg" alt="">
            </div>
            <div class="col-md-7 welcome-left-con">
                <h2>voluptas nulla pariatur</h2>
                <p>Deserunt mollit anim id est laborum fugiat quo voluptas nulla pariatur laboris nisi ut aliquip ex ea commodoconsequat.</p>
            </div>
        </div>
        <div class="col-md-6 welcome-left">
            <div class="col-md-5 welcome-left-img">
                <img src="../assets/images/1.1.jpg" alt="">
            </div>
            <div class="col-md-7 welcome-left-con">
                <h2>voluptas nulla pariatur</h2>
                <p>Deserunt mollit anim id est laborum fugiat quo voluptas nulla pariatur laboris nisi ut aliquip ex ea commodoconsequat.</p>
            </div>
        </div>
        <div class="col-md-12 text-center">
            <div class="tel">
                <h3><i>For Door Delivery</i></h3>
                <h2>Contact Us : <span>+0789 569 789</span></h2>
            </div>
        </div>
        <div class="learn">
            <div class="col-md-4">
                <h4>laborum fugiat quo voluptas</h4>
                <p>Deserunt mollit anim id est laborum fugiat quo voluptas nulla pariatur laboris nisi ut aliquip ex ea commodoconsequat.</p>
                <div class="more m1">
                    <a href="#/single">Learn More</a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="learn-center">
                    <img src="../assets/images/2.2.png" alt="">
                </div>
            </div>
            <div class="col-md-4">
                <h4>laborum fugiat quo voluptas</h4>
                <p>Deserunt mollit anim id est laborum fugiat quo voluptas nulla pariatur laboris nisi ut aliquip ex ea commodoconsequat.</p>
                <div class="more m1">
                    <a href="#/single">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div>
            <h3>Deserunt mollit anim id est laborum fugiat quo voluptas nulla pariatur laboris nisi ut aliquip</h3>
        </div>
    </div>
    <div class="footer">
        <div class="container">
            <div class="col-md-3">
                <div class="first">
                    <h4><a href="index.vue">Deliccio</a></h4>
                    <p><a href="mailto:info@example.com">mail@example.com</a></p>
                    <p>+2 000 222 1111</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="second">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#/menu">Menu</a></li>
                        <li><a href="#/typo">Typo</a></li>
                        <li><a href="#/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="second">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#/services">Services</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Lemollisollis</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="second">
                    <h3>Newsletter</h3>
                    <p>It was popularised in the 1960s with the release Ipsum.</p>
                            <form>
                                <input type="text" class="text" value="Enter Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Email';}">
                                <input type="submit" value="Go">
                            </form>
                </div>
            </div>
            <div class="clearfix"> </div>
            
        </div>
    </div>
</div>
</template>


<script>
export default {
  data () {
    return {
      users: null
    }
  },
  methods: {
    // 登出函数
    handlelogOut () {
      this.$AV.User.logOut().then(() => {
        // 登出后跳转到登录页面
        this.$message('已经登出，正在跳转登录页面')
        this.$router.push('/login')
      })
    }
  },
  created () {
    // 获取当前登录用户状态
    let user = this.$AV.User.current()
    // 如果已经登录则获取用户信息
    if (user) {
      this.users = {
        username: user.get('username'),
        createdAt: user.get('createdAt')
      }
    } else {
      console.log('当前未登录，正在跳转登录页面')
      this.$router.push('/login')
    }
  }
}
</script>


<style scoped>
html, body{
    font-size: 100%;
	background:	#fff;
	font-family: 'Open Sans', sans-serif;
}
@font-face {
   font-family: 'YesevaOne-Regular';
   src: url(../assets/fonts/YesevaOne-Regular.ttf)format('truetype');
}
h1,h2,h3,h4,h5,h6{
	margin:0;	
    font-family: 'YesevaOne-Regular';
    
}	
p{
	margin:0;
    font-family: 'Open Sans', sans-serif;
    color: #999;
}
ul,label{
	margin:0;
	padding:0;
}
.header{
    width: 100%;
    height: 800px; 
    background: url(../assets/images/banner1.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height:800px;
}
.header1{
    background:url(../assets/images/banner1.jpg) no-repeat 0px 0px;
	background-size:cover;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	-ms-background-size:cover;
	min-height:300px;
}
.navbar-default{
    width: 1180px;
    margin: 0 auto;
    padding-top: 80px;
    background: none;
    border: none;
}
.navbar-default .navbar-nav li:hover{
    background: #803F5F;
}
.navbar-brand{
    padding-top: 0px;
}
.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
    color: #fff;
    background:  #803F5F;
}
.navbar-brand span{
    display: block;
    font-size:14px;
	color:#803F5F;
	
}
.navbar-brand h1{
    color: white;
    font-size: 60px;
}
.nav li a{
    color: white !important;
    font-size: 18px;
}
.baner-info{
    width: 1180px;
    margin: 0 auto;
    margin-top: 200px;
    color: white;
    display: block;
}
.baner-info h1{
    font-size:45px;
}
.baner-info li{
    list-style: none;
    margin: 20px 10px 20px 0px;
    display: inline-block;
}
ul li a.twitter{
	background:url(../assets/images/img-sp.png) no-repeat -7px -9px;
	display:block;
	height: 41px;
    width: 41px;
	padding: 0;
}
ul li a.twitter:hover{
	background:url(../assets/images/img-sp.png) no-repeat -71px -9px;
	display:block;
}
ul li a.g{
	background:url(../assets/images/img-sp.png) no-repeat -7px -58px;
	display:block;
	height: 41px;
    width: 41px;
	padding: 0;
}
ul li a.g:hover{
	background:url(../assets/images/img-sp.png) no-repeat -72px -58px;
	display:block;
}
ul li a.v{
	background:url(../assets/images/img-sp.png) no-repeat -7px -109px;
	display:block;
	height: 41px;
    width: 41px;
	padding: 0;
}
ul li a.v:hover{
	background:url(../assets/images/img-sp.png) no-repeat -72px -109px;
	display:block;
}
ul li a.dribble{
	background:url(../assets/images/img-sp.png) no-repeat -7px -159px;
	display:block;
	height: 41px;
    width: 41px;
	padding: 0;
}
ul li a.dribble:hover{
	background:url(../assets/images/img-sp.png) no-repeat -72px -159px;
	display:block;
}
.banner-info-left h1{
	text-transform: capitalize;
    font-size: 2.4em;
    color:#fff;
    margin: 0;
    line-height: 1.6em;
}
.more{
    margin-top: 20px;
}
.more a{
	padding:11px 30px;
	background: #803F5F;
    font-size: 16px;
	color:#fff;
    text-decoration: none;
}
.more a:hover{
	background:#fff;
	color: #803F5F;
}
.banner-info-right{
    width: 460px;
    height: 260px;
    margin-left:100px;
}
.content{
    width: 1180px;
    margin: 0 auto;
}
.text{
    margin-top: 80px !important;
    width: 700px;
    margin: 0 auto;
    line-height: 20px;
}
.text h1{
    font-size: 45px !important;
    color: #803F5F;
}
.text p{
    font-size: 16px;
}
.line{
	border-top: 1px solid  #803F5F;
    margin: 0.5em auto 1em;
    text-align: center;
    width: 8%;
}
.welcome-left{
    padding-top: 80px;
}
.welcome-left-img img{
    width: 230px;
    height: 180px;
    padding: .5em;
    border: 2px dotted  #803F5F;
}
.welcome-left-con{
    padding-left: 25px;
}
.welcome-left-con h2{
    color: #803F5F !important;
}
.welcome-left-con p{
    margin:1em 0 0;
	color:#999;
	font-size:14px;
	line-height:1.8em;
}
.tel{
    padding-top: 80px;
    padding-bottom: 80px;
}
.tel h3{
    color: #B32D0D;
}
.tel h2{
    color: #B32D0D;
    font-size: 50px;
    margin-top: 8px;
}
.tel p span{
    color: #803F5F !important;
}
.learn h4{
    font-size: 26px;
    color: #999;
}
.learn p{
    font-size:14px;
	color:#999;
	margin:1em 0 2em;
	line-height:1.8em;
}
.learn img{
    width: 310px;
    height: 200px;
}
.m1 a:hover{
	background:#999;
	color:#fff;
}
.bottom{
    width: 100%;
    height: 600px;
    text-align: center;
    border: 1px solid black;
    margin-top: 1100px;
    background: url(../assets/images/3.5.jpg);
    background-attachment: fixed !important;
    background-repeat: repeat;
}
.bottom div{
    width: 1180px;
    margin: 0 auto;
}
.bottom h3{
    font-size: 3em;
    color: #black;
    margin: 0;
    line-height: 1.4em;
    text-transform: capitalize;
    margin: 200px auto;
}
.footer{
    background: #333333;   
}
.footer .container{
    width: 1180px;
    padding-top: 80px;
    padding-bottom: 80px;
}

.footer h4 {
    margin:0 0 .5em;
}
.footer h3 {
    color: #fff;
    font-size: 2.5em;
    margin: 0 0 0.5em;
}
.footer ul li {
  margin-bottom: 1em;
}
.footer ul li a {
  color: #868686;
  font-size:14px;
  text-decoration: none;
}
.footer ul li a:hover {
  color: #fff;
}
.footer h4 a {
    color: #803F5F;
    font-size: 3em;
    text-decoration: none;
}
.footer p  a{
	color: #868686;
    font-size: 14px;
    text-decoration: none;
}
.footer p a:hover {
	color: #fff;
}
.footer p {
	 color: #868686;
	 font-size:14px;
	 line-height: 1.8em;
	 margin:0;
}
.footer form {
   margin-top: -3.2em;  
  display: inline-block;
}
.footer form input[type="text"] {
  width: 72%;
  padding: 9px 12px;
  font-size: 0.9em;
  color: #8D8D8D;
  outline: none;
  border: none;
  background: #fff;
  -webkit-appearance: none;
  
}
.footer form input[type="submit"] {
	width: 24%;
    font-size: 14px;   
    color: #fff;
    outline: none; 
    padding: 9px 9px;
    border: none;
    background: #803F5F;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    -webkit-appearance: none;
}
.footer form input[type="submit"]:hover{
	background:#999;
}
</style>
