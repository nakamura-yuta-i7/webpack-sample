module.exports = Layout;

function Layout(params) {
	this.render(params);
}
Layout.prototype.render = function(params) {
	require("./layout/style.css");
	var html = [params.header, params.side ,params.content, params.footer].join("");
	$("body").html( html );
};
