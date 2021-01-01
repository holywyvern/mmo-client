import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

function AppLink({ href, children, exact }) {
  const router = useRouter();
  const active = exact
    ? router.pathname === href
    : router.pathname.startsWith(href);

  const className = `${styles.link} ${styles[active ? "active" : "inactive"]}`;

  return (
    <li>
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    </li>
  );
}

AppLink.defaultProps = {
  exact: false,
};

export default AppLink;
