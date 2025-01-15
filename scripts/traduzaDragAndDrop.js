/* EVENTOS EVENTOS EVENTOS EVENTOS EVENTOS */
// 1 eventos dos itens que irei arrastar e soltar
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart) //roda quando eu arrastar
    item.addEventListener('dragend', dragEnd) //roda quando eu soltar 
})


// 2 eventos da area onde irei soltar os items
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver) // roda quando passa algo por cima dele 
    area.addEventListener('dragleave', dragLeave) // roda quando to na area que posso soltar e saio dela 
    area.addEventListener('drop', drop) // roda quando soltar o item na area
})


// 3 eventos da div inical onde estava meus itens, inclui a logica de poder dropar de volta os itens na div pai
document.querySelector('.itens').addEventListener('dragover', dragOverAreaIncial)  // roda quando passa algo por cima dele 
document.querySelector('.itens').addEventListener('dragleave', dragLeaveAreaIncial)  // roda quando to na area que posso soltar e saio dela 
document.querySelector('.itens').addEventListener('drop', dropAreaIncial)  // roda quando soltar o item na area





/* FUNCOES  FUNCOES  FUNCOES  FUNCOES  FUNCOES  FUNCOES */

/* 1 FUNCOES RELACIONADAS AO ITEM */
// funcao que roda quando eu arrastar meu item
function dragStart(e) {
    e.currentTarget.classList.add('arastouItem')
}

// funcao que roda quando eu soltar meu item
function dragEnd(e) {
    e.currentTarget.classList.remove('arastouItem')
}





/* 2 FUNCOES RELACIONADAS A AREA  */

// evento que roda quando passar algo por cima dele no caso o item 
function dragOver(e) {
    // so libera pra drop, ativa efeito de mudar de cor se nao ter nemhum item na area que quero soltar
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault() // libera pra drop
        e.currentTarget.classList.add('hover') // muda a cor da area quando eu passar por cima dela 
    }
}

// evento que roda quando to em uma area que posso soltar e saio dela 
function dragLeave(e) {
    e.currentTarget.classList.remove('hover') // retira o efeito de cor da area quando o item sair de cima dela 
    // console.log('saio da area dropavel')
}

/*evento quando eu soltar algo
*  
*  porem ele so roda se eu liberar no dragover o drop
*  
*  obs: como selecionar o item que estou arrastando?
*  lembra que quando eu arrasto um item  na funcao de item que ta la emcima eu dor uma class que vai mudar a cor dele?
*  vou usar essa class pra pegalo ate pq ela e retirada dele quando eu o soltar 
*/
function drop(e) {
    e.currentTarget.classList.remove('hover') // retira o efeito de cor da area quando soltar o item nela

    // pego o item que ta sendo movido OBS: essa calss arrastou item so existe quando ele ta sendo arrastado
    let itemSendoMovido = document.querySelector('.item.arastouItem')

    // verificaçao pra saber se ja existe algum item dentro da area que to querendo soltar o item
    if (e.currentTarget.querySelector('.item') === null) {
        e.currentTarget.appendChild(itemSendoMovido)
    }
}



//3 FUNCOES DA AREA INICAL DOS ITENS 
// inclui a logica de poder dropar de volta os itens na div pai 
// obs: nao irei comentar pq ela e igual as funcoes acima que ja comentei 
function dragOverAreaIncial(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')
    // console.log('passou por cima ')
}

function dragLeaveAreaIncial(e) {
    e.currentTarget.classList.remove('hover')
    // console.log('passou tirou de cima ')
}


function dropAreaIncial(e) {
    e.currentTarget.classList.remove('hover')
    let itemSenodoMovido = document.querySelector('.item.arastouItem')
    
    e.currentTarget.appendChild(itemSenodoMovido)
    // console.log('soltou em cima  ')
}







/* passo a passo 
*  
*  primeiro preciso entender a difenrenca do .target pro e.currenttarget

*  passo a passo
*  1 colocar o draggable = true no elemento html pra poder arrastalo

*  2 tratar dos itens que irei arrasta, definir acontecimentos de:
*   - arrasta, que no caso e dar um opacity menor nele 
*   - soltar, que no caso e tirar a opacity menor dele 

*  3 tratar de das areas de drop, que e onde eu posso colocalos 
    - pra criar uma area onde posso dropar preciso de colocar pelo menos 3 eventos que sao elels:
        - dragover = evento que roda quando passar algo por cima dele no caso o item 
        - dragleave = evento que roda quando to em uma area que posso soltar e saio dela 
        - drop = evento que roda quando eu soltar o item encima dele, 
            OBS: porem ele so roda se eu liberar no dragover o drop com um:  e.preventDefault()
            obs: como selecionar o item que estou arrastando pra jogar dentro dele?
            lembra que quando eu arrasto um item  na funcao de item que ta la emcima eu dou uma class que vai mudar a cor do item arrastado?
            vou usar essa class pra pegalo ate pq ela e retirada dele quando eu o soltar

    4 pra agora devo colocar as 3 funcoes na area inical dos itens pra poder colocalos la de volta 
*/