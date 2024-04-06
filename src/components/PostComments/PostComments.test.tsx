import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

describe('testes para verificar a inserção de dois comentarios', () => {
    test('Comentario 1', () =>{
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comentario'),{
            target:{
                value: 'Show de Bola!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Show de Bola!')).toBeInTheDocument()
    })
    test('Comentario 2', () =>{
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('campo-comentario'),{
            target:{
                value: 'Muito Legal!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        expect(screen.getByText('Muito Legal!')).toBeInTheDocument()
    })
})