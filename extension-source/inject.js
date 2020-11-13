
(function(){
    let dummyDB = [
        {
            name : "item-1",
            description: "Lorem ipsum dolor sit amet",
            price: "20.50$",
            link : "https://www.amazon.it/dp/B07DJ3ZC8Z/"
        },
        {
            name: "item-2",
            description: "Lorem ipsum dolor sit amet",
            price: "27.50$",
            link : "https://www.amazon.it/dp/B07DJ3ZC8Z/"
        }
    ]

    
    let dropdown = document.createElement('div');   
    dropdown.className = "dropdown-content";
    let itemList = document.createElement('ul');
    itemList.className = "items-list";
    dummyDB.forEach(item => {
        let itemAlternative = document.createElement('li');
        let itemContainer = document.createElement('div');
        itemContainer.className = "item-container";

        let itemName = document.createElement('h4');
        itemName.className = 'item-name'
        itemName.innerText = item.name;

        let itemDescription = document.createElement('p');
        itemDescription.innerHTML = item.description;

        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = item.price;

        let itemLink = document.createElement('a');
        itemLink.innerText = "go to page";
        itemLink.href = item.link;
        

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemLink);
        itemAlternative.appendChild(itemContainer);
        itemList.appendChild(itemAlternative);
    });
    
    dropdown.appendChild(itemList)
    let btn = document.createElement('button');
    btn.value = "compare products";
    btn.id = "tc-btn-amz";
    btn.textContent = "Compare Items";
    btn.appendChild(dropdown);
    
    document.querySelector('#centerCol').prepend(btn);    
})();


