
function validat() {
    

    const x = document.getElementById("name").value
    const y = document.getElementById("password").value
    const z = document.getElementById("email").value
    const i=document.getElementById("number").value
    const nameerror = document.getElementById("name-error")
    const pws = document.getElementById("pws-error")
    const emailerror = document.getElementById("email-error")
    const name=document.getElementById("cantact-error")

     nameerror.textContent = "";
     pws.textContent = "";
    emailerror.textContent = "";
    name.textContent="";


    if (x == null || x=="") {
        //alert("pleas cheick")
        nameerror.textContent="user name required"
        return false;
    }

  
    if (y.length<8) {
        //alert("pleas cheick")
       pws.textContent="password atleast eight character"
        return false;
    }

    if (z=="" || !z.includes("@")) {
        //alert("pleas cheick")
       emailerror.textContent="email is required"
        return false;
    }
   
    if (i.length<10) {
        //alert("pleas cheick")
       name.textContent="plase check tha number"
        return false;
    }
        
return true
}