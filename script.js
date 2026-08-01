
const trigger=document.getElementById('navTrigger');
const menu=document.getElementById('navMenu');
function closeMenu(){menu.classList.remove('open');trigger.setAttribute('aria-expanded','false')}
trigger.addEventListener('click',e=>{e.stopPropagation();const open=menu.classList.toggle('open');trigger.setAttribute('aria-expanded',String(open))});
menu.addEventListener('click',e=>e.stopPropagation());
document.addEventListener('click',closeMenu);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
