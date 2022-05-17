import React, { useState } from "react";
import QRCode from "qrcode.react";
import Abc from "../asset/abc.png";

function Qrcode() {
  const [url, setUrl] = useState("");
  const [qrlogo, setQrlogo] = useState('');

  const download = () => {
    const canvas = document.querySelector(".qrcode-wrap > canvas");
    const src = canvas.toDataURL("image/png", 1.0);
    const a = document.createElement("a");
    a.setAttribute("href", src);
    a.setAttribute("download", "qrcode.png");
    a.click();
    console.log(canvas, src);
  };

  return (
    <div>
      <form>
        <label htmlFor="url">URL TO QRCODE <i className="fa fa-link color-success"></i></label>
        <input
          type="text"
          className="form-control"
          id="url"
          name="url"
          placeholder="https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <div className="output mt-4">
          <label htmlFor="qrcode-logo">
            QRCODE LOGO <i className="fa fa-avatar"></i> <i className="fa fa-qrcode color-success"></i>
          </label>

          <input
            type="text"
            className="form-control"
            id="qrcode-logo"
            placeholder="https://google.com/img/logo.png"
            value={qrlogo}
            onChange={(e) => setQrlogo(e.target.value)}
          />
        </div>
      </form>

      <div className="qrcode-wrap">
        {url ? (
          <>
            <QRCode
              renderAs={"canvas"}
              value={url}
              size={320}
              bgColor={"#fff"}
              fgColor={"#000"}
              level={"M"}
              includeMargin={true}
              imageSettings={{
                src: `${qrlogo}`,
                x: null,
                y: null,
                height: 24,
                width: 24,
                excavate: true,
              }}
            />
            <button
              onClick={download}
              className="download-btn btn btn-lg btn-primary mt-4"
              type="submit"
            >
              Download Qrcode
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Qrcode;
