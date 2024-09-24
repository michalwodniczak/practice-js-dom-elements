console.log('DOM');

const curr = document.querySelector('.js-curr');
console.log(curr);

const newButton = document.createElement("button");
newButton.innerText = "usuń koszyk";
curr.parentNode.appendChild(newButton);

const siblings = Array.from(curr.parentNode.children);
siblings.forEach(sibling => {
    if (sibling !== curr) {
        sibling.classList.add("siblings");
    };
});

const nextArticle = curr.parentNode.nextElementSibling;
if (nextArticle && nextArticle.classList.contains("article")) {
    nextArticle.setAttribute("title", "nextElementSibling");
}

const lastArticle = document.querySelector("article:last-of-type");
const newParagraph = document.createElement("p");
newParagraph.textContent = "To jest nowy paragraf";
const buttonInLastArticle = lastArticle.querySelector("button");
lastArticle.insertBefore(newParagraph, buttonInLastArticle);

const articlesParent = document.querySelector("article").parentNode;
const newArticle = document.createElement('article');
const newArticleContent = document.createElement("p");
newArticleContent.textContent = "Nowy artykuł na początku listy";
newArticle.appendChild(newArticleContent);

articlesParent.insertBefore(newArticle, articlesParent.firstElementChild);
// W pliku `./app.js` znajdziesz zmienną `curr`, która wskazuje na element o klasie `.js-curr`.

// Wykonaj poniższe zadania bez dodatkowych wyszukiwań. Po drzewie DOM możesz poruszać się tylko względem elementu ze zmiennej  `curr`.

// 1.  Utwórz kolejny przycisk, który będzie rodzeństwem (bratem) dla elementu ze zmiennej `curr`. Element ten niech zawiera napis `usuń z koszyka`.
// 2. Do wszystkich elementów, które są rodzeństwem elementu o klasie `.js-curr`, dodaj klasę `.siblings` (wykorzystaj pętlę).
// 3. Do następnego elementu o klasie `.article`, który występuje zaraz po rodzicu elementu o klasie `.js-curr`, dodaj atrybut `title` o wartości `nextElementSibling`.
// 4. Do ostatniego artykułu dodaj dodatkowy paragraf i umieść go przed znacznikiem `<button/>`.
// 5. Na początku listy dodaj kolejny artykuł, który będzie miał tę samą strustrukturę, co pozostałe artykuły.