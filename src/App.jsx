import logo from './logo.svg';
import './App.css';
import { TopNav } from './components/topnav/TopNav';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <TopNav/>
      <Sidebar/>
    </div>
  );
}
export default App;
