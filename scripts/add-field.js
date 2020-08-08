/*
    -Procurar o botão novo horário
    -quando clicar no botão, duplicar os campos
    -colocar na pagina
*/


document.querySelector("#add-time") //Achar botão
.addEventListener('click', cloneField) //Clicar no botão

function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //clonar elemento

    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(function(field){ //percorre cada valor dos campos do elemento
            field.value = "" //limpa o valor do campo
        }
    )
    document.querySelector("#schedule-items").appendChild(newFieldContainer)//adicionar o elemento (newFieldContainer) ao html
        
}

