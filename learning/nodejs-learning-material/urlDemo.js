import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL object

const urlObj = new URL(urlString);
console.log(urlObj);

// format -> returns to string
console.log(url.format(urlObj));

// import.meta.url
console.log(import.meta.url);

// fileURLtopath
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search);

console.log(params.get("q")); // to get the search value
params.append("limit", "5");
//params.delete("limit");
console.log(params);
