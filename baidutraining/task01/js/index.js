$(function(){
	$('.navbar').click(function(){
		$(this).parent().find('.navbar').removeClass('selected');
		$(this).addClass('selected');
		// console.log($('.selected').index());
	});
	$('.about-foot p a').click(function(){
		$('.nav').find('.navbar').removeClass('selected');
		$('.nav').find('.navbar').eq(0).addClass('selected');
	});
	function citysel(province){
		if (province=='0') {
			$('[name="city"]').html('<option value="0">--请选择城市--</option>');
		}else if (province=='beijing') {
			$('[name="city"]').html('<option value="0">--请选择城市--</option><option value="BJ">北京</option>');
		}else if (province=='jiangsu') {
			$('[name="city"]').html('<option value="0">--请选择城市--</option><option value="NJ">南京</option><option value="CZ">常州</option><option value="SZ">苏州</option>')
		}else if (province=='zhejiang') {
			$('[name="city"]').html('<option value="0">--请选择城市--</option><option value="HZ">杭州</option><option value="NB">宁波</option>');
		}
	}
	$('[name="province"]').change(function(){
		var province=$(this).find('option:selected').val();
		citysel(province);
	});
	$('.text-sel-02').click(function(){
		$(this).parent().find('.text-sel-02').removeClass('text-selected');
		$(this).addClass('text-selected');
		var index=$(this).index();
		// console.log(index);
		$('.pro-top-text-con').find('.pro-top-text-con-1').hide();
		$('.pro-top-text-con-1').eq(index).show();
	});

	// 页面切换
	var scrollFunc =function(e){
		e= e || window.event;
		if (e.wheelDelta == 120 || e.detail == 3) {//上滚
			var index = $('.selected').index();
			if (index>0) {
				var href=$('.navbar').eq(index-1).attr('href');
				// console.log(href);
				$('.nav').find('.navbar').eq(index-1).click();
				window.location =href;
			}
		}else if (e.wheelDelta == -120 || e.detail == -3) {
			var index = $('.selected').index();
			if(index<4){
				var href=$('.navbar').eq(index+1).attr('href');
				$('.nav').find('.navbar').eq(index+1).click();
				window.location =href;
			}
		}
	}
			/*注册事件*/
	if(document.addEventListener){
	    document.addEventListener('DOMMouseScroll',scrollFunc,false);
	}//W3C
	window.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
});