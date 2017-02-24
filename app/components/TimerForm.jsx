const React = require('react');

const TimerForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    this.props.onSetTimer();
},
render: function () {
  return (
    <div>
      <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
        <button className="button expanded">Start</button>
      </form>
    </div>
  );
}
});

module.exports = TimerForm;
