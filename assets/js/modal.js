const handleModal = ()=>{
    const closeBtn = document.querySelector(".close")
    const modalContainer = document.querySelector(".modalCotainer")
    const buttonsOpenModal = document.querySelectorAll(".openModal")

    buttonsOpenModal.forEach((button)=>{
        button.addEventListener("click", (event)=>{
            event.preventDefault()
            modalContainer.style.display = "flex"
            setTimeout(() => {
                modalContainer.style.opacity = '1'; // Define a opacidade para 1 após um pequeno atraso para ativar a transição
              }, 2);
        })
        
    })

    closeBtn.addEventListener("click", ()=>{
        modalContainer.style.opacity = '0';
        setTimeout(() => {
            modalContainer.style.display = 'none'; // Oculta o modal após a transição terminar
          }, 2000);
        // modalContainer.style.display = "none"
    })

    closeBtn.addEventListener("click", ()=>{
        modalContainer.style.display = "none"
    })
}

handleModal()