
class Content {
	static render() {
		require("./content/style.css");
		$(document).on("click", ".content", function() {
			
		}).on("paste", ".content", function(e) {
			e.preventDefault();
			var text = e.originalEvent.clipboardData.getData("text/plain");
			document.execCommand("insertHTML", false, text);
		});
		
		return `
			<div class="content" contentEditable=true>
				
			</div>
		`;
	}
}

module.exports = Content
