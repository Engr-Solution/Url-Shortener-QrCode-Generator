import Nav from "./component/Nav";
import Qrcode from "./component/Qrcode";
import Urlshorter from "./component/Urlshorter";

function App() {
  return (
    <div>
      <Nav />
      <div className="container row px-5 py-2">
        <div className="row col-12 col-md-6">
          {" "}
          <Urlshorter />
        </div>
        <div className="row col-12 col-md-6">
          <Qrcode />
        </div>
      </div>
    </div>
  );
}

export default App;
