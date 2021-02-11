const up_span = document.querySelectorAll(".up span");
const upper_span = document.querySelectorAll(".upper span");
const below_span = document.querySelectorAll(".below span");
const up = document.querySelectorAll(".up");


var up_span_num = [14,0,0,0];

for(let i=0; i<4; i++){
	up_span[i].innerHTML = up_span_num[i];
	upper_span[i].innerHTML = up_span_num[i];
	if(up_span_num>0){
		below_span[i].innerHTML = up_span_num[i] -1; 
	}else if(i!=1){
		below_span[i].innerHTML = 59;
	}else{
		below_span[i].innerHTML = 23;
	}
	
	below_span[0].innerHTML = 13;
	
}

var check_up = [true, true, true, true];
var check_upper = [true, true, true, true];
var check_below = [false, false, false, false];





function animate(){
	requestAnimationFrame(animate);
	change_numbers();
}

function change_numbers(){
	var bottom_array = [];
	var angle_array = [];
	for(let i=0; i<up_span.length; i++){
		var bottom = window.getComputedStyle(up_span[i]).getPropertyValue("bottom");
		bottom = bottom.split("p")[0]*1;
		bottom_array.push(bottom);
		
		var angle = window.getComputedStyle(up[i]).getPropertyValue("transform");
		angle = angle.split(",")[5]*1;
		angle_array.push(angle);
	}
	
	for(let i=0; i<4; i++){
		if(check_up[i]){
			if(bottom_array[i]<64){
				if(up_span_num[i]>0){
					up_span_num[i] --;
				}else if(i!=1){
					up_span_num[i] = 59;
				}else{
					up_span_num[i] = 23;
				}
				
				up_span[i].innerHTML = up_span_num[i];
				check_up[i] = false;
			}
		}
		
		if(bottom_array[i] == 64){
			check_up[i] = true;
		}
		
		
		if(check_upper[i]){
			if(angle_array[i]<-0.6){
				upper_span[i].innerHTML = up_span_num[i];
				check_upper[i] = false;
				check_below[i] = true;
			}
		}
		
		if(angle_array[i]>0){
			check_upper[i] = true;
			if(check_below[i]){
				if(up_span_num[i]!=0){
					below_span[i].innerHTML = up_span_num[i]-1;
				}else if(i!=1){
					below_span[i].innerHTML = 59;
				}else{
					below_span[i].innerHTML = 23;
				}
				
				check_below[i] = false;
				}
		}
		
		
	}
	
	
}



animate();
