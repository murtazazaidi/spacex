import React from 'react';
import { List, Card } from 'antd';

const LaunchCard = launch => (
  <List.Item>
    <Card
      className="launch-card"
      title={`Flight ${launch.flightNumber} - ${launch.missionName}`}
      bordered={false}
    >
      <div>
Launch Date:
        {launch.launchDate}
      </div>
      <div>
Launch Site:
        {launch.launchSiteLong}
      </div>
      <div>
Rocket Name:
        {launch.rocketName}
      </div>
      <div>
Rocket Type:
        {launch.rocketType}
      </div>
    </Card>
  </List.Item>);

export default LaunchCard;
