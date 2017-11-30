<template>
    <div>
        <div class="header1">
          <nav class="navbar navbar-default" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">
                    <h1>Deliccio</h1> <span>Healthy And Tasty Food</span></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav pull-right">
                    <li><a href="/">Home</a></li>
                    <li><a href="#/services">Services</a></li>
                    <li><a href="#/typo">Typo</a></li>
                    <li><a href="#/menu">Menu</a></li>
                    <li  class="active"><a href="#/contact">Contact Us</a></li>
                </ul>
            </div>
          </nav>
        </div>
        <div class="content">
            <div class="container">
                <div class="col-md-12 text-center">
                    <div class="text">
                        <h1>Contact Us</h1>
                        <div class="line">
                        </div>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborumfugiat quo voluptas nulla pariatur.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-3 wow fadeInLeft animated">
                <div class="info">
                    <h3>Call Me</h3>
                    <p>+88 00 123 456 01</p>
                </div>
                <div class="info">
                    <h3>Email Me</h3>
                    <p>Hello@abdullahnoman.com</p>
                </div>
                <div class="info">
                    <h3>Address</h3>
                    <p>216 Street Address, Barisal, BD</p>
                </div>
            </div>
            <div class="col-md-9 text-center wow fadeInRight animated">
                <form action="" class="formone">
                    <div class="left">
                        <div class="col-md-6 ">
                            <input type="text" class="form-control" value="name" id="name">
                            <input type="email" class="form-control" value="email" id="email">
                            <input type="text" class="form-control" value="subject" id="subject">
                        </div>
                    </div>
                    <div class="right">
                        <div class="col-md-6 ">
                            <textarea name="" id="" cols="50" rows="4.5"></textarea>
                            <button><a href="">send message</a></button>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
    <div class="footer">
        <div class="container">
            <div class="col-md-3">
                <div class="first">
                    <h4><a href="index.html">Deliccio</a></h4>
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
                    <p>
                        <form>
                            <input type="text" class="text" value="Enter Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Email';}">
                            <input type="submit" value="Go">
                        </form>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default{

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
.container{
    width:1240px;
}
.container .row{
    margin:60px;
}
.container .info{
    line-height:50px;
}
.container .info h3{
    text-transform: uppercase;
    letter-spacing: 5px; 
}
.container .info p{
    font-size: 16px;
}
.formone{
    background: #F1F1F1;
    width: 100%;
    height: 230px;
    
}
.left input{
    width: 340px;
    height: 40px;
    margin: 30px;
}

.right textarea{
    margin: 30px auto;
}
.right button{
    width: 350px;
    height: 40px;
    background: #F73B56;
}
.right a{
    text-transform: uppercase;
    color: white
}
.right button:hover{
    text-transform: uppercase;
    background: gainsboro;
}
.right a:hover{
    color: black !important;
}
.look p{
    text-transform: uppercase;
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.footer{
    background: #333333;
    margin-top: 50px;
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
   margin-top: -1.0em;  
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