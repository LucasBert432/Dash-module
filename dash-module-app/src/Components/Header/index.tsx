import { FunctionComponent, useState } from "react";
import { Menu, X } from "lucide-react";
import useStyles from "./Header.styles";
import { menuItems } from "./header.const";
import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {
  const styles = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header css={styles.header}>
      <span css={styles.logo}>Access</span>

      <button
        css={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav css={[styles.nav, isMenuOpen && styles.navOpen]}>
        <ul css={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                css={styles.menuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
