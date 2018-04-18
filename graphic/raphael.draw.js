/*
by lucywu
依赖raphael.js
*/
(function(window){
	/*
	根据pointer点集合输出path使用的字符串
	pointer = [
		{x:1,y:2},
		...
	]
	*/
	var R_path={
		//画多点直线
		L:function(pos){
			var str = "M";
			for(var i=0,len=pos.length;i<len;i++)
			{
				str += pos[i].x+","+pos[i].y;
				if(i<len-1){
					str+="L";
				}
			}
			return str;
		},
		//曲线
		C:function(pos){
			var str = "M"+pos[0].x+","+pos[0].y;
			for(var i=1,len=pos.length;i<len;i++)
			{
				str+= clink(pos[i-1],pos[i]);
			}
			return str;
			function clink(startCoord,endCoord){
					//开始点控制点
				var x1,y1,
					//结束点控制点
					x2,y2;
				var xspace = 0.5,yspace=0.05;
				x1 = startCoord.x + (endCoord.x - startCoord.x)*xspace;
				y1 = startCoord.y + (endCoord.y - startCoord.y)*yspace;
				x2 = endCoord.x + (startCoord.x - endCoord.x)*xspace;
				y2 = endCoord.y + (startCoord.y - endCoord.y)*yspace;
				return "C"+x1+","+y1+" "+x2+","+y2+" "+endCoord.x+","+endCoord.y;
			}
		}

	};
})(window)