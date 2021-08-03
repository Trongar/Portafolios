import { articulos } from "/js/articulos/main";
let found;
export function filtrar(){
    found = 0;
    document.querySelector('#features').innerHTML=``;
    articulos.forEach(element);
    (found < 1) ? (draw(articulos[0], 0)) : "";
}
function element(item, index){
    var formulario = document.querySelector('#input');
    var texto = (formulario.value != '') ? formulario.value.toLowerCase() : 'info';
    
    let type = item.type.toLowerCase();
    let title = item.title.toLowerCase();
    let tags = item.tags.toLowerCase();
    if ((type.indexOf(texto) !== -1) || (title.indexOf(texto) !== -1) || (tags.indexOf(texto) !== -1)) {
        found++;
        draw(item, index);
    }
}
function draw (item, index) {
    document.querySelector('#features').innerHTML += `
        <div id="element">
        <div class="content" onclick="action(${index})">
        <div class="icono"><i class="gg-${item.icon}"></i></div>
        <div class="descripcion"> 
        <div>
        <h3>${item.title}</h3>
        ${(item.subtitle != '') ? '<h4>'+item.subtitle+'</h4>':'' }
        </div>
        </div>
        </div>
        <div class="botonera">
        ${(isSet(item.mirar))? '<a '+setLink(item.mirar)+'><div><i class="gg-eye"></i></div></a>':''}
        ${(isSet(item.source))? '<a '+setLink(item.source)+'><div><i class="gg-git-branch"></i></div></a>':''}
        </div>
        </div>
        `;
}
function isSet(URL){
    return (URL != '');
}
function isExternalLink (url){
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host !== window.location.host; 
}
function setLink (url){
    const urlhref = "href=\"" + url + "\" "
    return ((isExternalLink(url)) 
    ? (urlhref + " target=\"_blank\" rel=\"noopener\"" )
    : "");
}
window.action = function action(index){
    ((articulos[index].img != '') || (articulos[index].paragraph != ''))? (modal(index)):(search(index));
}

function search(index){
    document.querySelector('#input').value=(index != 0) ? articulos[index].title:'';
    filtrar();
}

function modal(index){
    document.querySelector('#modal').innerHTML = `
    <div class="modal-dialog">
    <div class="modal-content smack border">
    <div class="modal-header">
    <h3>${articulos[index].title}</h3>
    <a class="close"><i class="gg-close"></i></a>
    </div>  
    <div class="modal-body">
    <img src="${articulos[index].img}" alt="" class="modal-img">
    <p>${articulos[index].paragraph}</p>
    </div>
    <div class="modal-footer">
    ${(isSet(articulos[index].mirar))? '<a '+setLink(articulos[index].mirar)+'><div><i class="gg-eye"></i></div></a>':''}
    ${(isSet(articulos[index].source))? '<a '+setLink(articulos[index].source)+'><div><i class="gg-git-branch"></i></div></a>':''}
    </div>
    </div>
    </div>
    `;
    document.querySelectorAll('.close').forEach(item => {
      item.addEventListener('click',closeModal);
    });
}
window.closeModal = function closeModal (){
    document.querySelector('#modal').innerHTML = `` 
}