import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Row, Col, Tooltip, Button, Icon,
} from 'antd';

const { Header } = Layout;

const LaunchesHeader = ({ isLoading, title, getLaunches }) => (
  <Header className="launch-header">
    <Row>
      <Col
        xs={{ span: 20 }}
        sm={{ span: 20 }}
        md={{ span: 20 }}
        lg={{ span: 12 }}
        xl={{ span: 12 }}
      >
        <h2>
          {title}
          {' '}
Launches
        </h2>
      </Col>
      <Col
        xs={{ span: 1, offset: 1 }}
        sm={{ span: 1, offset: 1 }}
        md={{ span: 1, offset: 1 }}
        lg={{ span: 1, offset: 11 }}
        xl={{ span: 1, offset: 11 }}
      >
        <Tooltip placement="left" title="Reload">
          <Button
            type="primary"
            shape="circle"
            size="large"
            loading={isLoading}
            disabled={isLoading}
            onClick={getLaunches}
          >
            {!isLoading && <Icon className="launch-refresh-icon" type="redo" />}
          </Button>
        </Tooltip>
      </Col>
    </Row>
  </Header>);

LaunchesHeader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  getLaunches: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default LaunchesHeader;
