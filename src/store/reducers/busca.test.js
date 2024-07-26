import buscaReducer, {mudarBusca, resetarBusca} from './busca';

describe('Testando buscar reducer', () => {
    test('Deve mudar busca como esperado', () => {
        expect(buscaReducer('', mudarBusca('teste'))).toEqual('Teste');
    })
    test('Deve resetar busca como esperado', () => {
        expect(buscaReducer('outro valor', resetarBusca())).toEqual('');
    })
})