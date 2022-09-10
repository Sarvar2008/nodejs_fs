const fs=require('fs');
function bazz(error, buffer) {
    let s=buffer.toString()
    console.log('DATA:',s);
    if (error==null){
        console.log('Контрол:','xatolik kuzatilmadi');    
    }
else{
    console.log('Контрол:',error);
}
    
}
fs.readFile('script.txt',bazz)