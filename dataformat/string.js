/*
	字符串数据常用功能
*/
(function(window){
	var strCommon = {
		/*
			长字符串根据规定长度插入“分隔符”实现换行
			str，要换行的字符串
			maxLength，每行的最大长度
			separate，分隔字符，默认是\n
			--注意--
			* 一个英文字母和中文汉字长度都是1
		*/
		newLine:function(str,maxLength,separate){
			separate = (separate!=undefined&&separate)?separate:"\n";
			if (str.length > maxLength){
				return str.substring(0,maxLength)
						+separate
						+newLineStr(str.substring(maxLength,str.length),maxLength);
			} else {
				return str.substring(0,maxLength);
			}
		}
	}
	// window.strCommon = strCommon;
})(window)