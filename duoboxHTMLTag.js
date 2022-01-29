var b = document.querySelectorAll("duobox");

for (let i = 0; i < b.length; i++) {
	b[i].style.border = "2px solid black";
	b[i].style.borderRadius = b[i].getAttribute("radius");
	b[i].style.borderColor = b[i].getAttribute("borderColor");
	b[i].style.color = b[i].getAttribute("textColor");
	b[i].style.backgroundColor = b[i].getAttribute("bgColor");
	b[i].style.borderWidth = b[i].getAttribute("borderWidth");
	b[i].style.paddingTop = "5px";
	b[i].style.paddingBottom = "5px";
	b[i].style.paddingRight = "10px";
	b[i].style.paddingLeft = "10px";
	b[i].style.fontFamily = b[i].getAttribute("font");
	b[i].style.fontWeight = b[i].getAttribute("weight");
	if (b[i].getAttribute("value").length == 2 || b[i].getAttribute("value").length == 1) {
		b[i].innerHTML = b[i].getAttribute("value");
	}
	if (b[i].getAttribute("value").length == 2) {
		b[i].style.paddingTop = "10px";
		b[i].style.paddingBottom = "10px";
	}

	b[i].onselectstart = (e) => {
		if (b[i].getAttribute("selectable") == null) {
			e.preventDefault();
		} else {
			console.log("");
		}
	}
}
