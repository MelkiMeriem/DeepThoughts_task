import '../App.css';

// eslint-disable-next-line react/prop-types
export function Card({details}){
    return(

    <div className={"Card"}>
        <div className={'CardHead'}>
            <span className={'HeadParg'}>
                {details.header}
            </span>
            <img src={"src/assets/Group 1735.png"} className={"icon1"}/>
        </div>
        <div>
            <p className={"Parag"}>
                <span className={"Des"}>Description : </span>
                {details.Description}
            </p>
        </div>
        <div>
            {details.Content}

        </div>
    </div>)

}