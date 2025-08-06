// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosCantidad =0;

function agregarAmigo()
    {        
        let amigo_input = document.getElementById("amigo").value.trim();
        if(!isNaN(amigo_input))
        {
            alert("¡Escribe un nombre!")
        
         } 
         else if(amigos.includes(amigo_input))
            {
              alert("¡Ese amigo ya existe!")
        }
         else if(amigo_input === '')
            {
                alert("¡Escribe un nombre!");
        }
        else{
                amigos.push(amigo_input);
                update_list();  
                amigosCantidad++;             
            }     
        
        limpiarCaja();
    }
function element_text(elemento, texto)  //solo eventos
    {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
    }//funcion texts de HTML elements
function limpiarCaja()
    {
        let texto_caja = document.querySelector('#amigo').value = '';
    }// Clean boxes