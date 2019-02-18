	//remove a seccao versoes
	var url = window.location.href;
	var lastPart = url.substr(url.lastIndexOf('/') + 1);

	if (lastPart === "argo"){
		$("section#version").remove();
		$("div.other-content").css("margin-top", "0px");
	}
