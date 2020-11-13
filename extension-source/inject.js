(function(){
    let btn = document.createElement('button');
    btn.value = "compare products";
    btn.type = "submit";
    btn.id = "tc-btn-amz";
    btn.textContent = "Compare Items";
    document.querySelector('#selectQuantity').appendChild(btn);    
})();