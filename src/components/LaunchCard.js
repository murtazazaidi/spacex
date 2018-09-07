import React from 'react';
import { List, Card } from 'antd';

const LaunchCard = launch => (
  <List.Item>
    <Card
      className="launch-card"
      title={`Flight ${launch.flightNumber} - ${launch.missionName}`}
      bodyStyle={{ padding: '5%' }}
      bordered={false}
    >
      <div>
        Launch Date:&nbsp;
        {launch.launchDate}
      </div>
      <div>
        Launch Site:&nbsp;
        {launch.launchSiteLong}
      </div>
      <div>
        Rocket Name:&nbsp;
        {launch.rocketName}
      </div>
      <div>
        Rocket Type:&nbsp;
        {launch.rocketType}
      </div>
    </Card>
  </List.Item>);

export default LaunchCard;
