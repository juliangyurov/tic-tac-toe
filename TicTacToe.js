//unprotected
let timer;
let moveCounter = 0;

const myTable = document.getElementById("tictac");
//const listCells = myTable.querySelectorAll("td");
//listCells.addEventListener("click",getClickedCellId);

//console.log(listCells);

function messageDialog(cell,message){
  if(message === "won"){
    alert(cell.textContent+" has won!");
    clearBoard();
  }else{
    alert("Cats game!");
    clearBoard();
  }
  
};

function clearBoard() {
  const listCells = myTable.querySelectorAll("td"); 
  for (let cell of listCells){
    cell.innerHTML="&nbsp;"
    moveCounter=0;
  };  
};
function checkForWinner(cellId){
  let x = cellId.substring(1);
  let y = cellId.substring(0,1);
  // console.log("x="+x+ " "+"y="+y);
  // console.log(myTable.rows[y].cells[x].innerText);
  
  if((myTable.rows[y].cells[0].innerText === myTable.rows[y].cells[1].innerText && 
    myTable.rows[y].cells[1].innerText === myTable.rows[y].cells[2].innerText)||
    (myTable.rows[0].cells[x].innerText === myTable.rows[1].cells[x].innerText && 
    myTable.rows[1].cells[x].innerText === myTable.rows[2].cells[x].innerText)){
    return true;
  }else if((myTable.rows[0].cells[0].innerText === myTable.rows[1].cells[1].innerText && 
    myTable.rows[1].cells[1].innerText === myTable.rows[2].cells[2].innerText && 
    (myTable.rows[2].cells[2].innerText === "X" || myTable.rows[2].cells[2].innerText === "O") )||
    (myTable.rows[0].cells[2].innerText === myTable.rows[1].cells[1].innerText && 
    myTable.rows[1].cells[1].innerText === myTable.rows[2].cells[0].innerText && 
    (myTable.rows[2].cells[0].innerText === "X" || myTable.rows[2].cells[0].innerText === "O") )){
    return true;
  }
  return false;
};
  
myTable.addEventListener("click",getClickedCellId);

function getClickedCellId(e) {
	
  const listCells = this.querySelectorAll("td"); 
  for (let cell of listCells){
    if(cell.contains(e.target)){
      //console.log(cell.innerHTML);
      if(cell.innerHTML==="&nbsp;"){
        cell.textContent = (moveCounter%2===0) ? "X" : "O";
        cell.style.color = (moveCounter%2===0) ? "red" : "black";
        moveCounter++;
        //console.log(moveCounter);
        
        //Check game status
        if(checkForWinner(cell.id)){
          
           clearTimeout(timer);
           timer = setTimeout(() => {
              messageDialog(cell,"won");
              }, 500);

        }else if(moveCounter >=9 ){
          
            clearTimeout(timer);
            timer = setTimeout(() => {
               messageDialog(cell,"Cats");
               }, 500);

        }
      }
    }
  }
}
