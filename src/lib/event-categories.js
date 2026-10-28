// Single-category taxonomy for the public events calendar.
// Original feed values are retained as sourceCategory for auditing.
// Keep this mapping shared by all calendar/list displays and future imports.
export const eventCategories = ['Art','Music','Theater','Science','History','Makers','Markets','Literature'];

export function classifyEvent(event) {
  const text = [event.title,event.organization,event.venue,...(event.tags||[])].filter(Boolean).join(' ').toLowerCase();
  const source = event.category || '';

  // Clearly identifiable subjects win over broad legacy feed categories.
  if (/\b(book signing|book launch|book club|author talk|author reading|poetry|poet|literary|literature|storytelling|story time|storytime|reading series|writers? workshop|writers? group)\b/i.test(text)) return 'Literature';
  if (/\b(lowell observatory|astronomy|astronomer|planetarium|stargazing|star party|telescope|science|scientific|physics|biology|geology|discovery|research talk|stem)\b/i.test(text)) return 'Science';
  if (/\b(history|historical|heritage|archaeology|archeology|historic tour|museum of northern arizona|heritage festival)\b/i.test(text)) return 'History';
  if (/\b(farmers? market|flea market|market day|makers? market|craft fair|vendor fair|artisan market|holiday market|bazaar|farmstand|farm stand|food festival|food market)\b/i.test(text)) return 'Markets';
  if (/\b(theat(?:er|re)|stage play|musical theater|musical theatre|playwright|ballet|dance performance|dance recital|improv|comedy show|stand.up|film screening|film festival|movie screening|cinema)\b/i.test(text)) return 'Theater';
  if (/\b(concert|live music|jazz|symphony|orchestra|choir|choral|recital|bluegrass|open mic|songwriter|band performance|acoustic set|music festival|music performance)\b/i.test(text)) return 'Music';
  if (/\b(artwalk|art walk|gallery|exhibition|exhibit|painting|printmaking|photography|watercolor|sculpture|drawing|visual art|fine art|art show|art class|art workshop|ceramics exhibit)\b/i.test(text)) return 'Art';
  if (/\b(woodwork|sewing|quilting|knitting|weaving|pottery class|ceramics class|craft workshop|maker workshop|hands.on workshop|fabric|handmade|maker space|makerspace|fiber arts|crafting)\b/i.test(text)) return 'Makers';

  // Original single-word categories are already valid.
  if (eventCategories.includes(source)) return source;
  // Fallback for legacy category values only; never show paired labels to visitors.
  const legacy = {
    'Arts & Performance':'Art',
    'Science & Discovery':'Science',
    'History & Heritage':'History',
    'Farms & Food':'Markets',
    'Makers & Commerce':'Makers',
  };
  return legacy[source] || 'Art';
}
