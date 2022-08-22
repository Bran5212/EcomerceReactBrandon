// eslint-disable-next-line
import navbar from '../Nav/navbar';
import estilos from './header.module.css'

const Header = () => {
    return(
        <header className={estilos.contenedorMain}>
            <navbar />
        </header>
    )
}

export default Header;