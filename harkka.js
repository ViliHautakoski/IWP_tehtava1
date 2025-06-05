if(document !== "loading"){
    console.log("Ready");
    initializedCode();
}

else{
    document.addEventListener("DOMContentLoaded",function(){
        console.log("Not Ready");
        initializedCode();
    })
}

function initializedCode(){
    const addtextbtn = document.getElementById("my-button");
    addtextbtn.addEventListener("click", function(){
        console.log("hello world!");
        const text = document.getElementById("titel-one");
        text.innerText = "Moi maailma!";
}); 

    const addDatabtn = document.getElementById("add-data");
    const list = document.getElementById("my-list");
    addDatabtn.addEventListener("click", function(){
        const item = document.createElement("li");
        item.innerText = document.getElementById("text-area").value;
        list.appendChild(item);

    });

}

