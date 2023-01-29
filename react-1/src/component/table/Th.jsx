export default function Th({info}) {
    const thInfo=Object.keys(info[0])

    return(
     <>
         {
             thInfo.map((res,i)=>(
                 <th key={i}>{res}</th>
             ))
         }
     </>


    )
}