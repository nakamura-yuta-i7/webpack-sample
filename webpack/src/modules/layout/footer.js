function Footer(params) {
	require("./footer/style.css");
	this.params = params;
	this.render();
}
Footer.prototype.render = function() {
	var footer = document.createElement("div");
	footer.classList.add("footer");
	footer.innerHTML += "Footer";
	return footer.outerHTML;
}
module.exports = new Footer().render();
