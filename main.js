let input = document.querySelector("input");
let form = document.querySelector("form");
let todo_items = document.querySelector(".todo_items");
form.addEventListener("submit",()=>{
    event.preventDefault();
    let items = [];
    if(!localStorage.getItem("item")){
        items = [];
    }
    else items = JSON.parse(localStorage.getItem("item"));
    items.push({content:input.value,done:false});
    input.value = "";
    localStorage.setItem("item",JSON.stringify(items));
    shower();
});
// let item = [
//     {
//         content:"Men ishlayapman",
//         done:false
//     },
//     {
//         content:"Lorem ibsum",
//         done:false
//     },
//     {
//         content:"Nima gaplar",
//         done:true
//     },
//     {
//         content:"dsfsdfdf",
//         done:true
//     },
//     {
//         content:"Web dasturchi",
//         done:false
//     },
//     {
//         content:"Node JS",
//         done:false
//     },
//     {
//         content:"VUE JS",
//         done:false
//     },
// ];
// localStorage.setItem("item",JSON.stringify(item))
function shower(){
    todo_items.innerHTML = '';
    let items = [];
    if(!localStorage.getItem("item"))
    items = [];
    else {
        items = JSON.parse(localStorage.getItem("item"));
    }
    items.forEach((i,j) => {
        let todo_item = document.createElement("div");
        if(!i.done)
            todo_item.classList.value = "todo_item";
        else
            todo_item.classList.value = "todo_item changed";

        todo_item.innerHTML =`<span>${i.content}</span>
        <div class="buttons"><button onclick="done(${j})" class="change"><i class="fas fa-plus"></i></button>
            <button onclick="delete_item(${j})" class="delete"><i class="far fa-trash-can"></i></button>
        </div>`;
        todo_items.append(todo_item)

    });
}

shower();
function done(index){
items = JSON.parse(localStorage.getItem("item"));
items[index].done = !items[index].done;
localStorage.setItem("item",JSON.stringify  (items));
shower();
};
function delete_item(index){
    let items = JSON.parse(localStorage.getItem("item"));
    items.splice(index,1);
    localStorage.setItem("item",JSON.stringify(items));
    shower();
}