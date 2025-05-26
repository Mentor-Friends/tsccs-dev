import { Concept } from "../DataStructures/Concept";

export function CreateDefaultConcept(){
    let created_on = formatDate(new Date());
    let updated_on = formatDate(new Date());
    let concept = new Concept(0,0,0,0,0,0,0,0,"0",0,0,0,0,0,0,false,created_on,updated_on);
    return concept;
}


export function formatDate(date:Date) {
  const month = date.getMonth() + 1; // months are 0-indexed
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12

  // Pad minutes and seconds
  const pad = (n:any) => n.toString().padStart(2, '0');

  return `${month}/${day}/${year} ${hours}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}