var VIDEOS = [
  { title: "CRYZTXL Locomotion", note: "The official CRYZTXL locomotion made by CRYZTXL Studios", url: "https://youtu.be/OQJNafIL4eY", by: "Tutorial By: Marzo" },
  { title: "Wardrobe Plus", note: "The best wardrobe available.", url: "https://youtu.be/zd5LVHqXfvo?si=7FV9EL-yhleZ5UaK", by: "Tutorial By: Beeps" },
  { title: "ButtonsPlus", note: "First CRYZTXL Studios project and an original idea from the owner, aka Marzo.", url: "https://youtu.be/TokPp34Hs9I?si=qEFP1WdrJzB7iMUe", by: "Tutorial By: Marzo" }
];

var grid = document.getElementById("videoGrid");
VIDEOS.forEach(function (v) {
  var a = document.createElement("a");
  a.className = "video"; a.href = v.url; a.target = "_blank"; a.rel = "noopener noreferrer";
  var t = document.createElement("div"); t.className = "thumb";
  var i = document.createElement("div"); i.className = "info";
  var s = document.createElement("strong"); s.textContent = v.title;
  var n = document.createElement("span"); n.textContent = v.note;
  i.appendChild(s); i.appendChild(n);
  if (v.by) { var b = document.createElement("span"); b.className = "by"; b.textContent = v.by; i.appendChild(b); }
  a.appendChild(t); a.appendChild(i); grid.appendChild(a);
});

var q = document.getElementById("scriptSearch"), none = document.getElementById("noResults");
q.addEventListener("input", function () {
  var t = q.value.trim().toLowerCase(), shown = 0;
  document.querySelectorAll(".dl").forEach(function (c) {
    var m = c.textContent.toLowerCase().indexOf(t) !== -1;
    c.style.display = m ? "" : "none";
    if (m) shown++;
  });
  none.style.display = shown ? "none" : "block";
});

var vq = document.getElementById("videoSearch"), vnone = document.getElementById("noVideoResults");
vq.addEventListener("input", function () {
  var t = vq.value.trim().toLowerCase(), shown = 0;
  grid.querySelectorAll(".video").forEach(function (c) {
    var m = c.textContent.toLowerCase().indexOf(t) !== -1;
    c.style.display = m ? "" : "none";
    if (m) shown++;
  });
  vnone.style.display = shown ? "none" : "block";
});

document.getElementById("yr").textContent = new Date().getFullYear();