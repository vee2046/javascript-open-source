/*
右键事件
*/
(function(){
	/*
		添加上下文菜单事件
		- 显示菜单：触发contextmenu事件时
		- 隐藏菜单：鼠标离开contextmenu时+点击菜单项时，或者document click事件时（适用于界面交互不复杂情况）
	*/
	function addEventContextMenu(id,callback){
		callback = callback || function(event){
        	console.log("右击事件，ID="+id);
        	//鼠标点击窗口的位置
        	var pointer = {x:event.offsetX,y:event.offsetY};
        };
        
        //不向上冒泡
        var obj = document.getElementById(id);
        //屏蔽右键菜单
        LTEvent.addListener(obj,"contextmenu",LTEvent.cancelBubble);
        //添加contextmenu事件
        // $("#"+id).on("contextmenu",callback);//jquery添加事件
        LTEvent.addListener(obj,"contextmenu",function(){
        	callback(window.event || arguments[0]);
        });//原生
	}
})()