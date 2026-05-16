//#region src/index.js
var e = (e) => e.constructor == Object, t = (t, n, r, i) => {
	let a = document.createElement(t);
	if (r && r.className && a.classList.add(r.className), n && typeof n == "string" && a.classList.add(n), n && Array.isArray(n) && a.classList.add(...n), r && e(r)) for (let e of Object.keys(r)) e != "className" && a.setAttribute(e, r[e]);
	if (r && (Array.isArray(r) || typeof r == "string") && (i = r), i) {
		if (typeof i == "string") {
			let e = document.createElement("span");
			e.innerHTML = i, a.appendChild(e);
		} else if (typeof i == "object" && i.length) for (let e of i) e && typeof e == "object" && a.appendChild(e);
	}
	return a;
}, n = (e, n, r) => t("td", e, n, r), r = (e, n, r) => t("tr", e, n, r), i = (e, n, r) => t("div", e, n, r), a = (e, n, r) => t("span", e, n, r), o = (e, n, r) => t("img", e, n, r), s = (e, n, r) => t("a", e, n, r);
//#endregion
export { s as a, i as div, t as el, o as img, a as span, n as td, r as tr };
