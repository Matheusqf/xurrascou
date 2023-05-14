import { useContext, useState } from "react";
import classes from "./add-event-form.module.css";
import Button from "../ui/button";
import { useEvents } from "@/store/events-context";
import NotificationContext from "@/store/notification-context";
import { useRouter } from "next/router";

function AddEventForm() {
  const router = useRouter();
  const { addEvent } = useEvents();
  const notificationCtx = useContext(NotificationContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    image: "images/background4.jpg",
    isFeatured: true,
    participants: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verify if all fields are filled
    for (let field in formData) {
      if (
        !formData[field] &&
        field !== "isFeatured" &&
        field !== "participants"
      ) {
        notificationCtx.showNotification({
          title: "Erro",
          message: `Por favor, preencha o campo ${field}.`,
          status: "error",
        });
        return;
      }
    }

    // Add evento to context
    addEvent(formData);

    // Notify user
    notificationCtx.showNotification({
      title: "Sucesso",
      message: "Evento adicionado com sucesso!",
      status: "success",
    });

    // Redirects to home page after successful form submission
    router.push('/');
  };

  return (
    <form className={classes["add-event-form"]} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Nome do evento</label>
        <input id="title" name="title" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">Descrição</label>
        <textarea id="description" name="description" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="location">Localização</label>
        <input id="location" name="location" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="date">Data</label>
        <input id="date" name="date" type="date" onChange={handleChange} />
      </div>

      <Button type="submit">
        <span>Adicionar Evento</span>
      </Button>
    </form>
  );
}

export default AddEventForm;
