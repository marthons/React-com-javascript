import styles from './Favoritos.module.css';
import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';
import Card from 'componentes/Card';
import { useFavoritoContext } from 'contexto/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;