import '../App.css'
export function SubThread({index}){
    return(
        <>
            <div className={"C2-1"}>
                <div className={"sub-thr"}>
                    Sub thread {index}
                </div>
                <textarea className={"text-thr"} placeholder={"Enter Text here"}></textarea>
            </div>
            <div className={"C2-1"}>
                <div className={"sub-thr"}>
                    Sub Interpretation
                </div>
                <textarea className={"text-thr"} placeholder={"Enter Text here"}></textarea>
            </div>
        </>
    )
}