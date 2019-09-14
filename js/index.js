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