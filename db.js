import fs from 'fs'; import crypto from 'crypto';
const dir='.data', file=dir+'/store.json'; fs.mkdirSync(dir,{recursive:true});
export const db={data:null};
const tables=['users','companies','assignments','products','prices','shops','orders','order_items','stock','payments','handovers','audit_log'];
export function init(){if(fs.existsSync(file))db.data=JSON.parse(fs.readFileSync(file));else db.data=Object.fromEntries(tables.map(x=>[x,[]]));save()}
export function save(){fs.writeFileSync(file,JSON.stringify(db.data,null,2))}
export function id(table){return (db.data[table].reduce((m,x)=>Math.max(m,x.id||0),0)+1)}
export function add(table,obj){obj.id=id(table);db.data[table].push(obj);save();return obj}
export function find(table,idv){return db.data[table].find(x=>x.id==idv)}
export function audit(actor,action,entity,entity_id,old_json=null,new_json=null){add('audit_log',{actor_id:actor,action,entity,entity_id,old_json,new_json,created_at:new Date().toISOString()})}
export function hashPassword(p,salt=crypto.randomBytes(16).toString('hex')){const hash=crypto.pbkdf2Sync(p,salt,120000,32,'sha256').toString('hex');return salt+':'+hash}
export function verifyPassword(p,stored){const [salt,hash]=stored.split(':');const h=crypto.pbkdf2Sync(p,salt,120000,32,'sha256').toString('hex');return crypto.timingSafeEqual(Buffer.from(h),Buffer.from(hash))}
