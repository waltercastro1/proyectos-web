const hamburger1 = document.querySelector('.hamburger')
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesligth = document.querySelector('.agregar-imagen')
const contenedorligth = document.querySelector('.image-ligth');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
    
});
contenedorligth.addEventListener('click', (e) =>{
    if(e.target != imagenesligth ){
        contenedorligth.classList.toggle('show')
        imagenesligth.classList.toggle('showImage')
        hamburger1.getElementsByClassName.opacity = '1'
    }
})
const aparecerImagen = (imagen) => {
    imagenesligth.src = imagen;
    contenedorligth.classList.toggle('show');
    imagenesligth.classList.toggle('showImage');
    hamburger1.getElementsByClassName.opacity = '0'

} 








