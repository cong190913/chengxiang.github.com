//JavaScript代码区域
layui.use('element', function(){
	var element = layui.element;
  
});

layui.use(['carousel', 'form'], function(){
	var carousel = layui.carousel,form = layui.form;

	//图片轮播
	carousel.render({
    	elem: '#carousel',
    	arrow: 'always',
    	width: '100%',
    	height: '200px'
  	});

});

layui.use('layer', function(){
  var layer = layui.layer;
  
  	layer.photos({
  		photos: '#carousel',
  		anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
	}); 
});
