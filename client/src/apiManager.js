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
};

export const CreateNewDog = async (dogObj) => {
  const res = await fetch(`/api/dogs`, {
    method:"POST", 
    headers:{"Content-Type":"application/json",}, 
    body: JSON.stringify(dogObj),
  })
  .then((res) => res.json());
  return res
};

export const RemoveDogById = async (dogId) => {
  return fetch(`/api/dogs/${dogId}`, { method: "DELETE" });
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
  return res
};

export const getWalkerCity = async () => {
  const res = await fetch("/api/walkerCities");
  return res.json();
};

export const getAllWalkers = async () => {
  const res = await fetch("/api/walkers");
  return res.json();
};

export const getWalkerById = async (id) => {
  const res = await fetch(`/api/walkers/${id}`);
  return res.json();
};

export const RemoveWalkerById = async (walkerId) => {
  return fetch(`/api/walkers/${walkerId}`, { method: "DELETE" });
}

export const AssignDogToWalker = async (dogId, updatedDogObj) => {
  const res = await fetch(`/api/dogs/${dogId}`,{
  method: "PUT",
  headers: {"Content-Type":"application/json",},
  body: JSON.stringify(updatedDogObj)});
};

export const editWalkerById = async (walkerId, updatedWalkerObj) => {
  const res = await fetch(`/api/walkers/${walkerId}`, {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(updatedWalkerObj)
  });
};