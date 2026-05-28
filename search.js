const documents = [
  { id: 1, content: "Light Novels", url: "https://archive.org/details/the-apothecary-diaries-light-novel-series/The%20Apothecary%20Diaries_%20Volume%201/" },
  { id: 2, content: "AD Anime", url: "https://kissanime.com.ru/Search/?s=apothecary%20diaries" },
  { id: 3, content: "BB Manga", url: "https://ww1.black-butler.net/manga/kuroshitsuji-2-chapter-1/" },
  { id: 4, content: "BB Anime", url: "https://kissanime.com.ru/Search/?s=black%20butler" },
  { id: 5, content: "Doctor Who", url: "https://freecouchtuner.com/search/doctor+who/series" },
];

function performSearch() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const results = search(query);
  displayResults(results);
}

function search(query) {
  return documents.filter(doc => doc.content.toLowerCase().includes(query));
}

function displayResults(results) {
  const resultsElement = document.getElementById("results");
  resultsElement.innerHTML = "";

  results.forEach(result => {
    const listItem = document.createElement("li");
    
    // 1. Create the anchor link element
    const link = document.createElement("a");
    
    // 2. Set the destination URL and link text
    link.href = result.url;
    link.textContent = result.content;
    
    // 3. Optional: Open link in a new tab
    link.target = "_blank"; 
    
    // 4. Put the link inside the list item, and the list item into the list
    listItem.appendChild(link);
    resultsElement.appendChild(listItem);
  });
}