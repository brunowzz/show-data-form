function handleForm() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const name = form.querySelector(".name");
  const lastName = form.querySelector(".lastName");
  const weight = form.querySelector(".weight");
  const height = form.querySelector(".height");

  const persons = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: name.value,
      lastName: lastName.value,
      weight: weight.value,
      height: height.value,
    };

    persons.push({ data });

    result.innerHTML += `<p>${data.name} ${data.lastName} ${data.weight} ${data.height}</p>`;
  });
}

handleForm();
