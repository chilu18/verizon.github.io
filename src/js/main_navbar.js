var React = require('react');

var MainNavbar = React.createClass({
  render: function(){
    return (
      <div>
        <nav>
          <div className="container-fluid navigation main-navbar-content center limit-width">
            <div className="navbar-item"><img src="./img/vz_150_rgb_p.png" alt="not available" className="navbar-logo"/></div>

          </div>
        </nav>
      </div>
    );
  }
});

module.exports = MainNavbar;

// <div className="navbar-item right"><p className="navbar-item-text activatable">Open Source</p></div>
// <div className="navbar-item right"><p className="navbar-item-text activatable">Talks</p></div>
// <div className="navbar-item right"><p className="navbar-item-text activatable">Blog</p></div>
