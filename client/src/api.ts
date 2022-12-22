
// Get
export async function getHmaxByCoordsHandler(_lng: any, _lat: any) {
  await fetch("/hmax/${lng}/${lat}", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
