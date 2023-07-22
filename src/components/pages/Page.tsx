import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: Array<PagesType>
}
export const Page = (props: PropsType) => {
    const params = useParams()
    let element: any = Number(params.id)


    return (
        <div>
            {props.pages[element]
                ? <>
                    <div>{props.pages[element].heading}</div>
                    <div>{props.pages[element].about}</div>
                </>
                : <Error404/> }
        </div>
    );
};

