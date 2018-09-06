/* eslint-disable import/prefer-default-export */

export function normalizeLaunches(launches = []) {
  return launches.map((data) => {
    const launch = data || {};
    return {
      flightNumber: launch.flight_number,
      details: launch.details,
      missionName: launch.mission_name,
      launchDate: new Date(launch.launch_date_utc).toDateString(),
      launchSiteLong: launch.launch_site.site_name_long,
      rocketName: launch.rocket.rocket_name,
      rocketType: launch.rocket.rocket_type,
    };
  });
}
