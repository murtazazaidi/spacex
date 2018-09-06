import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import LaunchesSearch from 'components/LaunchesSearch';
import LaunchCard from 'components/LaunchCard';

const getInitialState = ({ launches }) => ({
  launches,
  filteredLaunches: launches.slice(),
  filtersPairArr: [],
});
class LaunchesList extends Component {
  state = getInitialState(this.props);

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.launches !== state.launches) {
      return {
        launches: props.launches,
        filteredLaunches: props.launches.slice(),
        filtersPairArr: [],
      };
    }
    return null;
  }

  clearFilters = () => {
    this.setState(prevState => ({
      filteredLaunches: prevState.launches.slice(),
      filtersPairArr: [],
    }));
  };

  applyFilters = (filteredLaunches, filtersPairArr) => {
    this.setState({ filteredLaunches, filtersPairArr });
  };

  render() {
    const { isLoading, title } = this.props;

    const { launches, filteredLaunches, filtersPairArr } = this.state;

    return (
      <div className="launch-table">
        <LaunchesSearch
          filtersPairArr={filtersPairArr}
          launches={launches}
          filteredLaunches={filteredLaunches}
          applyFilters={this.applyFilters}
          clearFilters={this.clearFilters}
        />
        <List
          grid={{
            gutter: 32, xs: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 4,
          }}
          pagination={{
            pageSize: 24,
            showTotal: total => `Showing ${total} ${title.toLowerCase()} launches`,
          }}
          dataSource={filteredLaunches}
          loading={isLoading}
          renderItem={LaunchCard}
        />
      </div>);
  }
}

export default LaunchesList;
