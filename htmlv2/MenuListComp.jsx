/** @jsx React.DOM */
var MenuListComp = React.createClass({
  render: function() {
    return (
    	<div className="widget-container widget-categories widget-accordion">
			<div idName="categories" style={{display: 'block'}}>
				<div className="widget-container widget-categories style2">
					<div className="inner">
						<ul>		 					
							<li>
								<a style={{backgroundColor: '#67B0D1', color: '#FFFFFF', fontSize: '1.2em'}}>News</a>
							</li>
							<MenuListItemComp menu={this.props.menu} onItemClickFunc={this.props.onItemClickFunc} />
						</ul>
					</div>
				</div>
			</div>
		</div>
    );
  }
});