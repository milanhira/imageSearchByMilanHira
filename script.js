const accessKey = 'cQr_GzxVqJjNLbMTXWSVMRUojV8d4ixx9DrxrTBwVeY';

const fromBox = document.getElementById('from-box');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const seeMore = document.getElementById('see-more');

let keyWord = "";
let page = 1;

async function searchImages (){
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=9`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = ''
    }

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink)
    })
    seeMore.style.display = 'block'
    seeMore.style.cursor = 'pointer'

}

fromBox.addEventListener("submit", (e)=>{

     e.preventDefault();
     page =1;
     searchImages();
})
seeMore.addEventListener('click', () => {
    page++;
    searchImages();
})