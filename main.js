// theme functions starting 

const changeTheme = () => {
    const theme = document.getElementById('theme');
    theme.classList.toggle('black');
}

const button = document.getElementById('theme');
button.addEventListener('click', changeTheme)

//theme functions end


//for header
const headers = [
    {
        id: 1,
        name: 'Home',
    },
    {
        id: 2,
        name: 'About',
    },
    {
        id: 3,
        name: 'Contact',
    },
    {
        id: 4,
        name: 'Login',
    }
]

const showHeader = () => {
    const headerDiv = document.getElementById('header');
    for (const header of headers) {
        const headerItem = document.createElement('div');
        headerItem.classList.add('header-item')
        headerItem.innerHTML = `<h6> ${header.name}</h6>`
        headerDiv.appendChild(headerItem);
    }
}
showHeader();
// header end

//main section start
const hitApi = () => {
    const url = 'https://fakestoreapi.com/products'
    fetch(url)
        .then(response => response.json())
        .then(data => showData(data))
}

const showData = (data) => {
    console.log(data);
    const mainDiv = document.getElementById('main');
    for (const product of data) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item')
        productDiv.innerHTML = `
        <img src="${product.image}" alt="">
        <h6>${product.title}</h6>
        <h6>${product.price}</h6>
        <a href="#details"><button onclick = "handleDetails(${product.id})">Details</button> </a>
        <button class='cart'>Add to Cart</button>
        `
        mainDiv.appendChild(productDiv);
    }

}

hitApi();
//main section end


//details section start
const handleDetails = (id) => {
    console.log(id)
    const url = `https://fakestoreapi.com/products/${id}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = `
            <img src="${data.image}" alt="">
            <h6>${data.title}</h6>
            <h6>${data.price}</h6>
            <p>${data.rating.rate}</p>
            <p>${data.description}</p>
            `
        })

}
//details section end
