// -------Given by project starter code---
// export const getGreeting = async () => {
//   const res = await fetch("/api/hello");
//   return res.json();
// };

export const getAllDogs = async () => {
  const res = await fetch("/api/dogs");
  return res.json();
};

export const getDogById = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  return res.json();
}

export const getAllCities = async () => {
  const res = await fetch("/api/cities");
  return res.json();
};

export const AddCity = async (cityName) => {
  const res = await fetch(`/api/cities/${cityName}`, {
    method:"POST", 
    headers:{"Content-Type":"application/json",}, 
    body: JSON.stringify(cityName),
  })
  .then((res) => res.json());
  console.log('res', res);
  return res
}