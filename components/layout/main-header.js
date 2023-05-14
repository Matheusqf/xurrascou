import useMobileDetect from "@/hooks/useMobileDetect";
import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
  const isMobile = useMobileDetect();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          src="/images/barbecue.png"
          alt="Logo"
          className={classes.logoImg}
        />
        <Link href="/">Xurrascou</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">
              {isMobile ? "Todos os Eventos" : "Mostrar todos os eventos"}
            </Link>
          </li>
          <li>
            <Link href="/add-event">
              {isMobile ? "Novo Evento" : "Adicionar Evento"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
