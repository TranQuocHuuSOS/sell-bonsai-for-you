const topMenu = document.getElementById('tqd-top-menu')
const toggleTopMenuIcon=document.getElementById('tql-toggle-top-menu-icon')
document.addEventListener('click',(e)=>{
     if(toggleTopMenuIcon.contains(e.target)){
        topMenu.classList.toggle('tqd-topmenu-expanded')
        topMenu.classList.toggle('hidden')
     }
     else{
        if(topMenu.classList.contains('tqd-topmenu-expanded')){
            topMenu.classList.remove('tqd-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
     }
})