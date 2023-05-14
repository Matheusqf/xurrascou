import React, { useEffect, useState } from "react";
import ParticipantRow from "./participant-row";
import classes from "./event-participants.module.css";
import { useRouter } from "next/router";
import AddParticipantForm from "./participant-form";
import { useEvents } from "../../store/events-context";

function EventParticipants() {
  const router = useRouter();
  const { getEventById, addParticipant, updateParticipant, removeParticipant } =
    useEvents();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  const [participants, setParticipants] = useState(event.participants);
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const confirmedParticipants = participants.filter((p) => p.isConfirmed);
    setTotalConfirmed(confirmedParticipants.length);
    setTotalValue(
      confirmedParticipants.reduce((total, { value }) => total + value, 0)
    );
  }, [participants]);

  const handleUpdate = (id, confirmed, value) => {
    const updatedParticipant = {
      id,
      name: participants.find((p) => p.id === id).name,
      value: parseFloat(value),
      isConfirmed: confirmed,
    };
    setParticipants(
      participants.map((p) => (p.id === id ? updatedParticipant : p))
    );
    updateParticipant(eventId, updatedParticipant);
  };

  const handleAdd = (name, value) => {
    const newParticipant = {
      id: Date.now(),
      name,
      value: parseFloat(value),
      isConfirmed: false,
    };
    setParticipants((prevParticipants) => [
      ...prevParticipants,
      newParticipant,
    ]);
    addParticipant(eventId, newParticipant);
  };

  const handleDelete = (id) => {
    setParticipants(participants.filter((p) => p.id !== id));
    removeParticipant(eventId, id);
  };

  return (
    <div className={classes.eventParticipants}>
      <h2 className={classes.header}>
        Participantes do churrasco
        <span>
          <AddParticipantForm onAdd={handleAdd} />
        </span>
      </h2>
      {participants.map((p) => (
        <ParticipantRow
          key={p.id}
          participant={p}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
      <div>Total de Participantes: {participants.length}</div>
      <div>Confirmados: {totalConfirmed}</div>
      <div>Valor Total Arrecadado: R$ {totalValue}</div>
    </div>
  );
}

export default EventParticipants;
