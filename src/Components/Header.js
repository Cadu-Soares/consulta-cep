import React, {useState, useEffect} from 'react';
import '../Styles/Header.css'

const Header = () =>{
  
  const [showMenu, setShowMenu] = useState(false)
  const [display, setDisplay] = useState('0px')
  
  useEffect(() => {
    setDisplay((state) => showMenu ? '0px' : '200px');
  }, [showMenu]);

  
  // const showMenu = () => {
  //     let menuArea = document.querySelector(".menu-area");

  //     if(menuArea.style.width === '200px' ) {
  //       menuArea.style.width = '0px'
  //     } else {
  //       menuArea.style.width = '200px'
  //     }
  //   }

  return (
      <>
          <div className='menu'>
            <a className='hamburger-toggle' onClick={ e => setShowMenu(state => !state)}>
            </a>
          </div>
          <aside  className="menu-area" style={{width:display}} >
          <ul>
            <li>Voltar ao menu</li>
            <li>CLique e Retire</li>
            <li>Locker</li>
            <li>Agência Modular</li>
            <li>Veja Também</li>
          </ul>
          </aside>
      </>
    )
  }

export default Header;