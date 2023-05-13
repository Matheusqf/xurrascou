import React, { useState } from "react";
import classes from "./participant-row.module.css";

function ParticipantRow({ participant, onUpdate, onDelete }) {
  const [isConfirmed, setConfirmed] = useState(false);

  const toggleConfirmation = () => {
    setConfirmed(!isConfirmed);
    onUpdate(participant.id, !isConfirmed, participant.value);
  };

  return (
    <div
      className={`${classes.participant} ${
        isConfirmed ? classes.confirmed : ""
      }`}
    >
      <span className={classes.participantName}>{participant.name}</span>
      <span className={classes.participantValue}>{participant.value}</span>
      <button onClick={toggleConfirmation}>Confirmar</button>
      <button onClick={() => onDelete(participant.id)}>Remover</button>
    </div>
  );
}

export default ParticipantRow;
