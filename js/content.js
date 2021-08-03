import { filtrar } from "/js/features";

document.querySelector('#content').innerHTML=`
<article id="search"></article>
<article id="results"></article>
`;


document.querySelector('#search').innerHTML=`
<div class="border">
<input type="search" id="input" autocomplete="off" placeholder="Buscar algo...">
<a id="clear">
<div>
<i class="gg-close"></i>
</div>
</a>
</div>
`

document.querySelector('#results').innerHTML=`
<div id="features" class="border">
</div>
`

filtrar()


//filter functions
const clearField = () =>{
    document.querySelector('#input').value = "";
    filtrar();
}
const printList = () =>{
    filtrar();
}


//filter control
document.querySelector('#input').addEventListener("keyup", printList);
document.querySelector('#clear').addEventListener("click", clearField);