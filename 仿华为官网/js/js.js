$(function(){
	var i = 0;
			var timer;
			var _img = $(".banner a");
			var _left = $(".banner .left");
			var _right = $(".banner .right");
			_img.eq(0).fadeIn(1000).siblings().fadeOut(1000);
			Show();
			chanGe(_img);
			chanGe(_right);
			chanGe(_left);
			function chanGe(obj){
				obj.hover(function(){
					clearInterval(timer);
//					i=$(this).index();
					_img.eq(i).fadeIn(1000).siblings().fadeOut(1000);
				},function(){
					Show();
				})
			}
			_right.click(function(){
				clearInterval(timer);	
				if(i==_img.length-1){
					i=-1
				};
				i++;
				_img.eq(i).fadeIn(1000).siblings().fadeOut(1000);
			})
			_left.click(function(){
				clearInterval(timer);	
				if(i==0){
					i=_img.length
				};
				i--;
				_img.eq(i).fadeIn(1000).siblings().fadeOut(1000);
			})
			function Show(){
				timer=setInterval(function(){
					i++;
					if(i>_img.length-1){
						i=0;
					}
					_img.eq(i).fadeIn(1000).siblings().fadeOut(1000);
					console.log(i)
				},3000)
			}
})
