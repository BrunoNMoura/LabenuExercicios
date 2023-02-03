const addItem = document.getElementById("container");


const adicionaItem = (event) => {
    event.preventDefault();
    const newArticle = document.createElement("article");
    newArticle.innerHTML = "New Article"
    addItem.insertAdjacentElement("beforeend", newArticle)
    newArticle.setAttribute("class", "item")
    newArticle.setAttribute('onclick', "removeItem(event)")
}

const removeItem = (event) =>{
    event.target.remove()
}