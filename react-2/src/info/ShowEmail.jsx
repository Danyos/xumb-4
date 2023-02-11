
import Context from "../Context";

export default function ShowEmail(){


    return (
        <>
            <Context.Consumer>
                {
                    (value)=>(
                        <>
                            <h2>{value&&value.email}</h2>
                            <h2>{value&&value.website}</h2>
                        </>

                    )
                }
            </Context.Consumer>

        </>
    )
}