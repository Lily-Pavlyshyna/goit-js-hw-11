import{i,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();const g="47567407-25ef3519c02546aa2529f6321",f="https://pixabay.com/api/";async function h(t,o=1,n=9){const a=new URLSearchParams({key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o.toString(),per_page:n.toString()}),r=`${f}?${a}`;try{const e=await fetch(r);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`);return await e.json()}catch(e){throw iziToast.error({title:"Fetch Error",message:`Something went wrong: ${e.message}`,position:"topRight",theme:"dark",backgroundolor:"red"}),e}}function y(t){return t.map(({webformatURL:o,largeImageURL:n,tags:a,likes:r,views:e,comments:s,downloads:d})=>`
        <a class="gallery-item" href="${n}">
          <img src="${o}" alt="${a}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${e}</p>
            <p><b>Comments:</b> ${s}</p>
            <p><b>Downloads:</b> ${d}</p>
          </div>
        </a>
      `).join("")}function b(t){t.innerHTML=""}const w=document.querySelector(".search-form"),c=document.querySelector(".gallery"),S=document.querySelector(".loader");let l=1;const $=9;let u;w.addEventListener("submit",L);async function L(t){t.preventDefault();const o=t.currentTarget.elements.searchQuery.value.trim();if(!o){i.error({message:"Please enter a search query!",position:"topRight",theme:"dark",backgroundColor:"red"});return}l=1,b(c);try{p(!0);const{hits:n,totalHits:a}=await h(o,l,$);if(!n.length){i.error({message:"Sorry, there are no images matching your search query.",position:"topRight",theme:"dark",backgroundColor:"red"});return}c.insertAdjacentHTML("beforeend",y(n)),u=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),u.refresh(),i.success({message:`Found ${a} images!`,position:"topRight",theme:"dark"})}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight",theme:"dark",backgroundColor:"red"})}finally{p(!1)}}function p(t){S.style.display=t?"block":"none"}
//# sourceMappingURL=index.js.map
