import { NavLink } from "react-router-dom";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="site-header">
      <Container className="site-header-inner">
        <NavLink to="/" className="brand-mark">
          EDEN
        </NavLink>

        <nav className="site-nav" aria-label="Navigation principale">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/faith"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Faith
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}
