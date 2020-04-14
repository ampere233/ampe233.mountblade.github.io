function rBackGround(){
				var bodyBgs = [];
				bodyBgs[0] = "img/0.png";
				bodyBgs[1] = "img/1.png";
				bodyBgs[2] = "img/2.png";
				bodyBgs[3] = "img/3.png";
				bodyBgs[4] = "img/4.png";
				bodyBgs[5] = "img/5.png";
				bodyBgs[6] = "img/6.png";
				bodyBgs[7] = "img/7.png";
				bodyBgs[8] = "img/8.png";
				bodyBgs[9] = "img/9.png";
				bodyBgs[10] = "img/10.png";
				bodyBgs[11] = "img/11.png";
				var randomBgIndex = Math.round( Math.random() * 11 );		 
			//输出随机的背景图
				document.write('<style>section{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat 50% 0}</style>');
			//]]>
}