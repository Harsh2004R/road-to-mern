import { memo } from "react";
const heavyTask = (delay) => {
    let start = Date.now();
    while (Date.now() - start < delay) {
        continue;
    }
}
export const D8TodoItems = memo(({ id, title, status }) => {
    heavyTask(200)
    return (
        <div>
            <h5> List of Todo's </h5>
            <h4 >Title: {id}</h4>
            <h4 >Title: {title}</h4>
            <h4 style={{ color: status ? "blue" : "red" }}>Title: {status === false ? "Not completed" : "completed"}</h4>
        </div>
    )
})


