//fetch news data from external news API
export async function fetchNewsData(url: string): Promise<any>  {
  const res = await fetch(url);
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json;
}

//translate data with GAS 
export async function translate(val: string): Promise<any>  {
  const url: string =
    "https://script.google.com/macros/s/AKfycbwU5e5UHNNnm9Wa0L9hjKf6_E-5kCkOXDqNteM-3ATM4tTDjTA/exec";

  const res = await fetch(url, {
    method: "POST",
    body: val,
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch GAS Transrate");
  }

  return json;
}

//minimize length of article for using GAS
function adjustLength(val: [], num: Number): [] {
  const ary: [] = [];

  for (let i = 0; i < num; i++) {
    ary.push(val[i]);
  }

  return ary;
}
