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
    function update_list()
    {
        const listaHTML = document.getElementById("listaAmigos");
        listaHTML.innerHTML = "";

        for (let i = 0; i < amigos.length; i++)
        {
            const li = document.createElement("li");
            li.textContent = amigos[i]; // Accedemos al amigo con el índice i
            listaHTML.appendChild(li);
        }

    }//actualizar lista inferior
function sortearAmigo()
    {
        if(amigosCantidad == 0)
        {
            alert("No se puede sortear sin nadie!")
        }
        else if (amigosCantidad === 1)
        {
            alert("¡Agrega más amigos!")
        }
        else{
            let sorteoSecreto = Math.floor(Math.random()*amigosCantidad);
            let amigoSecreto = amigos[sorteoSecreto];
            //limpiar 
            resultado.innerHTML = "";
            //mostrar
            resultado.innerHTML = `<li>¡${amigoSecreto} es el amigo secreto!</li>`;
        }         
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