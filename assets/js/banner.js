    let balls = document.querySelector('.balls')
    let quant = document.querySelectorAll('.slides .image')
    let atual = 0
    let imagem = document.getElementById('atual')
    let next= document.getElementById('next')
    let back = document.getElementById('back')
    let autoScroll = true
    
    for (let i=0; i<quant.length; i++) {
        let div = document.createElement('div')
        div.id=i
        balls.appendChild(div)
    }
    
    document.getElementById('0').classList.add('imgAtual')
    
    let position = document.querySelectorAll('.balls div')
    
    for(let i=0; i<position.length; i++) {
        position[i].addEventListener('click', ()=>{
            atual = position[i].id
            autoScroll=false
            slide()
        })
    }
    //()=> é uma Arrow Function usado para descrever uma função sem parametros
    
    back.addEventListener('click', ()=>{
        atual--
        autoScroll=false
        slide()
    })
    next.addEventListener('click', ()=>{
        atual++
        autoScroll=false
        slide()
    })
    
    function slide(){
        if(atual >= quant.length){
            atual = 0
        }
        else if(atual < 0){
            atual = quant.length-1
        }
        document.querySelector('.imgAtual').classList.remove('imgAtual')
        imagem.style.marginLeft = -100*atual +'rem'
        document.getElementById(atual).classList.add('imgAtual')
    }
    setInterval(()=>{
        if(autoScroll){
            atual ++
            slide()
        }else{
            autoScroll = true
        }
    }, 5000)