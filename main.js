window.onload = function(){
var range = document.getElementById("Range");
var namber = document.getElementById("Namber");
var value1 = document.querySelector('.value1')
var commission = document.querySelector('.commission')
namber.value = range.value; 

function checkComissin(value){
	var commissValue;
	if (value<20){
        	commissValue=2;	
        } else if (value>=20 && value<50) {
        	commissValue=4;
        } else if (value>=50 && value<75) {
        	commissValue=6;
        } else if(value>=75) {
        	commissValue=8;
        }
    return commissValue;    
}


range.addEventListener('click', function(event){
        namber.value = this.value;
        value1.style.height = this.value+'px';
        commission.style.height=checkComissin(this.value)+'px';
        console.log('commission: '+commission.style.height);
    });


// namber.addEventListener('keypress', function(event){
// 	if (event.key === "Enter"){
// 		range.value = this.value;
// 		value1.style.height = this.value+'px';

// 		commission.style.height=checkComissin(this.value)+'px';
//         console.log('commission: '+commission.style.height);
// 	};
	
// });

};
