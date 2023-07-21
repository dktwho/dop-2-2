import React from 'react';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'/PageOne'} className={({isActive}) => isActive ? styles.active : styles.navLink}>Page
                        1</NavLink></div>
                    <div><NavLink to={'/PageTwo'} className={({isActive}) => isActive ? styles.active : styles.navLink}>Page
                        2</NavLink></div>
                    <div><NavLink to={'/PageThree'}
                                  className={({isActive}) => isActive ? styles.active : styles.navLink}>Page 3</NavLink>
                    </div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/PageOne'}/>}/>
                        <Route path={'/PageOne'} element={<PageOne/>}/>
                        <Route path={'/PageTwo'} element={<PageTwo/>}/>
                        <Route path={'/PageThree'} element={<PageThree/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

