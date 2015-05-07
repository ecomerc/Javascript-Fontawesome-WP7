
$( window ).load(function() {			
	var awesomeContent = new Array();
	for (index = 0; index < document.styleSheets.length; ++index) {
		if (document.styleSheets[index].href && document.styleSheets[index].href.indexOf("awesome") !=-1) {
			for (i = 0; i < document.styleSheets[index].rules.length; ++i) {
				if (document.styleSheets[index].rules[i].style.content != "") {
					awesomeContent[document.styleSheets[index].rules[i].selectorText.replace("::", ":")] = document.styleSheets[index].rules[i].style.content.replace(/"/g, "").replace("\\", "\\u");
				}
			}

		}
	}

	
	$( ".fa" ).each(function() {
		var classList =$(this).attr('class').split(/\s+/);
		var icon = this;
		$.each( classList, function(index, item){
			if ((("."+item+":before") in awesomeContent)) {
				var aw = eval('("'+awesomeContent["."+item+":before"]+'")');
				$(icon).removeClass(item);
				$(icon).text(aw);
			}
		});
 
	});
	Cufon.replace('.fa');
	Cufon.now();
});