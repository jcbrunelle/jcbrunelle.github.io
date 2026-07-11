(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`T`,`J`,`Q`,`K`,`A`];function t(e,t){return e+t*13}function n(e){return e%13}function r(e){return e/13|0}function i(e){let t=new Uint8Array(52);for(let n of e)t[n]=1;let n=[];for(let e=0;e<52;e++)t[e]||n.push(e);return n}function a(n){let r=n.trim().toUpperCase();if(r.length===2&&r[0]===r[1]){let n=e.indexOf(r[0]);if(n<0)return[];let i=[];for(let e=0;e<4;e++)for(let r=e+1;r<4;r++)i.push([t(n,e),t(n,r)]);return i}if(r.length!==3)return[];let i=e.indexOf(r[0]),a=e.indexOf(r[1]),o=r[2]===`S`,s=r[2]===`O`;if(i<0||a<0||i===a||!o&&!s)return[];let c=Math.max(i,a),l=Math.min(i,a),u=[];if(o)for(let e=0;e<4;e++)u.push([t(c,e),t(l,e)]);else for(let e=0;e<4;e++)for(let n=0;n<4;n++)e!==n&&u.push([t(c,e),t(l,n)]);return u}function o(e=[]){let t=i(e),n=Math.random()*t.length|0,r=t[n];return t[n]=t[t.length-1],t.pop(),[r,t[Math.random()*t.length|0]]}var s=null,c=1;function l(){return s||=new Worker(new URL(``+new URL(`equity.worker-DTHFzboW.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),s}function u(e,t){let n=l();return new Promise((r,i)=>{let a=o=>{let s=o.data;if(s.id===e.id){if(s.type===`progress`){t?.(s.done,s.total);return}n.removeEventListener(`message`,a),s.type===`error`?i(Error(s.message)):r(s.result)}};n.addEventListener(`message`,a),n.postMessage(e)})}function d(e,t,n){return u({id:c++,type:`exact`,hero:e,villain:t},n)}function f(e,t,n,r){return u({id:c++,type:`montecarlo`,hero:e,combos:t,iterations:n},r)}function p(){return Array.from({length:13},()=>Array(13).fill(!1))}function m(e){return e.map(e=>e.slice())}function h(t,n){let r=12-t,i=12-n;return t===n?`${e[r]}${e[i]}`:n>t?`${e[r]}${e[i]}s`:`${e[i]}${e[r]}o`}function g(e,t=[]){let n=new Set(t),r=[];for(let t=0;t<13;t++)for(let i=0;i<13;i++){if(!e[t][i])continue;let o=h(t,i);for(let e of a(o))n.has(e[0])||n.has(e[1])||r.push(e)}return r}function _(e,t=[]){return g(e,t).length}function v(e){let t=0;for(let n=0;n<13;n++)for(let r=0;r<13;r++)e[n][r]&&t++;return t}function y(t){return e.indexOf(t.toUpperCase())}function ee(t){let n=t.trim().toUpperCase().replace(/\s/g,``);if(!n)return[];let r=/^([2-9TJQKA])\1\+$/.exec(n);if(r){let t=y(r[1]),n=[];for(let r=t;r<=12;r++)n.push(`${e[r]}${e[r]}`);return n}let i=/^([2-9TJQKA])\1-([2-9TJQKA])\2$/.exec(n);if(i){let t=y(i[1]),n=y(i[2]);t<n&&([t,n]=[n,t]);let r=[];for(let i=n;i<=t;i++)r.push(`${e[i]}${e[i]}`);return r}if(/^([2-9TJQKA])\1$/.exec(n))return[n];let a=/^([2-9TJQKA])([2-9TJQKA])([SO])\+$/.exec(n);if(a){let t=y(a[1]),n=y(a[2]),r=a[3].toLowerCase();if(t===n)return[];let i=Math.max(t,n),o=Math.min(t,n),s=[];for(let t=o;t<i;t++)s.push(`${e[i]}${e[t]}${r}`);return s}let o=/^([2-9TJQKA])([2-9TJQKA])([SO])-([2-9TJQKA])([2-9TJQKA])\3$/.exec(n);if(o){let t=y(o[1]),n=y(o[2]),r=y(o[4]),i=y(o[5]),a=o[3].toLowerCase();if(t!==r)return[];let s=t,c=Math.min(n,i),l=Math.max(n,i);if(c>=s||l>=s)return[];let u=[];for(let t=c;t<=l;t++)u.push(`${e[s]}${e[t]}${a}`);return u}let s=/^([2-9TJQKA])([2-9TJQKA])([SO])$/.exec(n);if(s){let t=y(s[1]),n=y(s[2]),r=s[3].toLowerCase();if(t===n)return[];let i=Math.max(t,n),a=Math.min(t,n);return[`${e[i]}${e[a]}${r}`]}let c=/^([2-9TJQKA])([2-9TJQKA])$/.exec(n);if(c&&c[1]!==c[2]){let t=y(c[1]),n=y(c[2]),r=Math.max(t,n),i=Math.min(t,n);return[`${e[r]}${e[i]}s`,`${e[r]}${e[i]}o`]}return[]}function b(e){let t=p(),n=e.replace(/\s+/g,``);if(!n)return{matrix:t};let r=n.split(`,`),i=new Set;for(let e of r){if(!e)continue;let t=ee(e);if(t.length===0)return{matrix:p(),error:`Segment invalide: "${e}"`};for(let e of t)i.add(e)}for(let e of i){let n=x(e);n&&(t[n.row][n.col]=!0)}return{matrix:t}}function x(e){let t=e.trim().toUpperCase();if(t.length===2&&t[0]===t[1]){let e=y(t[0]);if(e<0)return null;let n=12-e;return{row:n,col:n}}if(t.length!==3)return null;let n=y(t[0]),r=y(t[1]),i=t[2];if(n<0||r<0||n===r)return null;let a=Math.max(n,r),o=Math.min(n,r),s=12-a,c=12-o;return i===`S`?{row:s,col:c}:i===`O`?{row:c,col:s}:null}function S(t){let n=[],r=new Map,i=new Map;for(let e=0;e<13;e++)for(let a=0;a<13;a++){if(!t[e][a])continue;let o=h(e,a);if(o.length===2)n.push(y(o[0]));else{let e=y(o[0]),t=y(o[1]),n=o.endsWith(`s`)?r:i;n.has(e)||n.set(e,[]),n.get(e).push(t)}}let a=[];n.sort((e,t)=>t-e),a.push(...C(n,t=>`${e[t]}${e[t]}`,!0));for(let[e,t]of[...r.entries()].sort((e,t)=>t[0]-e[0]))a.push(...w(e,[...new Set(t)],`s`));for(let[e,t]of[...i.entries()].sort((e,t)=>t[0]-e[0]))a.push(...w(e,[...new Set(t)],`o`));return a.join(`, `)}function C(e,t,n){if(e.length===0)return[];let r=[...new Set(e)].sort((e,t)=>t-e),i=[],a=0;for(;a<r.length;){let e=a;for(;e+1<r.length&&r[e]-1===r[e+1];)e++;let o=r[a],s=r[e];n&&o===12&&e>a?i.push(`${t(s)}+`):e===a?i.push(t(o)):n&&o===12?i.push(`${t(s)}+`):i.push(`${t(o)}-${t(s)}`),a=e+1}return i}function w(t,n,r){let i=[],a=0,o=[...n].sort((e,t)=>t-e);for(;a<o.length;){let n=a;for(;n+1<o.length&&o[n]-1===o[n+1];)n++;let s=o[a],c=o[n];n===a?i.push(`${e[t]}${e[s]}${r}`):s===t-1?i.push(`${e[t]}${e[c]}${r}+`):i.push(`${e[t]}${e[s]}${r}-${e[t]}${e[c]}${r}`),a=n+1}return i}var T=[{name:`Top 5%`,text:`88+, AJs+, KQs, AKo`},{name:`Top 10%`,text:`77+, A9s+, KTs+, QJs, AJo+, KQo`},{name:`Top 15%`,text:`55+, A8s+, K9s+, QTs+, JTs, ATo+, KJo+, QJo`},{name:`Top 20%`,text:`55+, A6s+, K9s+, Q9s+, J9s+, T9s, A9o+, KTo+, QTo+, JTo`},{name:`Top 25%`,text:`22+, A5s+, K8s+, Q8s+, J8s+, T8s+, 98s, A8o+, K9o+, QTo+, JTo`},{name:`Top 30%`,text:`33+, A2s+, K7s+, Q8s+, J8s+, T8s+, 97s+, 87s, 76s, A7o+, K9o+, Q9o+, J9o+, T9o`},{name:`Top 35%`,text:`22+, A2s+, K6s+, Q8s+, J8s+, T7s+, 97s+, 86s+, 76s, A5o+, K8o+, Q9o+, J9o+, T9o, 98o`},{name:`Top 40%`,text:`22+, A2s+, K4s+, Q7s+, J7s+, T6s+, 96s+, 86s+, 75s+, 65s, A4o+, K7o+, Q8o+, J9o+, T9o, 98o`}],E=document.querySelector(`#app`),D=`hand`,O=[0,1],k=[2,3],A=p(),j=``,M=T.map((e,t)=>({id:`preset-${t}`,name:e.name,text:e.text,enabled:!0})),N=1,P=!1,F=!1,I={rounds:0,hits:0,sumAbsError:0,equityRounds:0},L=3,R=1e5,z=[`<svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="6.6" r="4.15"/>
    <circle cx="7.55" cy="12.15" r="4.15"/>
    <circle cx="16.45" cy="12.15" r="4.15"/>
    <path d="M11.15 14.2h1.7v5.35h1.85V21H9.3v-1.45h1.85z"/>
  </svg>`,`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2 19.2 12 12 21.8 4.8 12 12 2.2z"/></svg>`,`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.6S3.5 14.2 3.5 8.8C3.5 5.9 5.7 3.8 8.5 3.8c1.7 0 3.2.9 3.5 2.3.3-1.4 1.8-2.3 3.5-2.3 2.8 0 5 2.1 5 5 0 5.4-8.5 11.8-8.5 11.8z"/></svg>`,`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4C8.2 6.6 5 10.1 5 13.2c0 2.6 1.8 4.4 4.1 4.4 1 0 1.9-.4 2.5-1v2.7H10c-.4 0-.7.3-.7.7s.3.7.7.7h4c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-1.6V16.6c.6.6 1.5 1 2.5 1 2.3 0 4.1-1.8 4.1-4.4 0-3.1-3.2-6.6-7-10.8z"/></svg>`];function B(t,i=0,a=0){let o=e[n(t)],s=r(t),c=s===1||s===2,l=z[s];return`<article class="pc ${c?`pc--red`:`pc--black`} pc--fan-${a}" style="--deal-delay:${i}ms" aria-label="${o}${[`♣`,`♦`,`♥`,`♠`][s]}">
    <div class="pc__face">
      <div class="pc__corner pc__corner--tl">
        <span class="pc__rank">${o}</span>
        <span class="pc__mini">${l}</span>
      </div>
      <div class="pc__center">${l}</div>
      <div class="pc__corner pc__corner--br">
        <span class="pc__rank">${o}</span>
        <span class="pc__mini">${l}</span>
      </div>
    </div>
  </article>`}function V(){E.innerHTML=`
    <header class="topbar">
      <div class="brand">
        <h1>Équité all-in</h1>
      </div>
      <div class="stats">
        <div class="stat">n<strong id="stat-rounds">0</strong></div>
        <div class="stat">hit<strong id="stat-acc">—</strong></div>
        <div class="stat" id="stat-err-wrap">err<strong id="stat-err">—</strong></div>
      </div>
    </header>

    <div class="layout">
      <section class="panel">
        <h2>Table</h2>
        <div class="mode-row">
          <button type="button" class="mode-btn active" data-mode="hand">Main / main</button>
          <button type="button" class="mode-btn" data-mode="range">Main / range</button>
        </div>

        <div class="matchup">
          <div class="matchup-side">
            <div class="matchup-label">Hero</div>
            <div class="hole-cards" id="hero-cards"></div>
          </div>
          <div class="vs-pill">vs</div>
          <div class="matchup-side">
            <div class="matchup-label" id="villain-label">Villain</div>
            <div class="hole-cards" id="villain-cards"></div>
          </div>
        </div>

        <div class="result" id="result"></div>
      </section>

      <section class="panel range-panel" id="range-panel">
        <h2>Pool de ranges</h2>
        <p class="range-pool-intro">Coche les ranges contre lesquelles t’entraîner.</p>
        <div class="range-pool" id="range-pool"></div>
        <div class="range-pool-actions">
          <button type="button" class="btn-mini" id="btn-pool-all">Tout</button>
          <button type="button" class="btn-mini" id="btn-pool-none">Rien</button>
        </div>
        <div class="range-add">
          <select id="preset">
            <option value="">+ Preset…</option>
            ${T.map(e=>`<option value="${e.text}">${e.name}</option>`).join(``)}
          </select>
          <input id="custom-range" class="range-add-input" type="text" spellcheck="false" placeholder="ou texte Equilab…" />
          <button type="button" class="btn-mini" id="btn-pool-add">Ajouter</button>
        </div>
        <p class="range-hint" id="pool-hint"></p>
      </section>
    </div>

    <aside class="dock" id="equity-guess" aria-label="Estimation d’équité">
      <div class="dock-bar">
        <div class="dock-value"><span id="guess-display">50.0</span><small>%</small></div>
        <input id="guess" class="guess-slider" type="range" min="0" max="100" step="0.5" value="50" aria-label="Équité hero" />
        <div class="dock-actions">
          <button type="button" class="btn btn-dock btn-primary" id="btn-check">Valider</button>
          <button type="button" class="btn btn-dock btn-ghost" id="btn-next">Suivant</button>
        </div>
      </div>
      <div class="progress" id="progress" hidden><span></span></div>
    </aside>
  `,U(),q(),G(),Z(!0)}function H(e){return document.getElementById(e)}function U(){document.querySelectorAll(`.mode-btn`).forEach(e=>{e.addEventListener(`click`,()=>{D=e.dataset.mode,G(),Z(!0)})}),H(`btn-next`).addEventListener(`click`,()=>Z(!0)),H(`btn-check`).addEventListener(`click`,()=>void Q()),H(`guess`).addEventListener(`input`,X),H(`guess`).addEventListener(`keydown`,e=>{e.key===`Enter`&&Q()}),X(),H(`preset`).addEventListener(`change`,e=>{let t=e.target,n=t.value,r=t.selectedOptions[0]?.textContent?.trim()||n;t.value=``,n&&W(n,r)}),H(`btn-pool-all`).addEventListener(`click`,()=>{for(let e of M)e.enabled=!0;q()}),H(`btn-pool-none`).addEventListener(`click`,()=>{for(let e of M)e.enabled=!1;q()}),H(`btn-pool-add`).addEventListener(`click`,()=>{let e=H(`custom-range`);W(e.value.trim()),e.value=``}),H(`custom-range`).addEventListener(`keydown`,e=>{if(e.key!==`Enter`)return;let t=H(`custom-range`);W(t.value.trim()),t.value=``}),H(`range-pool`).addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-remove]`);if(n){let e=n.dataset.remove;M=M.filter(t=>t.id!==e),q();return}let r=t.closest(`[data-range-id]`);if(!r)return;let i=r.dataset.rangeId,a=M.find(e=>e.id===i);a&&(a.enabled=!a.enabled,q())})}function W(e,t){if(!e){H(`pool-hint`).textContent=`Entre une range (notation Equilab).`,H(`pool-hint`).classList.add(`err`);return}let n=b(e);if(n.error||v(n.matrix)===0){H(`pool-hint`).textContent=n.error||`Range vide.`,H(`pool-hint`).classList.add(`err`);return}let r=S(n.matrix),i=M.find(t=>t.text===r||t.text===e);if(i){i.enabled=!0,q(),H(`pool-hint`).textContent=`"${i.name}" déjà dans le pool — activée.`,H(`pool-hint`).classList.remove(`err`);return}let a=t&&t!==e?t:r.length>28?`${r.slice(0,26)}…`:r;M.push({id:`custom-${N++}`,name:a,text:r,enabled:!0}),q()}function G(){document.querySelectorAll(`.mode-btn`).forEach(e=>{e.classList.toggle(`active`,e.dataset.mode===D)});let e=D===`range`;H(`range-panel`).classList.toggle(`hidden`,D===`hand`),H(`villain-label`).textContent=D===`hand`?`Villain`:`Range`,document.querySelector(`.matchup`)?.classList.toggle(`matchup--range`,e)}function K(){return M.filter(e=>e.enabled)}function q(){let e=H(`range-pool`);e.innerHTML=M.map(e=>{let t=e.id.startsWith(`custom-`);return`<button type="button" class="range-chip${e.enabled?` on`:``}" data-range-id="${e.id}" title="${e.text}">
        <span class="range-chip-check" aria-hidden="true">${e.enabled?`✓`:``}</span>
        <span class="range-chip-name">${e.name}</span>
        ${t?`<span class="range-chip-remove" data-remove="${e.id}" title="Retirer">×</span>`:``}
      </button>`}).join(``);let t=K().length,n=H(`pool-hint`);n.classList.toggle(`err`,t===0),n.textContent=t===0?`Sélectionne au moins une range.`:`${t} range${t>1?`s`:``} · tirage aléatoire`}function J(e,t){let n=b(e);return n.error||v(n.matrix)===0?!1:(A=n.matrix,j=t,!0)}function Y(){let e=K();return e.length===0?null:e[Math.random()*e.length|0]}function X(){let e=H(`guess`),t=Number(e.value);H(`guess-display`).textContent=t.toFixed(1);let n=(t-Number(e.min))/(Number(e.max)-Number(e.min))*100;e.style.setProperty(`--guess-pct`,`${n}%`)}function Z(e){if(F)return;if(P=!1,D===`hand`)O=o(),k=o(O),j=``;else{let e=Y();if(!e){q(),H(`result`).classList.add(`show`),H(`result`).innerHTML=`<div class="delta bad">Sélectionne au moins une range d’entraînement.</div>`;return}if(!J(e.text,e.name)){H(`result`).classList.add(`show`),H(`result`).innerHTML=`<div class="delta bad">Range invalide : ${e.name}</div>`;return}let t=!1;for(let e=0;e<60;e++)if(O=o(),g(A,O).length>0){t=!0;break}if(!t){H(`result`).classList.add(`show`),H(`result`).innerHTML=`<div class="delta bad">Impossible de tirer un hero compatible avec cette range.</div>`;return}k=O}ne();let t=H(`guess`);t.value=`50`,t.disabled=!1,X(),H(`btn-check`).disabled=!1,$(!1),H(`progress`).hidden=!0,e&&(H(`result`).classList.remove(`show`),H(`result`).innerHTML=``)}function te(){let e=j||`Range`,t=_(A,O),n=``;for(let e=0;e<13;e++)for(let t=0;t<13;t++){let r=A[e][t],i=e===t?`pair`:t>e?`suited`:`offsuit`,a=h(e,t);n+=`<span class="mini-cell ${i}${r?` on`:``}" title="${a}">${a}</span>`}return`<div class="range-face" aria-label="Range villain ${e}">
    <div class="mini-matrix">${n}</div>
    <div class="range-face__meta">${e} · ${t} combos</div>
  </div>`}function ne(){H(`hero-cards`).innerHTML=B(O[0],0,0)+B(O[1],70,1),D===`hand`?H(`villain-cards`).innerHTML=B(k[0],140,0)+B(k[1],210,1):H(`villain-cards`).innerHTML=te()}async function re(e,t){let n=g(m(A),O);if(n.length===0)throw Error(`Aucun combo villain possible (card removal).`);return(await f(O,n,t,e)).equity}async function Q(){if(F||P)return;let e=H(`guess`),t=Number(e.value);if(!Number.isFinite(t)||t<0||t>100)return;F=!0,e.disabled=!0,H(`btn-check`).disabled=!0;let n=H(`progress`),r=n.querySelector(`span`);n.hidden=!1,r.style.width=`0%`;let i=(e,t)=>{r.style.width=`${Math.min(100,e/t*100)}%`};try{let e;e=D===`hand`?(await d(O,k,i)).equity:await re(i,R),r.style.width=`100%`,P=!0,ie(t,e),$(!0)}catch(t){H(`result`).classList.add(`show`),H(`result`).innerHTML=`<div class="delta bad">${t instanceof Error?t.message:String(t)}</div>`,e.disabled=!1,H(`btn-check`).disabled=!1,$(!1)}finally{F=!1}}function $(e){let t=H(`btn-check`),n=H(`btn-next`);t.classList.toggle(`btn-primary`,!e),t.classList.toggle(`btn-ghost`,e),n.classList.toggle(`btn-primary`,e),n.classList.toggle(`btn-ghost`,!e),n.classList.toggle(`btn-dock--pulse`,e)}function ie(e,t){let n=Math.abs(e-t),r=n<=L;I.rounds++,I.equityRounds++,I.sumAbsError+=n,r&&I.hits++,ae();let i=`bad`,a=`Loin`;n<=L?(i=`good`,a=`Bien vu`):n<=L*2&&(i=`mid`,a=`Proche`);let o=H(`result`);o.classList.add(`show`),o.innerHTML=`
    <div class="equity">${t.toFixed(1)}%</div>
    <div class="delta ${i}">${a}</div>
    <div class="meta">
      Estimation : <strong>${e.toFixed(1)}%</strong>
      · écart <strong>${n.toFixed(1)}</strong> pt${n>=1.05?`s`:``}
    </div>
  `}function ae(){if(H(`stat-rounds`).textContent=String(I.rounds),I.rounds===0){H(`stat-acc`).textContent=`—`,H(`stat-err`).textContent=`—`;return}H(`stat-acc`).textContent=`${(I.hits/I.rounds*100).toFixed(0)}%`,H(`stat-err`).textContent=I.equityRounds>0?`${(I.sumAbsError/I.equityRounds).toFixed(1)}`:`—`}V();
//# sourceMappingURL=index-ffGzDjc9.js.map