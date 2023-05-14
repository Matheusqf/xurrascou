import React, { useEffect } from "react";
import classes from "./participant-form.module.css";

function AddParticipantForm({ onAdd, name, setName, value, setValue }) {
  const [isDrinkIncluded, setDrinkIncluded] = React.useState(false);

  useEffect(() => {
    if (isDrinkIncluded) {
      setValue("50");
    } else {
      setValue("30");
    }
  }, [isDrinkIncluded]);

  return (
    <div className={classes.participantForm}>
      <label className={classes.label}>Nome</label>
      <input
        className={classes.input}
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className={classes.row}>
        <label className={classes.label}>
          Valor Sugerido (R$)
          <div className={classes.checkbox}>
            <input
              type="checkbox"
              checked={isDrinkIncluded}
              onChange={(e) => setDrinkIncluded(e.target.checked)}
            />
            <span>Com bebida inclusa</span>
          </div>
        </label>
        <input
          className={classes.input}
          type="number"
          placeholder="Valor (R$)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={classes.message}>
        {isDrinkIncluded
          ? "O valor sugerido para quem quer incluir bebida é de R$ 50,00."
          : "O valor sugerido para quem não quer incluir bebida é de R$ 30,00."}
        Essa é apenas uma sugestão e pode ser editada.
      </div>
    </div>
  );
}

export default AddParticipantForm;
