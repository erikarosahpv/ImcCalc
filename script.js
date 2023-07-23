const form = document.getElementById('form');


form.addEventListener('submit', function(event){
    event.preventDefault();    

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = "";

    document.getElementById('infos').classList.remove('hidden');

    if(imc < 18.5){
        description = 'Cuidado,você está abaixo do peso!'
    } else if(imc >= 18.5 && imc <= 25){
        description = 'Ótimo, você está no peso ideal!'
    } else if(imc > 25 && imc <= 30){
        description = 'Cuidado,você está sobrepeso!'
    } else if(imc > 30 && imc <= 40){
        description =  'Cuidado, você está em obesidade!'
    }else{
        description = 'Cuidado, você está em obesidade grave!'
    }

    value.textContent = imc.replace('.',',');
    document.getElementById('description').textContent = description
})


