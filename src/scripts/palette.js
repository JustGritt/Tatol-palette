console.log("OK");

let val = document.querySelector('input[type="color"]');
    let val2 = document.querySelector('input[type="text"]');
    let bg = document.querySelector('.container');
    
    const regex = /^#[0-9-a-f-A-F]{6}$/;

    val.addEventListener('focusout', function(){

        
        console.log("color :", val.value);
        console.log("text :", val2.value);
        val2.value = val.value;

        
    })

    val2.addEventListener('focusout', function(){
        
        console.log("keypress event");
        
        if((val2.value).match(regex)) {
            console.log("keypress event inner if");
            bg.style.backgroundColor = val2.value;
        } else {
            console.log("keypress event no inner if");
            val2.value = '#000000';
            bg.style.backgroundColor = val2.value;
        }
        
    })
    