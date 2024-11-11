import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    const title = "Hola, Soy Goku";
    const subTitle = 12;

    test('debe de hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title="Hola soy german" subTitle={12} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();        
    });

    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subTitle={subTitle} />);

        expect(screen.getAllByText(subTitle).length).toBe(1);
    });
});