function openInfo(number) {
	var listItem = document.getElementsByClassName("item");
	var info = document.getElementsByClassName("infoPart");
	
	for (var i = 1; i <= info.length; i++) {
		if (i == number) {
			listItem[i-1].style.backgroundColor = "#cccccc";
			info[i-1].style.display = "block"
		}else {
			listItem[i-1].style.backgroundColor = '#f0f0f0';
			info[i-1].style.display = "none"
		}
	}
}