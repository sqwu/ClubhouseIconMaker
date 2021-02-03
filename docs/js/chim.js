const $=e=>document.getElementById(e);var app=new Vue({el:"#main",data:{cw:1e3,ch:1e3,preview:null,canvas:null,userImg:null,userImgSrc:null},created:function(){},mounted:function(){this.preview=$("preview"),this.canvas=$("canvas"),this.userImg=$("user-img"),this.updateScreenSize()},destroyed:function(){window.removeEventListener("resize",this.updateScreenSize(),!1)},methods:{loadPage:function(){window.addEventListener("resize",this.updateScreenSize),this.userImg.addEventListener("change",this.loadUserImg,!1),this.loadDefault()},updateScreenSize:function(){this.setPreviewSize()},setPreviewSize:function(){this.cw=.98*$("preview-container").clientWidth,this.ch=.98*$("preview-container").clientHeight,this.canvas.style.width=this.cw+"px",this.canvas.style.height=this.ch+"px"},loadDefault:function(){this.drawLoadingImage(),this.userImgSrc="img/sample/deer.jpg",$("overlay-text").value="🎉 Click me!",setTimeout(this.drawImage,1e3)},drawLoadingImage:function(){var e=this.canvas.getContext("2d");e.fillStyle="white",e.fillRect(0,0,1e3,1e3);e.font='400 100px "Nunito", sans-serif',e.fillStyle="#666666",e.textBaseline="middle",e.textAlign="center";var t=this.canvas.width/2,i=this.canvas.height/2;e.fillText("loading...",t,i),this.preview.src=this.canvas.toDataURL()},pickImage:function(){$("user-img").click()},loadUserImg:function(e){var t,e=e.target.files[0];e.type.match("image.*")?((t=new FileReader).onload=function(){this.userImgSrc=t.result,this.drawImage()}.bind(this),t.readAsDataURL(e)):alert("画像を選択してください")},drawImage:function(){this.drawLoadingImage();var a=this.canvas.getContext("2d"),n=new Image;n.src=this.userImgSrc,n.onload=function(){var e=n.width>n.height?(n.width-n.height)/2:0,t=n.width>n.height?0:(n.height-n.width)/2,i=Math.min(n.width,n.height);a.drawImage(n,e,t,i,i,0,0,1e3,1e3),this.drawText()}.bind(this)},drawText:function(){var e=this.canvas.getContext("2d"),t=$("overlay-text").value;e.font='bold 100px "Nunito", "Kosugi Maru", sans-serif',e.fillStyle="#404040",e.strokeStyle="#ffffff",e.lineWidth=15,e.textBaseline="middle",e.textAlign="center";var i=t.split("\n");console.log(i.length);for(var a=this.canvas.width/2,n=this.canvas.height/2+20-100*(i.length-1)*1.2/2,s=0;s<i.length;s++)e.strokeText(i[s],a,n),e.fillText(i[s],a,n),n+=120;this.preview.src=this.canvas.toDataURL()},adjustHeight:function(e){e.target.style.height=Math.max(e.target.scrollHeight,e.target.clientHeight)+"px",this.changeText()},changeText:function(){this.drawImage()}},computed:{}});app.loadPage();