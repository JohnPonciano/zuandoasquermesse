
    
    
    function cacule(soma,pessoas) {
            var pessoas = document.getElementById("pessoas").value;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        total = soma.reduce(reducer);
        final = total/pessoas;
        window.document.write   (`São ${pessoas} pessoas `)
        window.document.write("<br>")
        window.document.write("O resultado final é aproximadamente de ",final.toFixed(0));
    }

    function addtolist(soma) {
        var soma = [];
        soma.push(document.getElementById("numeros").value);
        console.log(soma);  
    }

        

    

    
    
    
