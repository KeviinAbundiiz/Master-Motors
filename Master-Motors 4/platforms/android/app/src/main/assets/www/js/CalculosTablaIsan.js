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
    	tx.executeSql("CREATE TABLE IF NOT EXISTS HotWheels (Nombre_Carro TEXT PRIMARY KEY, "+
    		"Precio_Carro TEXT, Color_Carro TEXT)");
    });
    db.transaction(function(tx)
    {
    	tx.executeSql("CREATE TABLE IF NOT EXISTS ISAN_TABLE (LI NUMERIC, LS NUMERIC, CF NUMERIC,"+
    		" TSELI NUMERIC)");
    });

    db.transaction(function(tx)
    {
    	tx.executeSql("SELECT * FROM ISAN_TABLE",[],function(tx,SetResult)
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
    	alert("Insertando Datos Predeterminados");
    	db.transaction(function(tx)
    	{
    		tx.executeSql("INSERT INTO ISAN_TABLE VALUES(0.01,274964.76,0,2)");
    	});
    	db.transaction(function(tx)
    	{
    		tx.executeSql("INSERT INTO ISAN_TABLE VALUES(274964.77,329957.65,5499.20,5)");
    	});
    	db.transaction(function(tx)
    	{
    		tx.executeSql("INSERT INTO ISAN_TABLE VALUES(329957.66,384950.76,8248.98,10)");
    	});
    	db.transaction(function(tx)
    	{
    		tx.executeSql("INSERT INTO ISAN_TABLE VALUES(384950.77,494936.36,13748.26,15)");
    	});
    	db.transaction(function(tx)
    	{
    		tx.executeSql("INSERT INTO ISAN_TABLE VALUES(494936.37,0,30246.07,17)");
    	});
    }
}
catch(e)
{
 alert(e);
}
LoadIsanTable();
function LoadIsanTable()
{
	var LaTabla = document.getElementById("Tabla_ISAN");
	var tr ='';
	var OnlyOnce = 0;
	db.transaction(function(tx)
	{
		tx.executeSql("SELECT * FROM ISAN_TABLE",[],function(tx,SetResult)
		{
			var rows = SetResult.rows;
			for(var i = 0; i < rows.length; i++)
			{
				if(OnlyOnce == 0)
				{
					tr+='<tr>';
					tr+='<th> LI </th>';
					tr+='<th> LS </th>';
					tr+='<th> CF </th>';
					tr+='<th> TSELI </th>';
					tr+='</tr>';
					i--;
					OnlyOnce=1;
				}
				else
				{
					tr+='<tr>';
					tr+='<td onclick="SeleccionaDatoDeTablaIsan('+ rows[i].LI +', &#39;LI&#39; )">'+ rows[i].LI +'</td>';
					tr+='<td onclick="SeleccionaDatoDeTablaIsan('+ rows[i].LS +', &#39;LS&#39; )">'+ rows[i].LS +'</td>';
					tr+='<td onclick="SeleccionaDatoDeTablaIsan('+ rows[i].CF +', &#39;CF&#39; )">'+ rows[i].CF +'</td>';
					tr+='<td onclick="SeleccionaDatoDeTablaIsan('+ rows[i].TSELI +', &#39;TSELI&#39; )">'+ rows[i].TSELI +'</td>';
					tr+='</tr>';
				}
			}
			LaTabla.innerHTML = tr;
		});
	});
}
var GlobalColumn;
var GlobalValue;
function SeleccionaDatoDeTablaIsan(Valor, Columna)
{
	console.log("Valor = "+Valor);
	console.log("Columna = "+Columna);
	var obj_tb_NewValue = document.getElementById("NewValue");
	obj_tb_NewValue.value = Valor;
	GlobalColumn = Columna;
	GlobalValue = Valor;
	obj_tb_NewValue.readOnly = false;
	obj_tb_NewValue.select();
}
function ModificarTablaIsan()
{
	var obj_tb_NewValue = document.getElementById("NewValue");
	console.log("El valor a ingresar es: "+obj_tb_NewValue.value);
	var obj_Tabla_ISAN = document.getElementById("Tabla_ISAN");
	db.transaction(function(tx)
	{
		tx.executeSql("UPDATE ISAN_TABLE SET "+GlobalColumn+" = "+ obj_tb_NewValue.value +
			" WHERE "+GlobalColumn+" = "+GlobalValue);
		console.log("UPDATE ISAN_TABLE SET "+GlobalColumn+" = "+ obj_tb_NewValue.value +
			" WHERE "+GlobalColumn+" = "+GlobalValue);
	});
	LoadIsanTable();
}