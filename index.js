let input = document.getElementById("inp");
let li = document.getElementsByClassName("list")[0];
// or// let li=document.querySelector(".list");
let item=document.getElementById("item")

const add = () => {
    console.log("clicked")
    if (input.value == "") {
        alert("please enter task")
    }
    else {
        let items = document.createElement("ul");
        items.classList.add("ul-list");

        let it = document.createElement("li");
        it.classList.add("itm");

        it.innerHTML = (`${input.value} <span class="material-symbols-outlined">delete</span> `);

        items.appendChild(it);
        li.appendChild(items);
        input.value = "";

        items.getElementsByTagName("span")[0].addEventListener("click",del);
        function del(){
            items.remove();
        }
        
        // item.getElementById("btn").addEventListener("click",blank);
        // const blank=()=>{
        //     if(input.value==""){
        //         alert("sorry, you have to add items in list")
        //     }
        // }
    }

}
