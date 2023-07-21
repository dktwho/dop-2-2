import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";

type PropsType = {
    pages: Array<PagesType>
}
export const Page = (props:PropsType ) => {
    const params = useParams()
    let element = Number(params.id)



    return (
        <div>
            <div>{props.pages[element].heading}</div>
            <div>{props.pages[element].about}</div>
        </div>
    );
};

