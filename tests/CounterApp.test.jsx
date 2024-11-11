import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => {
    const value = 12;

    test('debe de hacer match con el snapshot', () => {
        //Renderizamos el componente. container viene de render
        const {container} = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor de 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText('100')).toBeTruthy(); 

        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');        
    });

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        //screen.getByRole('button', {name: '+1'}).click();

        expect(screen.getByText(13)).toBeTruthy(); 
    });


    test('debe de incrementar con el boton -1', () => {
        render(<CounterApp value={value} />);
 
        fireEvent.click(screen.getByText('-1'));
        //screen.getByRole('button', {name: '+1'}).click();
        expect(screen.getByText(11)).toBeTruthy(); 
    });

    test('debe funcionar el boton de reset', () => {
        render(<CounterApp value={value} />);
 
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));

        //screen.getByRole('button', {name: 'Reset'}).click();
        expect(screen.getByText(12)).toBeTruthy(); 
    });
});