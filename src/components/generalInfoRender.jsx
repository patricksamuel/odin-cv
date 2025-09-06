export default function GeneralInfoRender({generalInfo}){

    let separator = '|'
    if (generalInfo.email === '') {
        separator = '';
    }
    return(
        <>
            <h1> {generalInfo.firstName} {generalInfo.lastName} </h1>
            <h2> {generalInfo.address} </h2>
            <h2> {generalInfo.email} {separator} {generalInfo.phoneNumber} </h2>
        </>

    )
}