q = console.log;
q("sacsd");

fetch(
  "http://api.chartlyrics.com/apiv1.asmx/SearchLyric?artist=michael%20jackson&song=bad",
  { mode: "no-cors" }
)
  .then((res, err) => {
    // res.blob().then((data) => {
    //   q(data);
    // });
    // res.json().then((data) => {
    //   q(data);
    // });
    q(res);
  })
  .catch((err) => {
    q(err);
  });

// let response = new XMLHttpRequest(
//   "http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=dark%20side%20of%20the%20moon"
// );

// let r2 = new XMLHttpRequest(
//   "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=Pink%20Floyd&song=Eclipse"
// );

// let r3 = new XMLHttpRequest(
//   "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=Pink%20Floyd&song=Eclipse"
// );

// const url =
//   "http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=Pink%20Floyd&song=Eclipse"; //A local page

// function load(url, callback) {
//   const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       callback(xhr.response);
//     }
//   };

//   xhr.open("GET", url, true);
//   xhr.send("");
// }

// load(url, q);

let x = new XMLHttpRequest();
x.open(
  "GET",
  "http://api.chartlyrics.com/apiv1.asmx/SearchLyric?artist=michael%20jackson&song=bad",
  true
);
x.onreadystatechange = function () {
  if (x.readyState == 4 && x.status == 200) {
    let doc = x.responseXML;
    // …
    q("ok!");
  }
};
// x.send(null);
