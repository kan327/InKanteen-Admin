export default function msgHandler(msg: string, type: string){
  console.log(`--------UI Component msg (${type})--------`);
  console.log(msg);
  alert(msg);
  console.log("--------DONE--------");
}