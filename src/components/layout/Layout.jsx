import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";

import clsx from 'clsx';
import css from './Layout.module.css';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <header>
                <nav className={clsx(css.nav)}>
                    <NavLink
                        className={location.pathname !== "/"
                            ? clsx(css.btn)
                            : clsx(css["btn-current"])}
                        to="/">
                        Home
                    </NavLink>
                    <NavLink
                        className={location.pathname === "/"
                            ? clsx(css.btn)
                            : clsx(css["btn-current"])}
                        to="/movies">
                        Movies
                    </NavLink>
                </nav>
            </header>
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default Layout;