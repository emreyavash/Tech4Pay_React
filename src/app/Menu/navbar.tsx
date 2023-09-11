import "./menu.css"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  mt-4 navbarContainer" >
      <div className="container ">
        <div className="row navbar-collapse">
          <div className="col-4 "> <a className="navbar-brand" style={{color:"#203562"}}>   Müşteriler{'>'}</a></div>
          
          <div className="col-8 " >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-end justify-content-end">
                
                <li className="nav-item "><a className="nav-link" style={{color:"#203562"}}>Çıkış Yap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
