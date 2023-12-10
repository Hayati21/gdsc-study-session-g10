// print odd number
const num = prompt('Enter a number')

function printOdd(){
    for( let i=0;i<=num;i++){
        if (i%2!==0){
            console.log(i)
        }
        else{
            continue;
        }
    }
}
odd = printOdd()
