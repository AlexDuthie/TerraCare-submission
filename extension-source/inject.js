
(function(){
    let dummyDB = [
        {
            name : "item-1",
            description: "Lorem ipsum dolor sit amet",
            price: "20.50$",
            link : "https://www.amazon.it/dp/B07DJ3ZC8Z/",
            img: "https://via.placeholder.com/50"
        },
        {
            name: "item-2",
            description: "Lorem ipsum dolor sit amet",
            price: "27.50$",
            link : "https://www.amazon.it/dp/B07DJ3ZC8Z/",
            img: "https://via.placeholder.com/50"
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

        let itemImage = document.createElement('img');
        itemImage.src = item.img;

        let itemName = document.createElement('h4');
        itemName.className = 'item-name'
        itemName.innerText = item.name;

        let itemDescription = document.createElement('p');
        itemDescription.innerHTML = item.description;

        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = item.price;

        let itemLink = document.createElement('a');
        itemLink.innerText = "Go to Page";
        itemLink.href = item.link;

        let compareLink = document.createElement('a');
        compareLink.innerText = "Compare Items";
        compareLink.href = item.link;
        compareLink.className = "compare-link";
        
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemLink);
        itemContainer.appendChild(compareLink);
        itemAlternative.appendChild(itemContainer);
        itemList.appendChild(itemAlternative);
    });

    let webLink = document.createElement('a');
    webLink.href = "https://extension-landing-page-active-cat.eu-gb.mybluemix.net/#/";
    webLink.innerText = "Visit the website";
    dropdown.appendChild(itemList);
    dropdown.appendChild(webLink);
    let btn = document.createElement('button');
    btn.value = "compare products";
    btn.id = "tc-btn-amz";
    btn.textContent = "🌳 Compare Items";
    btn.appendChild(dropdown);
    
    document.querySelector('#centerCol').prepend(btn);    
})();


