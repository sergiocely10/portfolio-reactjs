import profilePicture from './assets/img/img-profile.jpg'

function Header() {
    return (
      <>
        <header className='header'>
            <div className="header_img_profile">
                <a className="logo" href="#">
                    <picture>
                        <img width="130"  src={profilePicture} alt="Profile picture" />
                    </picture>
                </a>
            </div>

            <div className="header_menu">
                <a className="logo" href="#">
                    <span className="logo_text">
                        Sergio Cely
                    </span>
                </a>
                <nav className="menu">
                    <a className="menu_item menu_item_project" href="#projects">Projects</a>
                    <a className="menu_item menu_item_contact" href="#contact">Contact</a>
                </nav>
            </div>


        </header>
      </>
    )
  }
  
export default Header
  