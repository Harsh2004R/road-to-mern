import Button from "./Button"

function Props() {
    const handleButton1 = () => {
        alert("hello button is clicked ")
    }
    const handleButton2 = () => {
        alert("Bye button is clicked ")
    }

    const data = [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ]

    let renderData = data.map((el, key) => (
        <div key={key} style={{ border: "1px solid #DADADA", width: "200px", height: "300px" }}>
            <img style={{ width: "100px", height: "100px" }} src={el.avatar} alt={el.id}>

            </img>
            <text> {el.email}</text>
            <text> {el.first_name}</text>
            <text> {el.last_name}</text>
        </div>
    ))
    return (
        <>
            <Button click={handleButton1} color={"blue"} btnText={"hello"}></Button>
            <Button click={handleButton2} color={"red"} btnText={"bye"}></Button>

            {renderData}
        </>
    )
}

export default Props
