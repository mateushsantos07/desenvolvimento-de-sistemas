import { render, screen } from "@testing-library/react"
import Person from ".";

describe("Componente de Person", () => {
    it("Deve renderizar o componente da person com informações passadas", () => {
    render(<Person nome ="Joe Doe" idade= {20} />);

    const name = screen.queryByText("Joe Doe", {exact: false})
    const idade = screen.queryByText("20", {exact: false})
    
    expect(name).toBeInTheDocument();
    expect(idade).toBeInTheDocument();
    })
})
