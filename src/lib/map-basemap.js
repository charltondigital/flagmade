// Selected FlagMade map aesthetic: MapTiler Basic (option 4).
// Set PUBLIC_MAPTILER_KEY in Cloudflare Pages to use licensed tiles;
// retain operational OSM fallback until configured.
export function addFlagMadeBasemap(L,map){
 const key=import.meta.env.PUBLIC_MAPTILER_KEY?.trim();
 if(key){
  return L.tileLayer('https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key='+encodeURIComponent(key),{
   maxZoom:19,attribution:'&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',className:'flagmade-tiles flagmade-maptiler-basic'
  }).addTo(map);
 }
 return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  maxZoom:19,attribution:'&copy; OpenStreetMap contributors',className:'flagmade-tiles flagmade-map-muted'
 }).addTo(map);
}
