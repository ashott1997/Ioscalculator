

	function Loading(){
		document.getElementById("monitor_eval").style.display = "none";
	}

	function Clicked(this_teg){
		document.getElementById("monitor").value += this_teg.value;
		
	}
	
	function Eval(eval_tag){
		document.getElementById("monitor_eval").value = eval(document.getElementById("monitor").value);
		document.getElementById("monitor").style.display = "none";
		document.getElementById("monitor_eval").style.display = "block";
	}
	
	function Clear(this_clear){
		location.reload();
	}
