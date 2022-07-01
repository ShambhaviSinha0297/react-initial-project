import React from "react";
import Counter from "../Counter";
import App from "../../App";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct test", () => {
    const component = render(<Counter />);
    const headerEl = component.getByTestId("header");
    expect(headerEl.textContent).toBe("My Counter");
})

// test("header renders with correct test", () =>{
//     const {getByTestId} = render(<Counter/>);
//     const headerEl= getByTestId("header");  
//     expect(headerEl.textContent).toBe("My Counter");
// })

test("Counter initially start with text 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
})

test("Input contains an initial value of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");
    expect(inputEl.value).toBe("1");
})

test("add button renders with '+'", () => {
    const { getByTestId } = render(<Counter />);
    const addbtn = getByTestId("addBtn");
    expect(addbtn.textContent).toBe("+");
})

test("subtract button renders with '-'", () => {
    const { getByTestId } = render(<Counter />);
    const subtractbtn = getByTestId("subBtn");
    expect(subtractbtn.textContent).toBe("-");
})

test("changing value of input works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const inputEl = getByTestId("input")
    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
    })
    expect(inputEl.value).toBe("5")

})

test("clicking on '+' adds 1 to counter value", () => {
    const { getByTestId } = render(<Counter />)
    const btnEl = getByTestId("addBtn")
    const counterEl = getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
    fireEvent.click(btnEl);

    expect(counterEl.textContent).toBe("1")

})

test("clicking on '-' subtracts 1 from the counter value", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtnEl = getByTestId("subBtn")
    const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")
    fireEvent.click(subtractBtnEl)
    expect(counterEl.textContent).toBe("-1")

})

