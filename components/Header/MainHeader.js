import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "./Background/MainHeaderBackground";
import MainHeaderNavLink from "./NavLink/MainHeaderNavLink";

export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate witch food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <MainHeaderNavLink href="/meals" >
                Browse Meals
              </MainHeaderNavLink>
            </li>
            <li>
              <MainHeaderNavLink href="/community" >
                Foodies Community
              </MainHeaderNavLink>
            </li>     
          </ul>
        </nav>
      </header>
      <MainHeaderBackground />
    </>
  );
}
