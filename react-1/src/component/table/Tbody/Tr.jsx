export default function Tr({info}) {
    let infoKey=Object.values(info)

    return (

        <tr>
            {
                infoKey.map((res,i)=>(
                    <td key={i}>{res}</td>
                ))
            }

        </tr>

    )
}