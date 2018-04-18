/*
数组常用操作
*/
(function(window){
	//取最大值
	Array.prototype.max = function(){
		return Math.max.apply(Math, this);
	}
	//取最小值
	Array.prototype.min = function(){
		return Math.min.apply(Math, this);
	}
})(window)