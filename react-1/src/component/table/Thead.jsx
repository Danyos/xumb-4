import Th from "./Th";

export default function Thead({info}) {

    return(
        <thead>
            <tr>
                <Th info={info} />
            </tr>
        </thead>
    )
}