const age = document.getElementById("myrange")
age.addEventListener("input",function(){
    document.getElementById("age_display").textContent = age.value;
})


function bmi(){
    const wt = document.getElementById("weight").value
    const  weight = parseInt(wt)

    document.getElementById("weight").value=""
    
    const ht = document.getElementById("height").value
    const  height = parseInt(ht)*0.01
    
    document.getElementById("height").value=""

    const bmi = weight/(height*height)

    const status = document.getElementById("status")
    status.style.display = "block"

    if(bmi<=16){
        status.innerHTML = `<h3>${bmi.toFixed(1)}</h3><p><i>Severe Thinness</i></p>`
    }

    else if(bmi>16 && bmi<=17){
        status.innerHTML = `<h3>${bmi.toFixed(1)}</h3><p><i>Moderate Thinness</i></p>`
    }

    else if(bmi>17 && bmi<=18.5){
        status.innerHTML = `<h3>${bmi.toFixed(1)}</h3><p><i>Mild Thinness</i></p>`
    }

    else if(bmi>18.5 && bmi<=25){
        status.innerHTML = `<h3>${bmi.toFixed(1)}</h3><p><i>Normal</i></p>`
    }

    else if(bmi>25 && bmi<=30){
        status.innerHTML = `<h3>${bmi.toFixed(1)}</h3><p><i>Overweight</i></p>`
    }

    else if(bmi>30 && bmi<=35){
        status.innerHTML = `<h3>${bmi.toFixed(1)}</h3><p><i>Obese Class 1</i></p>`
    }

    else if(bmi>35 && bmi<=40){
        status.innerHTML = `<h3>${bmi.toFixed(1)}</h3><p><i>Obese Class 2</i></p>`
    }

    else{
        status.innerHTML = `<h3>${bmi.toFixed(1)}</h3><p><i>Obese Class 3</i></p>`
    }

    const slider = document.getElementById("myrange")

    slider.value = slider.defaultValue
    document.getElementById("age_display").textContent = slider.value;


    //console.log(weight , height) 
}