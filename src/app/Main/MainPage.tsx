import MainBoxes from "./MainBoxes";
import MainTable from "./MainTable";

export default function MainPage(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <MainBoxes />
                </div>
                <div className="col-12">
                    <MainTable/>
                </div>
            </div>
        </div>
    )
}