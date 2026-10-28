// Small, self-hosted outline icon set. SVG paths use a consistent 24px grid.
const shapes = {
  book: '<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1ZM12 6v14"/>',
  shirt: '<path d="m8 3-6 5 4 4 2-2v11h8V10l2 2 4-4-6-5c-2 3-6 3-8 0Z"/>',
  gift: '<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M12 9v12M3 13h18M12 9C8 9 6 7 7 5c2-3 5 2 5 4ZM12 9c4 0 6-2 5-4-2-3-5 2-5 4Z"/>',
  coffee: '<path d="M4 8h13v7a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V8ZM17 9h2a3 3 0 0 1 0 6h-2M7 3v2M12 3v2"/>',
  bike: '<circle cx="5" cy="17" r="4"/><circle cx="19" cy="17" r="4"/><path d="m5 17 5-9 4 9H5m9 0 5-9m-9 0H7m8-4h4"/>',
  disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3a9 9 0 0 1 9 9"/>',
  flower: '<circle cx="12" cy="12" r="2"/><circle cx="12" cy="6" r="3"/><circle cx="18" cy="12" r="3"/><circle cx="12" cy="18" r="3"/><circle cx="6" cy="12" r="3"/>',
  pizza: '<path d="M3 4c8-3 15-3 18 0L12 22 3 4Z"/><path d="M6 10c4-2 9-2 12 0"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="16" r="1"/>',
  bread: '<path d="M4 10a5 5 0 0 1 6-6 6 6 0 0 1 8 2 4 4 0 0 1 2 7v8H4V10Z"/><path d="M10 9v7M15 9v7"/>',
  gem: '<path d="M6 3h12l5 6-11 13L1 9 6 3ZM1 9h22M9 3 7 9l5 13 5-13-2-6"/>',
  scissors: '<circle cx="5" cy="6" r="3"/><circle cx="5" cy="18" r="3"/><path d="m8 8 13 13M8 16 21 3"/>',
  leaf: '<path d="M20 4C9 3 3 9 4 17c8 4 17-3 16-13ZM4 21c3-7 8-10 13-13"/>',
  candy: '<path d="M7 9 2 6l1 5-1 5 5-3M17 9l5-3-1 5 1 5-5-3"/><rect x="7" y="7" width="10" height="10" rx="3"/>',
 
  telescope: '<path d="m4 5 12-3 4 8-12 3z"/><path d="m8 13 3 3"/><path d="m16 11-3 5"/><path d="m12 16-4 6"/><path d="m12 16 4 6"/><path d="M6 18h12"/>',
  drama: '<path d="M3 4h10v7c0 4-2 7-5 8-3-1-5-4-5-8V4Z"/><path d="M6 8h.01M10 8h.01M6 13q2 2 4 0"/><path d="M13 6h8v7c0 4-2 7-5 8-1.5-.5-2.7-1.5-3.5-3"/><path d="M16 10h.01M19 10h.01M15 16q2-2 4 0"/>',
  music: '<path d="M9 18V5l12-2v13"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="18" cy="16" rx="3" ry="2"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 1.7-3c-.6-1-.2-2 1-2H19a3 3 0 0 0 3-3 10 10 0 0 0-10-10Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="11" cy="7.5" r="1"/><circle cx="16" cy="8.5" r="1"/>',
  science: '<path d="M9 3h6M10 3v7l-6 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-9V3"/><path d="M7 16h10"/>',
  history: '<path d="M3 10h18L12 3 3 10ZM5 10v10M10 10v10M14 10v10M19 10v10M3 21h18"/>',
  produce: '<path d="M3 11h18l-2 10H5L3 11Z"/><path d="M7 11 10 5M17 11l-3-6M9 15v3M15 15v3"/><path d="M7 9C4 7 5 4 8 4c2 0 2 2 2 4M13 7c-1-3 1-5 4-5 0 3-1 5-4 5Z"/>',
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
  const org=String(event.organization||'')+' '+String(event.venue||'');
  const title=String(event.title||'');
  if (/lowell observatory/i.test(org)) return 'telescope';
  if (/\b(film|cinema|screening|movie)\b/i.test(title)) return 'film';
  if (/\b(concert|music|band|jazz|symphony|orchestra|recital|choir)\b/i.test(title)) return 'music';
  if (/\b(play|theatre|theater|performance|dance|ballet|comedy|improv)\b/i.test(title)) return 'drama';
  if (/\b(gallery|exhibit|painting|photography|artwalk)\b/i.test(title)) return 'palette';
  return categoryIcon(event.category);
}
export function categoryIcon(category) {
  return ({
    'Art':'palette',
    'Music':'music',
    'Theater':'drama',
    'Science':'science',
    'History':'history',
    'Makers':'makers',
    'Markets':'produce',
    'Literature':'book'
  })[category] || 'pin';
}
export function placeIcon(type) {
  const c=String(type).toLowerCase();
  if(/bookstore/.test(c))return 'book';
  if(/clothing|boutique|apparel/.test(c))return 'shirt';
  if(/gift/.test(c))return 'gift';
  if(/art galler/.test(c))return 'palette';
  if(/art studio|art supplies|creative/.test(c))return 'makers';
  if(/coffee/.test(c))return 'coffee';
  if(/pizza/.test(c))return 'pizza';
  if(/bike|running|outdoor/.test(c))return 'bike';
  if(/record|music store/.test(c))return 'disc';
  if(/floral/.test(c))return 'flower';
  if(/garden|plant/.test(c))return 'leaf';
  if(/bakery/.test(c))return 'bread';
  if(/jewel/.test(c))return 'gem';
  if(/sewing|fabric/.test(c))return 'scissors';
  if(/chocolate|candy/.test(c))return 'candy';
  if(/restaurant|breakfast|barbecue|burger/.test(c))return 'restaurant';
  if(/food|farm|butcher|juice/.test(c))return 'food';
  return 'shop';
}
