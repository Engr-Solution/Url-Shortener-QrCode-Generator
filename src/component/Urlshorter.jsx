import React, { useState } from "react";
import axios from 'axios'

function Urlshorter() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = () => {
    // let data = { longUrl: url };
    axios
      .post("http://localhost:5000/api/url/shorten", {
        longUrl: url,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form>
        <label htmlFor="url">
          Long url <i className="fa fa-link"></i>
        </label>
        <input
          type="text"
          className="form-control"
          id="url"
          name="url"
          placeholder="https://google.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        {shortUrl ? (
          <div className="output mt-4">
            <label htmlFor="shorturl">
              Short url <i className="fa fa-link"></i>
            </label>
            <span className="d-flex copy">
              <input
                type="text"
                readOnly
                className="form-control"
                id="shorturl"
                value={shortUrl}
              />
              <i className="fa fa-copy"></i>
            </span>
          </div>
        ) : (
          ""
        )}

        {url ? (
          <button
            onClick={() => shortenUrl()}
            className="w-100 btn btn-lg btn-primary mt-4"
          >
            Shorten Url
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Urlshorter;
