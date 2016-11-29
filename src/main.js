$ = jQuery = require('jquery');

(function(win){
  'use strict';
  
  var React = require('react');
  var ReactDOM = require('react-dom');
  var HomePage = require('./components/homePage');
  var AboutPage = require('./components/about/aboutPage');
  var AuthorPage = require('./components/authors/authorPage');
  var Header = require('./components/common/header');

  var App = React.createClass({
      render: function() {
          var Child;

          switch (this.props.route) {
            case 'about': Child = AboutPage; break;
            case 'authors': Child = AuthorPage; break;
            default: Child = HomePage;
          }
          return (
            <div>
              <Header/>
              <Child/>
            </div>
          );
      }
  });

  function render(){
    var route = win.location.hash.substr(1);
    ReactDOM.render(<App route = {route} />, document.getElementById('app'));
  }

  win.addEventListener('hashchange', render);
  render();
})(window);
