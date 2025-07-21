import { useState } from "react"


function FormsHandeling() {
    let formObj = {
        name: "",
        address: "",
        password: "",
        region: "",
        otp: ""
    }
    const [form, setForm] = useState(formObj)
    const [show, setSHow] = useState(false);


    const handleForm = (e) => {
        e.preventDefault();
        console.log(form)
        setSHow((prev) => !prev)
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    return (
        <>
            <h1>Registation form</h1>
            <form onSubmit={handleForm}>

                <label>User Name: </label>
                <input placeholder="your name" name="name" onChange={handleChange} />
                <br />
                <br />
                <label>Address:  </label>
                <input placeholder="Add your address" name="address" onChange={handleChange} />
                <br />
                <br />
                <label>Password:  </label>
                <input type="password" placeholder="password" name="password" onChange={handleChange} />
                <br />
                <br />
                <label>Region:  </label>
                <input placeholder="Your country name" name="region" onChange={handleChange} />
                <br />
                <br />
                <label>otp:  </label>
                <input type="number" placeholder="otp" name="otp" onChange={handleChange} />

                <input type="submit" value="Register" />
            </form>

            {
                show && <div style={{marginTop:"20px",color:"skyblue" ,border:"1px solid #DADADA"}}>
                    <p>
                        Name: {form.name}
                    </p>
                    <p>
                        Address:  {form.address}
                    </p>

                    <p>
                        Region:  {form.region}
                    </p>
                    <p>
                        OTP: {form.otp}
                    </p>
                </div>
            }
        </>
    )
}

export default FormsHandeling
