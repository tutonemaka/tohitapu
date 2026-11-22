const CACHE="tohitapu-8fd12d92";
const FILES=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "data/1CH.json", "data/1CO.json", "data/1JN.json", "data/1KI.json", "data/1PE.json", "data/1SA.json", "data/1TH.json", "data/1TI.json", "data/2CH.json", "data/2CO.json", "data/2JN.json", "data/2KI.json", "data/2PE.json", "data/2SA.json", "data/2TH.json", "data/2TI.json", "data/3JN.json", "data/ACT.json", "data/AMO.json", "data/COL.json", "data/DAN.json", "data/DEU.json", "data/ECC.json", "data/EPH.json", "data/EST.json", "data/EXO.json", "data/EZK.json", "data/EZR.json", "data/GAL.json", "data/GEN.json", "data/HAB.json", "data/HAG.json", "data/HEB.json", "data/HOS.json", "data/ISA.json", "data/JAS.json", "data/JDG.json", "data/JER.json", "data/JHN.json", "data/JOB.json", "data/JOL.json", "data/JON.json", "data/JOS.json", "data/JUD.json", "data/LAM.json", "data/LEV.json", "data/LUK.json", "data/MAL.json", "data/MAT.json", "data/MIC.json", "data/MRK.json", "data/NAM.json", "data/NEH.json", "data/NUM.json", "data/OBA.json", "data/PHM.json", "data/PHP.json", "data/PRO.json", "data/PSA.json", "data/PSA_titles.json", "data/REV.json", "data/ROM.json", "data/RUT.json", "data/SNG.json", "data/TIT.json", "data/ZEC.json", "data/ZEP.json"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{
    if(res.ok&&new URL(e.request.url).origin===location.origin){const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}
    return res}).catch(()=>caches.match("index.html"))))
});
