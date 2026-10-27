import { readdir, readFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';
const dir = new URL('../src/data/events/', import.meta.url);
const today = new Intl.DateTimeFormat('en-CA',{ timeZone:'America/Phoenix',year:'numeric',month:'2-digit',day:'2-digit' }).format(new Date());
let removed=0, kept=0;
for(const f of await readdir(dir)){
 if(!f.endsWith('.json'))continue;
 const path=join(dir.pathname,f);
 let event;
 try{event=JSON.parse(await readFile(path,'utf8'));}catch(e){throw new Error('Invalid event JSON: '+f,{cause:e});}
 if(!event.start || Number.isNaN(Date.parse(event.start)))throw new Error('Invalid start timestamp in '+f);
 if(event.end && Number.isNaN(Date.parse(event.end)))throw new Error('Invalid end timestamp in '+f);
 const last=event.end||event.start;
 const localDate=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Phoenix',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(last));
 if(localDate<today){await unlink(path);console.log('Deleted '+f);removed++}else kept++;
}
console.log('Pruned '+removed+' expired events; '+kept+' remaining.');
