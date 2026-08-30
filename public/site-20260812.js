const trigger=document.getElementById('navTrigger');
const menu=document.getElementById('navMenu');
if(trigger&&menu){const closeMenu=()=>{menu.classList.remove('open');trigger.setAttribute('aria-expanded','false')};trigger.addEventListener('click',e=>{e.stopPropagation();const open=menu.classList.toggle('open');trigger.setAttribute('aria-expanded',String(open))});menu.addEventListener('click',e=>e.stopPropagation());document.addEventListener('click',closeMenu);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()})}
const styles=document.createElement('style');styles.textContent=`.logo-gallery{grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.logo-tile{overflow:hidden;transition:transform .25s ease,border-color .25s ease}.logo-tile:hover{transform:translateY(-5px);border-color:var(--yellow,#ffc31c)}.logo-tile-image{aspect-ratio:1/1;padding:18px!important;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#fff}.logo-tile-image img{display:block;width:100%;height:100%;object-fit:contain;transform:none}.logo-tile[href="logo-left-side-lion.html"] .logo-tile-image{background:#000!important}.logo-tile-copy{padding:20px}.logo-tile-copy h3{font-size:2rem}@media(max-width:900px){.logo-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.logo-gallery{grid-template-columns:1fr}.logo-tile-image{padding:14px!important}}footer{padding:72px 18px 52px!important;border-top:1px solid var(--line,#2a2a2a);background:#050505!important}.site-footer{width:min(760px,100%);margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center}.site-footer-icon{display:block;width:min(180px,44vw);margin-bottom:24px}.site-footer-icon img{display:block;width:100%;height:auto;object-fit:contain}.site-footer-socials{display:flex;justify-content:center;gap:22px;flex-wrap:wrap;margin:4px 0 0}.site-footer-socials a{color:var(--yellow,#ffc31c);font-family:Bebas,Arial,sans-serif;font-size:1.35rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none}.site-footer-socials a:hover{text-decoration:underline}.site-footer-email{margin-top:24px;color:var(--yellow,#ffc31c);font-size:1.05rem;text-decoration:none}.site-footer-copy{margin:16px 0 0;color:#888;font-size:.92rem}.site-footer-tagline{margin:24px 0 0;color:var(--yellow,#ffc31c);font-family:Bebas,Arial,sans-serif;font-size:clamp(1.8rem,4vw,3rem);letter-spacing:.05em;text-transform:uppercase}`;document.head.appendChild(styles);
const ccb=document.querySelector('img[alt="Clik Clik Bang logo"]');if(ccb)ccb.src='clik-clik-bang-clean.svg';
const footer=document.querySelector('footer');if(footer){footer.innerHTML=`<div class="site-footer"><a class="site-footer-icon" href="index.html" aria-label="ARTIST53 home"><img src="artist53-footer-clean-final.png?v=20260812-1006" alt="ARTIST53 gold icon"></a><nav class="site-footer-socials" aria-label="ARTIST53 social media"><a href="https://www.instagram.com/artist053/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://youtube.com/@artist053?si=jIRie_tqxgwjsKy1" target="_blank" rel="noopener noreferrer">YouTube</a><a href="https://www.facebook.com/Artist53-517267671632498/" target="_blank" rel="noopener noreferrer">Facebook</a></nav><a class="site-footer-email" href="mailto:justin@artist53.com">justin@artist53.com</a><p class="site-footer-copy">© 2026 ARTIST53</p><p class="site-footer-tagline">ART NEVER SLEEPS!</p></div>`;}

/* Site-wide portfolio image enlargement */
(()=>{if(window.artist53ImageViewerReady)return;window.artist53ImageViewerReady=true;
const setup=()=>{
  const images=[...document.querySelectorAll('main img')].filter(img=>!img.closest('a,header,footer')&&!img.hasAttribute('data-no-lightbox'));
  if(!images.length)return;
  images.forEach(img=>{img.classList.add('site-zoomable');img.setAttribute('tabindex','0');img.setAttribute('role','button');img.setAttribute('aria-label',(img.alt?img.alt+'. ':'')+'Open enlarged image')});
  const cursor=document.createElement('span');
  cursor.className='artist53-image-cursor';
  cursor.setAttribute('aria-hidden','true');
  document.body.appendChild(cursor);
  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    document.body.classList.add('artist53-custom-cursor-active');
    document.addEventListener('pointermove',event=>{cursor.style.left=event.clientX+'px';cursor.style.top=event.clientY+'px'});
    images.forEach(img=>{img.addEventListener('pointerenter',()=>cursor.classList.add('is-visible'));img.addEventListener('pointerleave',()=>cursor.classList.remove('is-visible'))});
  }
  const viewer=document.createElement('div');
  viewer.className='artist53-lightbox';
  viewer.setAttribute('role','dialog');
  viewer.setAttribute('aria-modal','true');
  viewer.setAttribute('aria-label','Enlarged image viewer. Click to close.');
  viewer.setAttribute('tabindex','-1');
  viewer.innerHTML='<img class="artist53-lightbox__image" alt="">';
  document.body.appendChild(viewer);
  const full=viewer.querySelector('.artist53-lightbox__image');
  let opener=null;
  const targetRect=img=>{
    const naturalWidth=img.naturalWidth||img.getBoundingClientRect().width;
    const naturalHeight=img.naturalHeight||img.getBoundingClientRect().height;
    const maxWidth=innerWidth-50,maxHeight=innerHeight-50;
    const ratio=Math.min(maxWidth/naturalWidth,maxHeight/naturalHeight);
    const width=Math.max(1,naturalWidth*ratio),height=Math.max(1,naturalHeight*ratio);
    return{left:(innerWidth-width)/2,top:(innerHeight-height)/2,width,height};
  };
  const position=(rect)=>{full.style.left=rect.left+'px';full.style.top=rect.top+'px';full.style.width=rect.width+'px';full.style.height=rect.height+'px'};
  const open=img=>{
    opener=img;
    const start=img.getBoundingClientRect();
    full.src=img.currentSrc||img.src;
    full.alt=img.alt||'';
    position(start);
    viewer.classList.add('is-open');
    document.body.classList.add('artist53-lightbox-open');
    cursor.classList.remove('is-visible');
    requestAnimationFrame(()=>requestAnimationFrame(()=>position(targetRect(img))));
    viewer.focus({preventScroll:true});
  };
  const close=()=>{
    if(!viewer.classList.contains('is-open'))return;
    if(opener&&document.contains(opener))position(opener.getBoundingClientRect());
    viewer.classList.remove('is-open');
    document.body.classList.remove('artist53-lightbox-open');
    setTimeout(()=>{if(!viewer.classList.contains('is-open'))full.removeAttribute('src')},430);
    if(opener)opener.focus({preventScroll:true});
  };
  images.forEach(img=>{img.addEventListener('click',()=>open(img));img.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open(img)}})});
  viewer.addEventListener('click',close);
  viewer.addEventListener('pointerenter',()=>{cursor.classList.add('is-visible','is-close')});
  viewer.addEventListener('pointerleave',()=>cursor.classList.remove('is-visible','is-close'));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')close()});
  addEventListener('resize',()=>{if(viewer.classList.contains('is-open')&&opener)position(targetRect(opener))});
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
