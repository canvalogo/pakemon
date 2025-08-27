const pokemons = [
  { id: "001", name: "Bulbasaur", type: "Grass Poison", weight: "6.9 kg", candy: 25, time: "20:00", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { id: "002", name: "Ivysaur", type: "Grass Poison", weight: "13.0 kg", candy: 100, time: "07:00", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
  { id: "003", name: "Venusaur", type: "Grass Poison", weight: "100.0 kg", candy: "undefined", time: "11:30", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
  { id: "004", name: "Charmander", type: "Fire", weight: "8.5 kg", candy: 25, time: "08:45", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  { id: "005", name: "Charmeleon", type: "Fire", weight: "19.0 kg", candy: 100, time: "19:00", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" }
];

const container = document.getElementById("cardContainer");

function displayPokemons(list) {
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <div class="id">${p.id}</div>
        <h3>${p.name}</h3>
        <img src="${p.img}" alt="${p.name}">
        <p>${p.type}</p>
        <p>Candy count: ${p.candy}</p>
        <p>${p.weight}</p>
        <div class="time">${p.time}</div>
      </div>
    `;
  });
}

displayPokemons(pokemons);
