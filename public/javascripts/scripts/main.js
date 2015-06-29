var React = require('react');
var Backbone = require('backbone');

var ContactComponent = require("./components/ContactComponent.js");
var SuccessComponent = require("./components/SuccessComponent.js");

var App = Backbone.Router.extend({
	routes: {
		"": "contact",
		"contact":"contact",
		"success":"success"
	},
	contact: function() {
		React.render(
			<ContactComponent myRouter={myRouter} />,
			document.getElementById("container"));
	},
	success: function() {
		React.render(
			<SuccessComponent myRouter={myRouter} />,
			document.getElementById("container"));
	}

});

var myRouter = new App();
Backbone.history.start();