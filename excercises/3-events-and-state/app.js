////////////////////////////////////////////////////////////////////////////////
// Excercise:
// - make these tabs work when you click them
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var assign = require('react/lib/Object.assign');

var DATA = [
  { name: 'USA', description: 'Land of the Free, Home of the brave' },
  { name: 'China', description: 'Lots of concrete' },
  { name: 'Russia', description: 'World Cup 2018!' },
];

var App = React.createClass({
  getInitialState () {
    return { 
      activeTab: 0
    };
  },

  switchTab (tabIndex) {
    this.setState({
      activeTab: tabIndex
    });
  },

  renderTabs () {
    return this.props.countries.map((country, index) => {
      var style = (
        index === this.state.activeTab ? 
          styles.activeTab : 
          styles.tab
      );

      return (
        <div key={index} onClick={this.switchTab.bind(this, index)} style={style}>
          {country.name}
        </div>
      );
    });
  },

  renderPanel () {
    var country = this.props.countries[this.state.activeTab];
    return (
      <div>
        <p>{country.description}</p>
      </div>
    );
  },

  render () {
    return (
      <div style={styles.app}>
        <div style={styles.tabs}>
          {this.renderTabs()}
        </div>
        <div style={styles.tabPanels}>
          {this.renderPanel()}
        </div>
      </div>
    );

  }
});

var styles = {};

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
};

styles.activeTab = assign({}, styles.tab, {
  borderBottomColor: '#000'
});

styles.tabPanels = {
  padding: 10
};

React.render(<App countries={DATA}/>, document.body);

