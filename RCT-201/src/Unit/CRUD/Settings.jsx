import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, } from "react-router-dom"
import { patchProduct } from "../../Redux/Redux_CRUD/Products/action"
function Settings() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((store) => store.ProductReducer.product)
    const singleProduct = product.find((el) => el.id == id);
    const [price, setPrice] = useState("")

    useEffect(() => {
        if (singleProduct) {
            setPrice(singleProduct.price);
        }
    }, [singleProduct])
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handlePatchReq = () => {
        dispatch(patchProduct(id, { price }))
        // .then((res) => {
        //     location.reload()
        // })
    }
    return (
        <div>
            <h1>Settings</h1>
            <p>Product id : {id}</p>
            <input placeholder="edit price" type='number' onChange={handlePrice} value={price} />
            <button onClick={handlePatchReq} >Make Patch Req</button>
        </div>
    )
}

export default Settings
