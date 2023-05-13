import React, { useEffect, useState } from "react";
import ParticipantRow from "./participant-row";
import classes from "./event-participants.module.css";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import AddParticipantForm from "./AddParticipantForm";

function EventParticipants() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  const [participants, setParticipants] = useState(event.participants);
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [confirmedParticipants, setConfirmedParticipants] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const newTotalValue = participants.reduce((total, participant) => {
      return total + (participant.isConfirmed ? participant.value : 0);
    }, 0);
    setTotalValue(newTotalValue);

    const newConfirmedParticipants = participants.filter(
      (participant) => participant.isConfirmed
    ).length;
    setConfirmedParticipants(newConfirmedParticipants);
  }, [participants]);

  const handleUpdate = (id, confirmed, value) => {
    setParticipants(
      participants.map((p) =>
        p.id === id ? { ...p, isConfirmed: confirmed } : p
      )
    );
    setTotalConfirmed(confirmed ? totalConfirmed + 1 : totalConfirmed - 1);
    setTotalValue(confirmed ? totalValue + parseFloat(value) : totalValue - parseFloat(value));
  };
  
  const handleAdd = (name, value) => {
    const newParticipant = { id: Date.now(), name, value: parseFloat(value), isConfirmed: false };
    setParticipants([...participants, newParticipant]);
  };

  const handleDelete = (id) => {
    const participantToDelete = participants.find((p) => p.id === id);
    if (participantToDelete.isConfirmed) {
      setTotalConfirmed(totalConfirmed - 1);
      setTotalValue(totalValue - participantToDelete.value);
    }
    setParticipants(participants.filter((p) => p.id !== id));
  };

  return (
    <div className={classes.eventParticipants}>
      <h2 className={classes.header}>
        Participantes do churrasco
        <span>
          <AddParticipantForm onAdd={handleAdd} />
        </span>
      </h2>
      {participants &&
        participants.map((p) => (
          <ParticipantRow
            key={p.id}
            participant={p}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      <div>Total de Participantes: {participants?.length || 0}</div>
      <div>Confirmados: {totalConfirmed}</div>
      <div>Valor Total Arrecadado: {totalValue}</div>
    </div>
  );
}

export default EventParticipants;
