
import ReactDOM from 'react-dom/client';
import App from './App';
import "./sass/app.scss";
import Login from './Components/Login';
import List from './Components/List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <List/>
    <Login />
    </>
);
