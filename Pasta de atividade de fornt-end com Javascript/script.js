const inputtexto=document.getElementById('texto');
const inputsenha=document.getElementById('senha');
const button=document.getElementById('botao');
const button1=document.getElementById('senha02');

button.onclick=() => {
    alert(`Digitado: ${inputtexto.value}  \n Sua senha foi: ${inputsenha.value} `);
    //alert(`Sua senha foi: ${inputsenha.value}`);
   // alert('Digitado' + inputtexto.value);
}
button1.onclick=() => {
    alert(`Digitado: ${inputtexto.value}  \n Sua senha foi: ${inputsenha.value} `);
    //alert(`Sua senha foi: ${inputsenha.value}`);
   // alert('Digitado' + inputtexto.value);
}