document.querySelector('input')

const listaDeTeclas=document.querySelectorAll('input[type=button]');

for(let i=0; i<listaDeTeclas.length; i++)
{
   console.log(listaDeTeclas[i].value);  
}
