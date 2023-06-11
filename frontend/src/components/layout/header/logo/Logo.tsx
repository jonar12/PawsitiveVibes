import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
            <img src="./logo.png" alt="Logo"/>
        </Link>
    );
}

export { Logo };