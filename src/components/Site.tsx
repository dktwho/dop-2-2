import React from 'react';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {Route, Routes} from "react-router-dom";

export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    1234
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/PageOne'} element={<PageOne/>}/>
                        <Route path={'/PageTwo'} element={<PageTwo/>}/>
                        <Route path={'/PageThree'} element={<PageThree/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

