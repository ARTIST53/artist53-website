const trigger=document.getElementById('navTrigger');
const menu=document.getElementById('navMenu');

if(trigger&&menu){
  const closeMenu=()=>{
    menu.classList.remove('open');
    trigger.setAttribute('aria-expanded','false');
  };
  trigger.addEventListener('click',event=>{
    event.stopPropagation();
    const isOpen=menu.classList.toggle('open');
    trigger.setAttribute('aria-expanded',String(isOpen));
  });
  menu.addEventListener('click',event=>event.stopPropagation());
  document.addEventListener('click',closeMenu);
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape') closeMenu();
  });
}

const footerStyles=document.createElement('style');
footerStyles.textContent=`
footer{padding:72px 18px 52px!important;border-top:1px solid #2a2a2a;background:#050505!important}
.site-footer{width:min(760px,100%);margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center}
.site-footer-icon{display:block;width:min(180px,44vw);margin-bottom:24px}
.site-footer-icon img{display:block;width:100%;height:auto;object-fit:contain}
.site-footer-socials{display:flex;justify-content:center;gap:22px;flex-wrap:wrap;margin:4px 0 0}
.site-footer-socials a{color:#ffc31c;font-family:Bebas,Arial,sans-serif;font-size:1.35rem;letter-spacing:.06em;text-transform:uppercase;text-decoration:none}
.site-footer-socials a:hover{text-decoration:underline}
.site-footer-email{margin-top:24px;color:#ffc31c;font-size:1.05rem;text-decoration:none}
.site-footer-copy{margin:16px 0 0;color:#888;font-size:.92rem}
.site-footer-tagline{margin:24px 0 0;color:#ffc31c;font-family:Bebas,Arial,sans-serif;font-size:clamp(1.8rem,4vw,3rem);letter-spacing:.05em;text-transform:uppercase}
`;
document.head.appendChild(footerStyles);

const footer=document.querySelector('footer');
if(footer){
  footer.innerHTML=`
    <div class="site-footer">
      <a class="site-footer-icon" href="index.html" aria-label="ARTIST53 home">
        <img src="artist53-footer-gold-transparent.png?v=20260811-2217" alt="ARTIST53 gold icon">
      </a>
      <nav class="site-footer-socials" aria-label="ARTIST53 social media">
        <a href="https://www.instagram.com/artist053/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://youtube.com/@artist053?si=jIRie_tqxgwjsKy1" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://www.facebook.com/Artist53-517267671632498/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </nav>
      <a class="site-footer-email" href="mailto:justin@artist53.com">justin@artist53.com</a>
      <p class="site-footer-copy">© 2026 ARTIST53</p>
      <p class="site-footer-tagline">ART NEVER SLEEPS!</p>
    </div>`;
}
