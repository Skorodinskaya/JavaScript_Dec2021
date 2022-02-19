// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const newArray = [];
function scraper(startElement) {
    let children = startElement.children;
    for (const child of children) {
        if (child.className) {
            newArray.push(...child.classList)
        }
        scraper(child);
    }
}
scraper(document.body);
console.log(newArray);
