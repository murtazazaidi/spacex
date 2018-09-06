import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Col, Button, Badge, Input, DatePicker, AutoComplete,
} from 'antd';

import { onlyUnique } from 'utils/arrayUtils';

const InputGroup = Input.Group;

const DATE_FORMAT = 'ddd MMM DD YYYY';

const field = {
  FLIGHT_NUM: 'flightNumber',
  MISSION_NAME: 'missionName',
  LAUNCH_DATE: 'launchDate',
  LAUNCH_SITE: 'launchSiteLong',
  ROCKET_NAME: 'rocketName',
  ROCKET_TYPE: 'rocketType',
};

const filterSameObj = (obj, key, value) => obj[key] === value;

const filterAfterDate = (obj, key, value) => moment.utc(obj[key]).isAfter(moment.utc(value), 'day');

const INITIAL_STATE = {
  flightNumber: '',
  missionName: '',
  launchDate: '',
  launchSiteLong: '',
  rocketName: '',
  rocketType: '',
};

class LaunchesSearch extends Component {
  state = INITIAL_STATE;

  static propTypes = {
    filtersPairArr: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string),
    ).isRequired,
    clearFilters: PropTypes.func.isRequired,
    applyFilters: PropTypes.func.isRequired,
    filteredLaunches: PropTypes.arrayOf(PropTypes.shape({
      flightNumber: PropTypes.number.isRequired,
      missionName: PropTypes.string.isRequired,
      launchSiteLong: PropTypes.string.isRequired,
      launchDate: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      rocketType: PropTypes.string.isRequired,
    })).isRequired,
    launches: PropTypes.arrayOf(PropTypes.shape({
      flightNumber: PropTypes.number.isRequired,
      missionName: PropTypes.string.isRequired,
      launchSiteLong: PropTypes.string.isRequired,
      launchDate: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      rocketType: PropTypes.string.isRequired,
    })).isRequired,
  }

  handleChange = (key, value) => {
    const newState = {};
    newState[key] = value;
    if (!value) this.clearSingleFilter(key);
    else if (key === field.LAUNCH_DATE
      && moment(value).isValid()) this.applySingleFilter(key, value);
    this.setState(newState);
  };

  applySingleFilter = (key, value) => {
    const { filtersPairArr } = this.props;
    const newFiltersPairArr = filtersPairArr.slice();
    newFiltersPairArr.push([key, value]);
    this.filterData(newFiltersPairArr);
  };

  clearSingleFilter = (key) => {
    const { filtersPairArr, clearFilters } = this.props;
    let newFiltersPairArr = filtersPairArr.slice();
    newFiltersPairArr = newFiltersPairArr.filter(o => o[0] !== key);
    if (newFiltersPairArr.length !== filtersPairArr.length) {
      if (!newFiltersPairArr.length) clearFilters();
      else this.filterData(newFiltersPairArr);
    }
  };

  filterData = (newFiltersPairArr) => {
    let { launches: filteredLaunches } = this.props;
    const { applyFilters } = this.props;

    filteredLaunches = filteredLaunches.slice();
    newFiltersPairArr.forEach((filterPair) => {
      // Array allows for having multiple values filtered against same key
      const key = filterPair[0];
      const value = filterPair[1];
      const filterFunc = key === field.LAUNCH_DATE ? filterAfterDate : filterSameObj;
      filteredLaunches = filteredLaunches.filter(obj => filterFunc(obj, key, value));
    });

    applyFilters(filteredLaunches, newFiltersPairArr);
  }

  clearAllFilters = () => {
    this.setState(INITIAL_STATE, () => {
      const { clearFilters } = this.props;
      clearFilters();
    });
  }

  render() {
    const { filteredLaunches, filtersPairArr } = this.props;
    const {
      flightNumber, missionName, launchDate, launchSiteLong,
      rocketName, rocketType,
    } = this.state;

    return (
      <InputGroup className="launch-search" size="small">
        <Col xs={24} sm={24} md={12} lg={6} xl={2} xxl={2}>
          <AutoComplete
            placeholder="Flight #"
            style={{ width: '100%' }}
            value={flightNumber}
            dataSource={filteredLaunches.map(x => x.flightNumber.toString()).filter(onlyUnique)}
            onSelect={(value) => { this.applySingleFilter(field.FLIGHT_NUM, +value); }}
            onChange={(value) => { this.handleChange(field.FLIGHT_NUM, value); }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={4}>
          <AutoComplete
            placeholder="Mission Name"
            style={{ width: '100%' }}
            value={missionName}
            dataSource={filteredLaunches.map(x => x.missionName).filter(onlyUnique)}
            onSelect={(value) => { this.applySingleFilter(field.MISSION_NAME, value); }}
            onChange={(value) => { this.handleChange(field.MISSION_NAME, value); }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={4} xxl={3}>
          <DatePicker
            placeholder="Launch Date After"
            style={{ width: '100%', height: '100%' }}
            onChange={(value) => { this.handleChange(field.LAUNCH_DATE, value); }}
            value={launchDate ? moment(launchDate) : null}
            format={DATE_FORMAT}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={7}>
          <AutoComplete
            placeholder="Launch Site"
            style={{ width: '100%' }}
            value={launchSiteLong}
            dataSource={filteredLaunches.map(x => x.launchSiteLong).filter(onlyUnique)}
            onSelect={(value) => { this.applySingleFilter(field.LAUNCH_SITE, value); }}
            onChange={(value) => { this.handleChange(field.LAUNCH_SITE, value); }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={3} xxl={3}>
          <AutoComplete
            placeholder="Rocket Name"
            style={{ width: '100%' }}
            value={rocketName}
            dataSource={filteredLaunches.map(x => x.rocketName).filter(onlyUnique)}
            onSelect={(value) => { this.applySingleFilter(field.ROCKET_NAME, value); }}
            onChange={(value) => { this.handleChange(field.ROCKET_NAME, value); }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={3} xxl={3}>
          <AutoComplete
            placeholder="Rocket Type"
            style={{ width: '100%' }}
            value={rocketType}
            dataSource={filteredLaunches.map(x => x.rocketType).filter(onlyUnique)}
            onSelect={(value) => { this.applySingleFilter(field.ROCKET_TYPE, value); }}
            onChange={(value) => { this.handleChange(field.ROCKET_TYPE, value); }}
          />
        </Col>
        <Col
          xs={{ span: 12, offset: 9 }}
          sm={{ span: 12, offset: 10 }}
          md={{ span: 12, offset: 11 }}
          lg={{ span: 2, offset: 10 }}
          xl={{ span: 2, offset: 0 }}
          xxl={{ span: 2, offset: 0 }}
        >
          <Badge
            count={filtersPairArr.length}
            style={{
              backgroundColor: '#181c1f', color: '#ccac55',
            }}
          >
            <Button
              type="primary"
              style={{ width: '100%' }}
              disabled={!filtersPairArr.length}
              onClick={this.clearAllFilters}
            >
            Clear
            </Button>
          </Badge>
        </Col>
      </InputGroup>
    );
  }
}

export default LaunchesSearch;
