const apiKey ="6bb6aaece5894fd1804264030171e109";
const pageSize = 10;

function fetchNews () {
    const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayNews(data.articles);
    })
    .catch((error) => console.log(error));
}

function displayNews(articles) {
    console.log(articles);
    const newsList = document.querySelector(".news-list");
    newsList.innerHTML = "";
    articles.forEach(article => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="info">
        <div class="author">
        <span>Author:</span>${article.author || "Unknown"}</div>
        <div class="published-at">
        ${new Date(article.publishedAt).toDateString()}</div>
        </div>
        <img src="${article.urlToImage}" alt="${article.title}">
            <a class="title" href="${article.url}" target="_blank">${article.title}</a>
            <p class="description">${article.description || "No Description"}</p>
            <div class="source">
                <span>Source:</span>${article.source.name || "Unknown"}
            </div>
            `;
            newsList.appendChild(listItem);
    });
}

window.onload = fetchNews;