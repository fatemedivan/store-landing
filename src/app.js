let openbtn =document.querySelector('.open')
let closebtn =document.querySelector('.close')
let ullist =document.querySelector('.list')

openbtn.addEventListener('click' , ()=>{
    ullist.classList.remove('max-md:hidden')
    openbtn.classList.remove('max-md:block')
    closebtn.classList.remove('hidden')
})

closebtn.addEventListener('click', ()=>{
    ullist.classList.add('max-md:hidden')
    openbtn.classList.add('max-md:block')
    closebtn.classList.add('hidden')
})


const icons = document.querySelectorAll('.icon')
const accars = document.querySelectorAll('.accar')

icons.forEach( (icon,index) => {
    icon.addEventListener('click', ()=>{
        icon.classList.toggle('rotate-180')
        accars[index].classList.toggle('hidden')
    })
    
});


document.addEventListener('DOMContentLoaded',()=>{
    
    const tabs = document.querySelectorAll('.tab')
    const pannels = document.querySelectorAll('.pannel')

    pannels.forEach((pannel , index)=>{
        if (index !== 0) {
            pannel.classList.add('hidden')
        }
    })
    
    tabs[0].classList.add('border-b-2','border-white','pb-4')
    
    tabs.forEach((tab)=>{
    
        tab.addEventListener('click',(e)=>{
            
            const main = e.target.dataset.target
            
            pannels.forEach((pannel)=>{
                pannel.classList.add('hidden')
            })
        
            document.getElementById(main).classList.toggle('hidden')
        
            tabs.forEach(tab=>{
                tab.classList.remove('border-b-2','border-white','pb-4')
            })
        
            tab.classList.add('border-b-2','border-white','pb-4')
        })
    
    })
})
