import Banner from 'componentes/Banner';
import styles from './Player.module.css'
import Titulo from 'componentes/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';
import Container from 'componentes/Container';

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marthons/cinetag-API/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    }, [parametros.id])

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <Container>
                <section className={styles.container}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={video.link}
                        title={video.titulo}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </section>
            </Container>
        </>
    )
}

export default Player;