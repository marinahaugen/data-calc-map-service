// Legg til try - catch { throw new Error }

// Post
export async function createHmaxHandler(data) {
  await fetch("/hmax", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// Get
export async function getHmaxHandlerByCoords(lng, lat) {
  await fetch("/hmax/${lng}/${lat}", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
