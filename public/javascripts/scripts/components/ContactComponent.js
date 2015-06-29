var React = require('react');
var $ = require("jquery");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container-fluid">
				<div className="col-xs-8 col-xs-offset-2">
					<h2>Contact Us</h2>
					<form onSubmit={this.submitForm}>
						<label>Name</label><br />
						<input ref="name" type="text" placeholder="Name" />
						<p></p>
						<label>Email</label><br />
						<input ref="email" type="text" placeholder="Email" />
						<p></p>
						<label>Subject</label><br />
						<input ref="subject" type="text" placeholder="Subject" />
						<p></p>
						<label>Message</label><br />
						<textarea ref="message"></textarea>
						<p></p>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		);
	},
	submitForm: function(e) {
		e.preventDefault();
		var submission = {
			name: this.refs.name.getDOMNode().value,
			email: this.refs.email.getDOMNode().value,
			subject: this.refs.subject.getDOMNode().value,
			message: this.refs.message.getDOMNode().value
		}
		console.log(submission);
		$.get (
			"http://localhost:3000/send-email",
			submission
		);

		this.props.myRouter.navigate("success", {trigger:true});
	}
});