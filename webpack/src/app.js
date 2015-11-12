var app = {
	Layout: require("./modules/layout"),
};

$(function() {
	var params = {
		header: require("./modules/layout/header"),
		side: require("./modules/SideBar").render(),
		content: require("./modules/content").render(),
		footer: require("./modules/layout/footer"),
	};
	
	var layout = new app.Layout(params);
	
	class LocationPusher {
		constructor() {
			
			ApiServer.load();
			
			$(document).on("click", "a", function(e) {
				var href = $(this).attr("href");
				history.pushState(href, null, href);
				
				ApiServer.load();
				
				e.preventDefault();
			})
			$(window).on("popstate",function(event){
				var state = event.originalEvent.state; // stateオブジェクト
				console.log( "state:", state );
				ApiServer.load();
			});
		}
	}
	new LocationPusher();
	
});


class ApiServer {
	static load() {
		var URL = require('url-parse');
		var url = new URL(location.href);
		// URL SAMPLE:
		// {
		//   auth: ""
		//   hash: ""
		//   host: "0.0.0.0:3000"
		//   hostname: "0.0.0.0"
		//   href: "http://0.0.0.0:3000/page-name/index?param=value&param2[]=node&param2[]=purejs"
		//   password: ""
		//   pathname: "/page-name/index"
		//   port: "3000"
		//   protocol: "http:"
		//   query: "?param=value&param2[]=node&param2[]=purejs"
		//   username: "
		// }
		// console.log( "new URL():", url );

		var parse = require('url-parse')
			, parsedUrl = parse(location.href, true);
		// console.log( "parse(url, true)", parsedUrl );
		// PARSE SAMPLE: {
		//   auth: ""
		//   hash: ""
		//   host: "0.0.0.0:3000"
		//   hostname: "0.0.0.0"
		//   href: "http://0.0.0.0:3000/page-name/index?param=value&param2%5B%5D=purejs"
		//   password: ""
		//   pathname: "/page-name/index"
		//   port: "3000"
		//   protocol: "http:"
		//   query: Object
		//   username: ""
		// }
		
		var request = $.ajax({
			url: "/api/page",
			method: "GET",
			data: {
				page : parsedUrl.pathname,
				params: parsedUrl.query
			},
			dataType: "json",
		});
		 
		request.done(function( page ) {
			$("title").text(page.title)
			$(".content").html(page.content)
		});

		request.fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
		});
	}
}
