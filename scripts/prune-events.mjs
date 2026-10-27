import { readdir, readFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';
const dir = new URL('../src/data/events/', import.meta.url);
const localDate = (value) => { const parts = new Intl.DateTimeFormat('en-US',{timeZone:'America/Phoenix',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(value));const p = type => parts.find(x=>x.type===type)?.value;return `${p('year')}-${p('month')}-${p('day')}`; };
const today = localDate(new Date());
let removed=0, kept=0;
for(const f of await readdir(dir)){
 if(!f.endsWith('.json'))continue;
 const path=join(dir.pathname,f);
 let event;
 try{event=JSON.parse(await readFile(path,'utf8'));}catch(e){throw new Error('Invalid event JSON: '+f,{cause:e});}
 if(!event.start || Number.isNaN(Date.parse(event.start)))throw new Error('Invalid start timestamp in '+f);
 if(event.end && Number.isNaN(Date.parse(event.end)))throw new Error('Invalid end timestamp in '+f);
 const last=event.end||event.start;
 const finalDay=localDate(last);
 if(finalDay<today){await unlink(path);console.log('Deleted '+f);removed++}else kept++;
}
console.log('Pruned '+removed+' expired events; '+kept+' remaining.');
