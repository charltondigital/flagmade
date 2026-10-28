// Small, self-hosted outline icon set. SVG paths use a consistent 24px grid.
const shapes = {
  telescope: '<path d="m4 5 12-3 4 8-12 3z"/><path d="m8 13 3 3"/><path d="m16 11-3 5"/><path d="m12 16-4 6"/><path d="m12 16 4 6"/><path d="M6 18h12"/>',
  drama: '<path d="M3 3h18v8c0 6-4 10-9 10S3 17 3 11V3Z"/><path d="M7 8h.01M17 8h.01"/><path d="M8 14c2.5 2 5.5 2 8 0"/>',
  music: '<path d="M9 18V5l12-2v13"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="18" cy="16" rx="3" ry="2"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 1.7-3c-.6-1-.2-2 1-2H19a3 3 0 0 0 3-3 10 10 0 0 0-10-10Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="16" cy="8.5" r="1"/>',
  science: '<path d="M9 3h6M10 3v7l-6 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9V3"/><path d="M7 16h10"/>',
  history: '<path d="M3 10h18L12 3 3 10ZM5 10v10M10 10v10M14 10v10M19 10v10M3 21h18"/>',
  food: '<path d="M12 22V12"/><path d="M12 14c-7 0-9-4-9-9 6 0 9 3 9 9ZM12 11c0-6 3-9 9-9 0 5-2 9-9 9Z"/>',
  makers: '<path d="m5 4 14 16M19 4 5 20"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><path d="M8 16h8"/>',
  shop: '<path d="M4 10v11h16V10M3 10l2-7h14l2 7"/><path d="M3 10c0 3 4 3 4 0 0 3 4 3 4 0 0 3 4 3 4 0 0 3 6 3 6 0"/><path d="M9 21v-7h6v7"/>',
  restaurant: '<path d="M4 3v7a3 3 0 0 0 6 0V3M7 3v19M19 22V3c-4 2-5 6-5 11h5"/>',
  film: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 10h18M7 5l4 5M14 5l4 5"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'
};
export function iconSvg(name, extraClass='') {
  const shape=shapes[name] || shapes.shop;
  return '<svg class="fm-icon '+extraClass+'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+shape+'</svg>';
}
export function eventIcon(event) {
  const org=String(event.organization || '')+' '+String(event.venue || '');
  const title=String(event.title || '');
  if (/lowell observatory/i.test(org)) return 'telescope';
  if (/film|cinema|screening|movie/i.test(title)) return 'film';
  if (/concert|music|band|jazz|symphony|orchestra|live at/i.test(title)) return 'music';
  if (/play|theatre|theater|performance|dance|ballet/i.test(title)) return 'drama';
  if (/art|gallery|exhibit|painting|photograph/i.test(title)) return 'palette';
  switch(event.category) {
    case 'Arts & Performance': return 'palette';
    case 'Science & Discovery': return 'science';
    case 'History & Heritage': return 'history';
    case 'Farms & Food': return 'food';
    case 'Makers & Commerce': return 'makers';
    default: return 'pin';
  }
}
export function categoryIcon(category) {
  return ({'Arts & Performance':'palette','Science & Discovery':'science','History & Heritage':'history','Farms & Food':'food','Makers & Commerce':'makers'})[category] || 'pin';
}
export function placeIcon(type) {
  if (/restaurant/i.test(type))return 'restaurant';
  if (/food|farm/i.test(type))return 'food';
  return 'shop';
}
