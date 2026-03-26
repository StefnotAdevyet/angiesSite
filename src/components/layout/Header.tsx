import { NavLink } from "react-router-dom";
import { Container } from "../ui/Container";
import { useAuth } from "../../features/auth/useAuth";

type NavLinkClassNameProps = {
    isActive: boolean;
};

export function Header() {
    const { isAuthenticated } = useAuth();

    const getNavLinkClassName = ({ isActive }: NavLinkClassNameProps) =>
        isActive ? "nav-link nav-link-active" : "nav-link";

    return (
        <header className="site-header">
            <Container className="header-content">
                <NavLink to="/" className="site-title">
                    My Website
                </NavLink>

                <nav aria-label="Primary navigation">
                    <ul className="nav-list">
                        <li>
                            <NavLink to="/" end className={getNavLinkClassName}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={getNavLinkClassName}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={getNavLinkClassName}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/premium" className={getNavLinkClassName}>
                                Premium
                            </NavLink>
                        </li>
                        {isAuthenticated ? (
                            <li>
                                <NavLink to="/account" className={getNavLinkClassName}>
                                    Account
                                </NavLink>
                            </li>
                        ) : (
                            <li>
                                <NavLink to="/login" className={getNavLinkClassName}>
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}