import data from './projects.json' assert { type: 'json' };

const container = document.querySelector(".container");

console.log(data);

data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('item');

    const link = document.createElement('a');

    const bg = document.createElement('div');
    bg.style.backgroundColor = item.Color;
    bg.classList.add('bg');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = item.Name;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = item.Description;

    card.appendChild(link);
    link.appendChild(bg);
    link.appendChild(title);
    link.appendChild(description);
    container.appendChild(card);
});