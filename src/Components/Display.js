
function Display(props){
    let datas = props.data;

    return(
        <>
        <table border="2px">
            <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Price</td>
            <td>Image</td>
            </tr>
            {
                datas.map((x)=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <td>{x.price}</td>
                        <td><img src={x.thumbnail}></img></td>
                    </tr>
                ))
            }
        </table>
        </>
    )
}
export default Display;