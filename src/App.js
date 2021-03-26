import logo from './logo.svg';
import './App.css';
import Carousel from './components/CarouselComponent';
import Menu from './components/menu/MenuComponent';
import Tabs from './components/tabs/TabsComponent';

function App(props) {
  return (
<div className="app" style={{ maxWidth: 480, marginLeft: 'auto', marginRight: 'auto'}}>
            <header>
              <div className="logo">
                Logo
              </div>
              <div className="icon-box">
                <span><box-icon name='search' ></box-icon></span>
                <span><box-icon name='bell'></box-icon></span>
              </div>
            </header>
            <Carousel/>
            <Tabs/>
        </div>
  );
}

export default App;
