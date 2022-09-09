window.addEventListener('load', obtenerdatos);

function obtenerdatos(){
 const Nasa_key='KdWBRXMjIc8IDl49kStWqa4xCf8SRXa2oL4luZ0e';
 const ruta=`https://api.nasa.gov/planetary/apod?api_key=${Nasa_key}`;
 fetch(ruta)
 .then(respuesta =>respuesta.json())
 .then(resultado => mostrarDatos(resultado))
}
function mostrarDatos({date,explanation,media_type, title, url}){
    const titutlo=document.querySelector('#titulo');
    titutlo.innerHTML=title;
    const fecha=document.querySelector('#fecha');
    fecha.innerHTML=date;
    const descripcion=document.querySelector(`#descripcion`);
    descripcion.innerHTML=explanation;
    const multimedia=document.querySelector(`#c_multimedia`);
    if (media_type == 'video') {
        multimedia.innerHTML = `
        <iframe class="embed-responsive-item" style="height: 500px; width: 80%" src="${url}" allowfullscreen></iframe>
     `;
    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`;
    }
}