export const saveUserMongodb = (name, email) => {
  console.log(name, email);
  const user = { name, email };
  fetch("https://server-doctor.vercel.app/users", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
