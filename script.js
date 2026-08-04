const trigger=document.getElementById('navTrigger');
const menu=document.getElementById('navMenu');

if(trigger&&menu){
  function closeMenu(){menu.classList.remove('open');trigger.setAttribute('aria-expanded','false')}
  trigger.addEventListener('click',e=>{e.stopPropagation();const open=menu.classList.toggle('open');trigger.setAttribute('aria-expanded',String(open))});
  menu.addEventListener('click',e=>e.stopPropagation());
  document.addEventListener('click',closeMenu);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
}

const globalStyles=document.createElement('style');
globalStyles.textContent=`
  .logo-gallery{grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
  .logo-tile{overflow:hidden;transition:transform .25s ease,border-color .25s ease}
  .logo-tile:hover{transform:translateY(-5px);border-color:var(--yellow,#ffc31c)}
  .logo-tile-image{aspect-ratio:1/1;padding:8px!important;overflow:hidden}
  .logo-tile-image img{width:100%;height:100%;object-fit:contain;transform:scale(1.04)}
  .logo-tile-copy{padding:20px}
  .logo-tile-copy h3{font-size:2rem}
  @media(max-width:900px){.logo-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}}
  @media(max-width:620px){.logo-gallery{grid-template-columns:1fr}.logo-tile-image{padding:4px!important}}
`;
document.head.appendChild(globalStyles);

const footer=document.querySelector('footer');
if(footer){
  footer.innerHTML=`
    <div class="signature-footer">
      <a class="signature-footer-icon" href="index.html" aria-label="ARTIST53 home">
        <img src="artist53-mark-white.png" alt="ARTIST53 icon">
      </a>
      <h2>Making Your Image A Reality</h2>
      <a class="signature-footer-email" href="mailto:justin@artist53.com">justin@artist53.com</a>
      <p>© 2026 ARTIST53</p>
    </div>`;

  const footerStyles=document.createElement('style');
  footerStyles.textContent=`
    footer{
      padding:100px 18px 64px;
      border-top:1px solid var(--line,#2a2a2a);
      background:#050505;
    }
    .signature-footer{
      width:min(720px,100%);
      margin:0 auto;
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
    }
    .signature-footer-icon{
      display:block;
      width:92px;
      height:92px;
      margin-bottom:28px;
    }
    .signature-footer-icon img{
      display:block;
      width:100%;
      height:100%;
      object-fit:contain;
    }
    .signature-footer h2{
      margin:0;
      color:var(--yellow,#ffc31c);
      font-family:Bebas,Arial,sans-serif;
      font-size:clamp(2.4rem,5vw,4.5rem);
      line-height:1;
      text-transform:uppercase;
    }
    .signature-footer-email{
      margin-top:22px;
      color:var(--yellow,#ffc31c);
      font-size:1.05rem;
    }
    .signature-footer p{
      margin:18px 0 0;
      color:#888;
      font-size:.92rem;
    }
    @media(max-width:620px){
      footer{padding:82px 18px 52px}
      .signature-footer-icon{width:76px;height:76px;margin-bottom:24px}
      .signature-footer h2{font-size:2.7rem}
    }
  `;
  document.head.appendChild(footerStyles);
}