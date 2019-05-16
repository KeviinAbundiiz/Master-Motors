try
{

	if(window.openDatabase)
	{
        var shortName   =  'BDC';
        var version   =  '1.0';
        var displayName  =  'Base_Datos_Carros';
        var maxSize   =  65536; // in bytes
        db    =  openDatabase(shortName, version, displayName, maxSize);
        //alert('Sqlite Database created');
    }
    db.transaction(function(tx)
    {
    	tx.executeSql("CREATE TABLE IF NOT EXISTS Login (Contrasena TEXT PRIMARY KEY)");
    });
    db.transaction(function(tx)
    {
        tx.executeSql("CREATE TABLE IF NOT EXISTS BO_GA (Bonificaciones NUMERIC, Gastos NUMERIC)");
    });
    db.transaction(function(tx)
    {
        tx.executeSql("SELECT * FROM BO_GA",[],function(tx,SetResult)
        {
            var rows = SetResult.rows;
            if(SetResult.rows[0] == undefined)
            {
                InsertaCerosEnBOGA();
            }
        });
    });
    function InsertaCerosEnBOGA()
    {
        db.transaction(function(tx)
        {
            tx.executeSql("INSERT INTO BO_GA VALUES(0,0)");
        });
    }
    db.transaction(function(tx)
    {
        tx.executeSql("UPDATE BO_GA SET Bonificaciones=0 ,Gastos=0");
    });
    db.transaction(function(tx)
    {
    	tx.executeSql("SELECT * FROM Login",[],function(tx,SetResult)
    	{
    		var rows = SetResult.rows;
    		console.log("SETRESULT.ROW = "+ rows[0]);
    		if(SetResult.rows[0] == undefined)
    		{
    			InsertaDatosPredeterminados();
    		}
    	});
    });

    function InsertaDatosPredeterminados()
    {
    	alert("Insertando Contraseña Predeterminada");
    	db.transaction(function(tx)
    	{
    		tx.executeSql("INSERT INTO Login VALUES('1234')");
    	});   
    }
}
catch(e)
{
 alert(e);
}


function ValidarContrasena() {
	//alert("Intentando validar el login");

	var contra = document.getElementById("contrasena").value;
    
	//alert("Texto ingresado en el campo de texto de la contraseña: "+contra);

	if(contra == ""){
        alert("Campo de contraseña vacio.");
        
    }

    else{
        db.transaction(function(tx)
    {
        tx.executeSql("SELECT * FROM Login",[],function(tx,SetResult)
        {
            var rows = SetResult.rows;
            for(var i = 0; i < rows.length; i++)
            {
                
               console.log("Row = " + i + " Contraseña = " + SetResult.rows.item(i).Contrasena);

               if(contra == SetResult.rows.item(i).Contrasena){
                window.location = "Pagina_Principal.html";
               }

               else {
                alert("Contraseña Incorrecta");
                document.getElementById("contrasena").value = "";
               }
            }

        });
    });
    }
	
}




function CambiarContrasena(){

    var contra = document.getElementById("contrasena").value;
    var contranueva = document.getElementById("contrasenanueva").value;
    var confirmacioncontra = document.getElementById("confirmarcontrasenanueva").value;

    if(contra == "" || contranueva == "" || confirmacioncontra == ""){
        alert("Hay campos vacios, favor de llenarlos");
        
    }

    else{
        db.transaction(function(tx)
        {
            tx.executeSql("SELECT * FROM Login",[],function(tx,SetResult)
            {
                var rows = SetResult.rows;
                for(var i = 0; i < rows.length; i++)
                {

                 console.log("Row = " + i + " Contraseña = " + SetResult.rows.item(i).Contrasena);

                 if(contra == SetResult.rows.item(i).Contrasena){

                //alert("Contraseña actual correcta: Contra nueva = "+contranueva+ " Confirmación = "+confirmacioncontra);


                if (contra == contranueva){
                    alert("La contraseña no puede ser la misma que la anterior")
                    document.getElementById("contrasenanueva").style.background="red";
                    document.getElementById("contrasenanueva").style.color="white";
                    document.getElementById("contrasenanueva").value="";

                    document.getElementById("confirmarcontrasenanueva").value="";

                    document.getElementById("contrasena").style.background="#D7D3D3";
                    document.getElementById("contrasena").style.color="black";
                }
                else{

                    if (contranueva == confirmacioncontra){

                        //alert("La contraseña nueva y confirmación son iguales");

                        //Aquí debe actualizar la contraseña

                        
                        db.transaction(function(tx)
                        {
                            tx.executeSql("UPDATE Login SET Contrasena = '"+contranueva+"' WHERE Contrasena = '"+contra+"'");
                            console.log("UPDATE Login SET Contrasena = '"+contranueva+"' WHERE Contrasena = '"+contra+"'");
                        });

                        alert("Actualización de Contraseña Exitosa");  

                        document.getElementById("contrasena").value = "";
                        document.getElementById("contrasenanueva").value = "";
                        document.getElementById("confirmarcontrasenanueva").value = "";

                        document.getElementById("confirmarcontrasenanueva").style.background="#D7D3D3";
                        document.getElementById("confirmarcontrasenanueva").style.color="black";

                        document.getElementById("contrasena").style.background="#D7D3D3";
                        document.getElementById("contrasena").style.color="black";


                        //window.location = "index.html";

                        //location.reload();
                    }
                    else{
                        alert("La contraseña nueva y confirmación no son iguales");
                        document.getElementById("confirmarcontrasenanueva").style.background="blue";
                        document.getElementById("confirmarcontrasenanueva").style.color="white";
                        document.getElementById("confirmarcontrasenanueva").value="";

                        document.getElementById("contrasenanueva").style.background="#D7D3D3";
                        document.getElementById("contrasenanueva").style.color="black";
                    }

                }

            }

            else {
                alert("Contraseña actual incorrecta");
                document.getElementById("contrasena").style.background="green";
                document.getElementById("contrasena").style.color="white";
                document.getElementById("contrasena").value="";
            }
        }

    });
        });
    }    
}












