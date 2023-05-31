let tabl = document.querySelector('.main');
let details = [
   {
    id: 1,
    name: 'Tulip',
    price: 'R390.00',
    image: 'https://i.postimg.cc/fWcMz8Qk/catia-climovich-Z-6bfsa6r-D8-unsplash.jpg'
   },
   {
    id: 2,
    name: 'Rose',
    price: 'R320.00',
    image: 'https://i.postimg.cc/7PMB9W23/annie-spratt-f-Dgh-Tk7-Typw-unsplash.jpg'
   },
   {
    id: 3,
    name: 'Sunflower',
    price: 'R110.00',
    image: 'https://i.postimg.cc/1zBtJPyx/aaron-burden-2-Izo-IHBg-YAo-unsplash.jpg'
   },
   {
    id: 4,
    name: 'Pom Pom flowers',
    price: 'R300.00',
    image: 'https://i.postimg.cc/50M0m3Hr/nicole-keller-XVfd-BK1-g-OM-unsplash.jpg'
   },
   {
    id: 5,
    name: 'Lily',
    price: 'R240.00',
    image: 'https://i.postimg.cc/sDFrGXhn/matt-0-KLPr-QNEn-Q4-unsplash.jpg'
   },
]
details.forEach((data) => {
    tabl.innerHTML += `
    <tr>
    <th>${data.name}</th>
    <th>${data.price}</th>
    <th><img src="${data.image}" style="height:100px"/></th>
    <th><button>Add</button></th>
    <th><button>Delete</button></th>
    </tr>`
})