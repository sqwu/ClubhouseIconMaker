const $=e=>document.getElementById(e);var app=new Vue({el:"#main",data:{cw:1e3,ch:1e3,preview:null,canvas:null,userImg:null,userImgSrc:null,verticalAlignSetting:"middle",textSizeSetting:"medium"},created:function(){},mounted:function(){this.preview=$("preview"),this.canvas=$("canvas"),this.userImg=$("user-img"),this.updateScreenSize()},destroyed:function(){window.removeEventListener("resize",this.updateScreenSize(),!1)},methods:{loadPage:function(){window.addEventListener("resize",this.updateScreenSize),this.userImg.addEventListener("change",this.loadUserImg,!1),this.loadDefault()},updateScreenSize:function(){this.setPreviewSize()},setPreviewSize:function(){this.cw=.98*$("preview-container").clientWidth,this.ch=.98*$("preview-container").clientHeight,this.canvas.style.width=this.cw+"px",this.canvas.style.height=this.ch+"px"},loadDefault:function(){this.drawLoadingImage(),this.userImgSrc="img/sample/deer.jpg",$("overlay-text").value="🎉 Click me!",setTimeout(this.drawImage,1e3)},drawLoadingImage:function(){var e=this.canvas.getContext("2d");e.fillStyle="white",e.fillRect(0,0,1e3,1e3);e.font='400 100px "Nunito", sans-serif',e.fillStyle="#666666",e.textBaseline="middle",e.textAlign="center";var t=this.canvas.width/2,i=this.canvas.height/2;e.fillText("loading...",t,i),this.preview.src=this.canvas.toDataURL()},pickImage:function(){$("user-img").click()},loadUserImg:function(e){var t,e=e.target.files[0];e.type.match("image.*")?((t=new FileReader).onload=function(){this.userImgSrc=t.result,this.drawImage()}.bind(this),t.readAsDataURL(e)):alert("画像を選択してください")},drawImage:function(){this.drawLoadingImage();var a=this.canvas.getContext("2d"),n=new Image;n.src=this.userImgSrc,n.onload=function(){var e=n.width>n.height?(n.width-n.height)/2:0,t=n.width>n.height?0:(n.height-n.width)/2,i=Math.min(n.width,n.height);a.drawImage(n,e,t,i,i,0,0,1e3,1e3),this.drawText()}.bind(this)},drawText:function(){var e,t=this.canvas.getContext("2d"),i=$("overlay-text").value;switch(this.textSizeSetting){case"small":e=70;break;case"medium":e=100;break;case"large":e=130}var a=1.15;t.font="bold "+e+'px "Nunito", "Kosugi Maru", sans-serif',t.fillStyle="#404040",t.strokeStyle="#ffffff",t.lineWidth=15,t.textBaseline="middle",t.textAlign="center";var n=i.split("\n"),s=this.canvas.width/2,r=0;switch(this.verticalAlignSetting){case"top":r=e*a+50;break;case"middle":r=this.canvas.height/2+20-(n.length-1)*e*a/2;break;case"bottom":r=this.canvas.height-(n.length*e*a+50)}for(var h=0;h<n.length;h++)t.strokeText(n[h],s,r),t.fillText(n[h],s,r),r+=e*a;this.preview.src=this.canvas.toDataURL()},adjustHeight:function(e){e.target.style.height=Math.max(e.target.scrollHeight,e.target.clientHeight)+"px",this.drawImage()},changeText:function(){this.drawImage()},showOptionSelector:function(e){e.target.classList.add("selecting")},changeTextVerticalAlign:function(e){this.verticalAlignSetting=e,this.drawImage()},changeTextSize:function(e){this.textSizeSetting=e,this.drawImage()}},computed:{textVerticalPositionClass:function(){return"v-"+this.verticalAlignSetting},textSizeClass:function(){return"size-"+this.textSizeSetting}}});app.loadPage();