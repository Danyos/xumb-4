export default function Product({title,img,desc}){
    return(
      <>
          <h1>{title}</h1>
          <p>{desc}</p>
          {
              img&&<img src={img} width="100px"/>
          }
      </>
    )
}