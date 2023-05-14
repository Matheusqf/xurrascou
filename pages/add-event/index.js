import { Fragment } from "react";
import AddEventForm from "@/components/event-form/add-event-form";

function AddEventPage() {
  return (
    <Fragment>
      <h1 className="center">Novo Evento</h1>
      <AddEventForm />
    </Fragment>
  );
}

export default AddEventPage;
