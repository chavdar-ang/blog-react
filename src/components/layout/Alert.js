import React from 'react';
import { useSelector } from 'react-redux'

const Alert = () => {
    const alerts = useSelector(state => state.alerts)
    console.log(alerts);
    return alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
        <div key={alert.id} className={`alert ${alert.alertType}`}>{alert.message}</div>
    ));
}

export default Alert;
