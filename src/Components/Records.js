import { useState, useEffect } from "react";
import Display from "./Display";
function Records(){
    let [datas,setDatas] = useState([]);

    async function getAllRecords(pgno){
        var n=pgno;
        var url = "";

        if(n==1){
            url = "https://dummyjson.com/products?limit=10&skip=0";
        }
        else if(n==2){
            url = "https://dummyjson.com/products?limit=10&skip=10";
        }
        else if(n==2){
            url = "https://dummyjson.com/products?limit=10&skip=20";
        }
        console.log(url);
        var result = await fetch(url);
        var out = await result.json();
        setDatas(out.products);
        console.log(datas);
    }

    function funClick(event){
        event.preventDefault();
        if(event.currentTarget.textContent==2){
            getAllRecords(2)
        }
        else if(event.currentTarget.textContent==3){
            getAllRecords(3);
        }
    }
    useEffect(()=>{ 
        getAllRecords(1);
    },[])
    return(
        <>
        <Display data={datas}/>
        <ul type="none">
            <li>
                <a href="" onClick={funClick}>2</a>
            </li>
            <li>
                <a href="" onClick={{funClick}}>3</a>
            </li>
        </ul>
        </>
    )
}
export default Records;