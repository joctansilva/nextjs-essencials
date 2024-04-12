"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./MainHeaderNavLink.module.css";

export default function MainHeaderNavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
