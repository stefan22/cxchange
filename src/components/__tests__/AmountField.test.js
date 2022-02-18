import { render, screen } from "@testing-library/react";
import CXchange from "../CXchange"
import AmountField from "../AmountField"

test("renders title", () => {
    render(<CXchange />);
    const linkEle = screen.getByText(/Exchange Rates/i);
    expect(linkEle).toBeInTheDocument();;
})

test("displays input label of 'Amount'", () => {
    render(<AmountField />);
    const inputLabel = screen.getByLabelText(/Amount:/i);
    expect(inputLabel).toBeInTheDocument();
})