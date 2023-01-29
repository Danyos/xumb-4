import Tr from "./Tr";

export default function Tbody({info}) {

    return (
        <tbody>
        {
            info.map((res)=>(
                <Tr key={res.id} info={res} />
            ))
        }

        </tbody>

    )
}