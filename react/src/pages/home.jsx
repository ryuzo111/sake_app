import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
        </div>
    );
}

export default Home;