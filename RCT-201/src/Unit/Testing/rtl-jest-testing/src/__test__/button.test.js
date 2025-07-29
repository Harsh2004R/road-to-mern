// import { render, screen } from "@testing-library/react";
// import App from "../App"

// describe("Testing Button component", () => {
//     it("button should render", () => {
//         render(<App />);
//         const button = screen.getByTestId("custom-button")
//         expect(button).toBeInTheDocument();

//     })
//     it("checking if the parameters are getting passed", () => {
//         render(<App />);
//         const button = screen.getByTestId("custom-button")
//         expect(button).toBeInTheDocument("Click");
//     })

// })


import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing Button component", () => {
    it("button should render", () => {
        render(<App />);
        const button = screen.getByTestId("custom-button");
        expect(button).toBeInTheDocument();
    });

    it("checking if the parameters are getting passed", () => {
        render(<App />);
        const button = screen.getByTestId("custom-button");
        expect(button).toHaveTextContent("Click");
    });
});



