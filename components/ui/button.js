import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  const { className, children, link, onClick, type } = props;

  const buttonClasses = `${classes.btn} ${className}`;

  if (link) {
    return (
      <Link href={link} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
