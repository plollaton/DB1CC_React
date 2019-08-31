import testRenderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';

import Titulo from './Titulo';

describe('Shallow tests', () => {
    test('Testa se o componente é um h1.', () => {
        const component = shallow(<Titulo>Meu título</Titulo>);
        const element = component.getElement();
        expect(element.type).toBe('h1');
    });
    test('Testa a cor do texto.', () => {
        const component = shallow(<Titulo textColor='green'>Meu título</Titulo>);
        const styleColor = component.props().style.color;
        expect(styleColor).toBe('green');
    });
    test('Testa o texto da saida do componente.', () => {
        const component = shallow(<Titulo>Meu título</Titulo>);
        const texto = component.text();
        expect(texto).toBe('Meu título');
    });
});

describe('Snapshot tests', () => {
    test('Testa se o componente renderiza de acordo com a snapshot',
        () => {
            const tree = testRenderer.create(<Titulo>Meu Titulo</Titulo>).toJSON();
            expect(tree).toMatchSnapshot();
        });
});