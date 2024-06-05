import { useRef } from "react"

function Addproduct(){

    var idRef = useRef();
    var titleRef = useRef();
    var priceRef = useRef();

    async function funadd(){
        var obj = {
            id:idRef.current.value,
            title:titleRef.current.value,
            price:priceRef.current.value
        }
        console.log(obj);
        var result = await fetch("https://dummyjson.com/products/add",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{"Content-Type":"application/json"}
        });
        var out = await result.json();
        console.log(out);
    }
    return(
        <>
        <form>
            Id:<input type="text" ref={idRef}></input><br></br>
            Title:<input type="text" ref={titleRef}></input><br></br>
            Price:<input type="text" ref={priceRef}></input><br></br>
            Image:<input type="file"></input>
            <input type="button" value="insert" onClick={funadd}></input>
        </form>
        </>
    )
}
export default Addproduct