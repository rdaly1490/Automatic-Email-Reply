var React = require('react');
var $ = require("jquery");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container-fluid">
				<div className="col-xs-8 col-xs-offset-2 well">
					<h1>Your email was successfully sent</h1>
					<button onClick={this.returnToForm} >Back to Form</button>
				</div>
			</div>
		);
	},
	returnToForm: function(e) {
		e.preventDefault();
		this.props.myRouter.navigate("contact", {trigger:true});
	}
});