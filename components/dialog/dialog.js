import classes from "./Dialog.module.css";

function Dialog({ isOpen, children, onConfirm, onCancel }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.dialog}>
      <div className={classes.content}>
        {children}
        <div className={classes.actions}>
          <button className={classes.button} onClick={onCancel}>
            Cancelar
          </button>
          <button className={classes.button} onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
