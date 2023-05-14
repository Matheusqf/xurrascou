import React, { useState } from "react";
import useMobileDetect from "@/hooks/useMobileDetect";
import classes from "./participant-row.module.css";

function ParticipantRow({ participant, onUpdate, onDelete }) {
  const [isConfirmed, setConfirmed] = useState(participant.isConfirmed);
  const isMobile = useMobileDetect();

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
      {!isMobile && (
        <span className={classes.participantConfirmation}>
          {isConfirmed ? "☑️" : "🕔"}
        </span>
      )}
      <span className={classes.participantName}>{participant.name}</span>
      <span className={classes.participantValue}>R$ {participant.value}</span>
      <button onClick={toggleConfirmation}>
        {isMobile
          ? isConfirmed
            ? "✅"
            : "🕔"
          : isConfirmed
          ? "Confirmado"
          : "Pendente"}
      </button>
      <button onClick={() => onDelete(participant.id)}>
        {isMobile ? "❌" : "Remover"}
      </button>
    </div>
  );
}

export default ParticipantRow;
