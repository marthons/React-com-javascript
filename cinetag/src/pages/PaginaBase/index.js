import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import FavoritosProvider from "contexto/Favoritos";
import { Outlet } from "react-router-dom";


function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Outlet />
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;