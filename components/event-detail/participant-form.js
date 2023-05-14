import React, { useContext, useState } from 'react';
import NotificationContext from "@/store/notification-context";
import classes from "./participant-form.module.css";

function AddParticipantForm({ onAdd }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const notificationCtx = useContext(NotificationContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      notificationCtx.showNotification({
        title: "Erro",
        message: `Por favor, insira um nome para o participante.`,
        status: "error",
      });
      return;
    }
    if (isNaN(value) || !value.trim()) {
      notificationCtx.showNotification({
        title: "Erro",
        message: `Por favor, insira um valor.`,
        status: "error",
      });
      return;
    }

    onAdd(name, Number(value));
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
        placeholder="Valor (R$)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Adicionar Participante</button>
    </form>
  );
}

export default AddParticipantForm;
