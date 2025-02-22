import { FunctionComponent, useState } from "react";
import { Menu, X } from "lucide-react";
import useStyles from "./Header.styles";
import { menuItems } from "./header.const";
import { Text } from "../Text/Text.component";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export const Header: FunctionComponent = () => {
  const styles = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header css={styles.header}>
      <div onClick={() => navigate("/")} css={styles.logo}>
        <Text size="32px" weight="normal">
          Access
        </Text>
      </div>
      <button
        css={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav css={[styles.nav, isMenuOpen && styles.navOpen]}>
        <ul css={styles.menu}>
          {menuItems.map((item) => (
            <li key={item?.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                css={styles.menuItem}
                onClick={() => setIsMenuOpen(false)}
              >
                <Text size="16px" weight="normal">
                  {item?.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
