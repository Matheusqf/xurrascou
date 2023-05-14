import { useContext } from "react";

import classes from "./notification.module.css";
import NotificationContext from "../../store/notification-context";

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { message, status } = props;

  let statusClasses = "";
  let alertIcon = "🔔";

  if (status === "success") {
    statusClasses = classes.success;
    alertIcon = "✅";
  }

  if (status === "error") {
    statusClasses = classes.error;
    alertIcon = "🚨";
  }

  if (status === "pending") {
    statusClasses = classes.pending;
    alertIcon = "⏳";
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <span>{alertIcon}</span>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
