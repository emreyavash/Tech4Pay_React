import "./customer.css"

export default function Page() {
  return (
    <div className="col-12">
      <div className="customerContainer">
        <div className="customerHeaderDiv">
            <div className="customerSearchBarDiv">
                <input type="text" className="customerSearchBar" placeholder="Müşteri Ara"  />
                <button className="customerSearchBtn">Ara</button>

            </div>
            <div className="customerAddDiv">
             <a href="/Musteri/MusteriEkle" className="customerAdd" >Müşteri Ekle</a>

            </div>
        </div>
        <table id="tableMain">
          <thead className="tableHead">
            <tr className="tableTr">
              <th className="tableHeadText">Ad</th>
              <th className="tableHeadText">Soyad</th>
              <th className="tableHeadText">Email</th>
              <th className="tableHeadText">Telefon Numarası</th>
              <th className="tableHeadText">Adres</th>
              <th className="tableHeadText">Cinsiyet</th>
              <th className="tableHeadText">Düzenle</th>
              <th className="tableHeadText">Sil</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableTr">
              <td>Emre</td>
              <td>Yavaş</td>
              <td>emreyavas67@gmail.com</td>
              <td>05360530299</td>
              <td>Çaymahalle-Bayraklı</td>
              <td>Erkek</td>
              <td><button className="editBtn">Düzenle</button></td>
              <td><button className="deleteBtn">Sil</button></td>
            </tr>
            <tr className="tableTr" >
              <td>Emre</td>
              <td>Yavaş</td>
              <td>emreyavas67@gmail.com</td>
              <td>05360530299</td>
              <td>Çaymahalle-Bayraklı</td>
              <td>Erkek</td>
              <td><button className="editBtn">Düzenle</button></td>
              <td><button className="deleteBtn">Sil</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
