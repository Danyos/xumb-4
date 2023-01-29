import Thead from "../component/table/Thead";
import Tbody from "../component/table/Tbody/Tbody";

export default function Table() {
    let info = [
        {
            id:1,
            name:"valod",
            surname:"karapetyan",
            age:25
        },
        {
            id:2,
            name:"Gaspar",
            surname:"karapetyan",
            age:25
        },
        {
            id:3,
            name:"Muxi",
            surname:"karapetyan",
            age:25
        },

    ]
    return (
        <>
            <table>
                <Thead info={info}/>
                <Tbody info={info}/>
            </table>

        </>
    )
}