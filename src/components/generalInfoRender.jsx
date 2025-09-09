import { useState } from "react";

export default function GeneralInfoRender({generalInfo}){

    const separator = generalInfo.email !== '' && generalInfo.phoneNumber !== '' ? ' | ' : '';
    return(
        <>
            <h1> {generalInfo.firstName} {generalInfo.lastName} </h1>
            <h2> {generalInfo.address} </h2>
            <h2> {generalInfo.email} {separator} {generalInfo.phoneNumber} </h2>
        </>

    )
}