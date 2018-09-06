import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';

const DEFAULT_SELECTION = 'upcoming';

class AppMenu extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      location: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }).isRequired,
  }

  constructor(props) {
    super(props);
    const { pathname } = props.history.location;
    let route = DEFAULT_SELECTION;
    if (pathname !== '/') {
      const pathArray = pathname.split('/');
      route = pathArray[pathArray.length - 1];
    }
    this.state = {
      selectedKey: route,
    };
  }

  onSelect = ({ key }) => {
    this.setState({ selectedKey: key });
    const { history } = this.props;
    switch (key) {
      case 'upcoming': {
        history.push('/');
        break;
      }
      case 'past': {
        history.push('/past');
        break;
      }
      default:
    }
  };

  render() {
    const { selectedKey } = this.state;

    return (
      <Menu
        className="app-menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[DEFAULT_SELECTION]}
        selectedKeys={[selectedKey]}
        onSelect={this.onSelect}
      >
        <Menu.Item key="upcoming">
          <span>
            Upcoming Launches
          </span>
        </Menu.Item>
        <Menu.Item key="past">
          <span>
            Past Launches
          </span>
        </Menu.Item>
      </Menu>);
  }
}

export default AppMenu;
