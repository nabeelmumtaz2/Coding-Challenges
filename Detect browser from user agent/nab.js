function detectBrowser(userAgent){
	if(userAgent.includes("Chrome")){
		return "Google Chrome";
	}else if(userAgent.includes("Firefox")){
		return "Mozilla Firefox";
    }else if(userAgent.includes("MSIE") || userAgent.includes("Internet Explorer")){
		return "Internet Explorer";
	}
}