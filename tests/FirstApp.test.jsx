import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    /*
    test("debe de hacer el match con el snapshot", () => {
        const {container} = render(<FirstApp title="Hola soy german" subTitle={12} />);
        expect(container).toMatchSnapshot();
    });

    test("debe de mostrar el titulo en h1", () => {
        const title = "Hola soy german";
        const {container,getByText, getByTestId} = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain(title)
        console.log(getByTestId('test-title').innerHTML)
        expect(getByTestId('test-title').innerHTML).toContain(title);
        
    });
    */
    test("debe de mostrar el subtitulo enviado por prop", () => {
        const subTitle = 12;
        const {container,getByText} = render(<FirstApp title="Hola soy german" subTitle={subTitle} />);
        expect(getByText(subTitle)).toBeTruthy();
    });
});