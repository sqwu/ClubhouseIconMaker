const $=e=>document.getElementById(e);var app=new Vue({el:"#main",data:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{loadPage:function(){this.setPreviewSize()},setPreviewSize:function(){console.log($("preview-container").clientWidth),$("preview").style.width=$("preview-container").clientWidth+"px",$("preview").style.height=$("preview-container").clientHeight+"px"}},computed:{}});app.loadPage();