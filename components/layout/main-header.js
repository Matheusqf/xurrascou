import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Xurrascou</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Mostrar todos os eventos</Link>
          </li>
          <li>
            <Link href="/add-event">Adicionar Evento</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
