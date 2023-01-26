const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const fecharModal = document.querySelector(".fechar-modal")
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

fecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});
 