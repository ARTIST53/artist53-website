(() => {
  const footer = document.querySelector('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="signature-footer">
      <a class="signature-footer-icon" href="index.html" aria-label="ARTIST53 home">
        <img class="signature-footer-gold-mark" src="artist53-hand-pencil-gold.svg?v=20260804-1925" alt="ARTIST53 hand and pencil icon">
      </a>
      <h2>Making Your Image A Reality</h2>
      <a class="signature-footer-email" href="mailto:justin@artist53.com">justin@artist53.com</a>
      <p>© 2026 ARTIST53</p>
    </div>`;

  const style = document.createElement('style');
  style.textContent = `
    footer{padding:100px 18px 64px;border-top:1px solid var(--line,#2a2a2a);background:#050505}
    .signature-footer{width:min(720px,100%);margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center}
    .signature-footer-icon{display:block;width:132px;height:128px;margin-bottom:28px}
    .signature-footer-gold-mark{display:block;width:100%;height:100%;object-fit:contain;filter:none!important}
    .signature-footer h2{margin:0;color:var(--yellow,#ffc31c);font-family:Bebas,Arial,sans-serif;font-size:clamp(2.4rem,5vw,4.5rem);line-height:1;text-transform:uppercase}
    .signature-footer-email{margin-top:22px;color:var(--yellow,#ffc31c);font-size:1.05rem}
    .signature-footer p{margin:18px 0 0;color:#888;font-size:.92rem}
    @media(max-width:620px){footer{padding:82px 18px 52px}.signature-footer-icon{width:104px;height:101px;margin-bottom:24px}.signature-footer h2{font-size:2.7rem}}
  `;
  document.head.appendChild(style);
})();
