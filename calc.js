const layout="123* 456- 123+ C0=/"/**********************************************
                                   *each row is assumed to be 4 columns,
                                   *rows are separate by blanks, 
                                   *an array would be more elegant but this is 
                                   *simplier to manually enter
                                   ************************************************/
const operands=["",""]
let operand=0
let operation
const printLayout=()=>{
    const grid=layout.split(" ");
    for (let i = 0; i < grid.length; i++) {
            let row=document.createElement("tr")
            //console.log(row)
        for (let y = 0; y < grid[i].length; y++) {
            //console.log("   "+grid[i][y])
            cell=document.createElement("td")
            cell.appendChild(document.createTextNode(grid[i][y]))
            cell.classList.add(isNaN(grid[i][y])?"operator":"digit")
            cell.addEventListener("click",keyParser)
            row.appendChild(cell)
        }

        document.querySelector("#calculator").appendChild(row)
    }
}

const keyParser=(e)=>{
    key=e.srcElement.innerText
    if (!(isNaN(key))) {
        operands[operand]=operands[operand].concat(key)
        console.log(operands)
    }else{
        switch (key) {
            case "+":
                operation=test
                break;
            case "-":
                operation=test2
                break;
            
            case "*":

                break;

            case "/":

                break;

            case "C":

                break;
            case "=":
                operation("pampero")
                break;
            default:
                console.log(key)
                break;
        }
    }
}

const sum=(evergreen)=>{console.log(evergreen)}

const multiplication=(evergreen)=>{console.log("test2",evergreen)}

window.addEventListener("load",printLayout)