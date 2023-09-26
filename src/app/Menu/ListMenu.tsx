import "./menu.css"

export default function ListMenu() {
  return (
    <div className="firstNav">
        <div className="secondNav">
            <div className="navbarBrand">
                <a className="navBrandText" >Abp Customer App</a>
            </div>
            <div className="navbarNav">
                <ul className="navbarUl">
                    <li className="navbarItem"><a href="/Musteri">Müşteriler</a></li>
                    <li className="navbarItem"><a href="/Profil">Profilim</a></li>
                    <li className="navbarItem"><a href="/Harcamalar">Harcamalar</a></li>
                    <li className="navbarItem"><a href="/Musteri">İletişim Bilgileri</a></li>
                </ul>
            </div>
            <div className="userContainer">
                <div className="userDiv">
                    <div className="userImageDiv">
                        <img src="https://xsgames.co/randomusers/assets/avatars/male/66.jpg" alt="" className="userImage"/>
                    </div>
                    <div className="userNameDiv">
                       <p className="userName">Emre Yavaş</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
