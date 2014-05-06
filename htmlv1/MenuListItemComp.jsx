/** @jsx React.DOM */

var MenuListItemComp = React.createClass({
	handleClick: function(tag) {
    	viewList(tag);
  	},
	render: function() {
  		var createItem = function(itemlist) {
      	return <li >
  			<a onClick={this.handleClick.bind(this,itemlist.name)} >
				<i className="ico-cat ico-cat2"></i>
				<span className="glyphicon glyphicon-leaf" style={{left:'-25px'}}></span>
				<span className="news-title">{itemlist.name}</span>
				<span className="counter">1</span>
			</a>
		</li>;
    }.bind(this);
    return (
    	<div> {this.props.menu.map(createItem)} </div>
    )
  },
  getInitialState: function() {
  	return {value: 0}
  }
});