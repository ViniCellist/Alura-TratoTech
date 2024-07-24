import mockCategorias from "mocks/categorias";

const categoriasService = {
    buscar: async () => mockCategorias,
    buscarUmaCategoria: () => mockCategorias[0],
  }
  
  export default categoriasService;