import React, { useState } from 'react';
import classes from "./event-participants.module.css";

function AddParticipantForm({ onAdd }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name, value);
    setName("");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Adicionar Participante</button>
    </form>
  );
}

export default AddParticipantForm;
