import React from 'react';
import Sidebar from 'react-sidebar';
import SidemenuContent from './SidemenuContent';
// import history from '../../../history';

export default class Sidemenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: false
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }

    render() {
      return (
          <Sidebar
              sidebar={<SidemenuContent />}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ sidebar: { background: '#1C1C1C', width: '13%', zIndex: 5 }, overlay: { background: 'none', zIndex: 4 } }}

        >
              {/* <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
              </button> */}
              <i className="fa fa-user" style={{ fontSize: 42 }} onClick={() => this.onSetSidebarOpen(true)} />
          </Sidebar>
      );
    }
  }
