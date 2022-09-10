const fs=require('fs')


const navoiy="HTML Элемент** <script> **используется для встраивания или подключения исполняемого JavaScript кода. Элемент <script> также может использоваться с другими языками, такими как GLSL (en-US) от WebGL."

function foo(error){
    console.log('Fayl muvofaqiyatli qo`shildi');
    console.log(error);
}
function bar(error){
    console.log('Fayl o`chirildi');
    console.log(error);
}

fs.writeFile("script.txt",navoiy,foo)
//fs.rm("navoiy-gazallari.txt",bar)