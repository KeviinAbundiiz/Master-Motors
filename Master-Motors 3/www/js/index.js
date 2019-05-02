//-	-	-	-	-	-	-	-	- Gastos -	-	-	-	-	-	-	-	-//
var JustOnce = 0;
function RecolectaDatos()
{
	if(obj_tb_HP.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(obj_tb_Externo.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(obj_tb_CSI.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(obj_tb_Plataforma.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(obj_tb_Taller.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(true)
	{
		//Codigo sqlite para insertar el valor string de Descripcion
	}
	if(obj_tb_NC.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(obj_tb_Lifestyle.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(obj_tb_Pelicula.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(obj_tb_Placas.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	if(obj_tb_Varios.value != "")
	{
		//Codigo sqlite para insertar datos
	}
	else
	{
		//Codigo sqlite para insertar un .value = 0;
	}
	JustOnce=0;
}
function p1()
{
	Sumador();
}
function p2()
{
	Sumador();
}


var obj_tb_HP = document.getElementById("tb_HP");
var obj_tb_Externo = document.getElementById("tb_Externo");
var obj_tb_CSI = document.getElementById("tb_CSI");
var obj_tb_Plataforma = document.getElementById("tb_Plataforma");
var obj_tb_Taller = document.getElementById("tb_Taller");
var obj_ta_Descripcion = document.getElementById("ta_Descripcion");
var obj_tb_NC = document.getElementById("tb_NC");
var obj_tb_Lifestyle = document.getElementById("tb_Lifestyle");
var obj_tb_Pelicula = document.getElementById("tb_Pelicula");
var obj_tb_Placas = document.getElementById("tb_Placas");
var obj_tb_Varios = document.getElementById("tb_Varios");
var obj_tb_TotalGastos = document.getElementById("tb_Total_Gastos");

function Sumador()
{
	//obj_tb_TotalGastos.value = obj_tb_HP.value + " + " + obj_tb_Externo.value;
	obj_tb_TotalGastos.value = (parseFloat(obj_tb_HP.value)+parseFloat(obj_tb_Externo.value)+
		parseFloat(obj_tb_CSI.value)+parseFloat(obj_tb_Plataforma.value)+parseFloat(obj_tb_Taller.value)+
		parseFloat(obj_tb_NC.value)+parseFloat(obj_tb_Lifestyle.value)+parseFloat(obj_tb_Pelicula.value)+
		parseFloat(obj_tb_Placas.value)+parseFloat(obj_tb_Varios.value)).toString()
}

//-	-	-	-	-	-	-	-	- bonificaciones -	-	-	-	-	-	-//
var Num_Bonuses = 0;
function AddNewBonif()
{
	var btn_anade = document.getElementById("Anade");
	var PBonif = document.getElementById("PrimerBonif");
	var LeftHiddenElements = document.getElementsByClassName("LeftHideInputs");
	var HiddenElements = document.getElementsByClassName("Hide");
	switch (Num_Bonuses) {
		case 0:
			{
				if(PBonif.value != "")
				{
					LeftHiddenElements[0].style.display = "inline-block";
					HiddenElements[0].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[0].select();
				}
			}
			break;
		case 1:
			{
				if(HiddenElements[0].value != "")
				{
					LeftHiddenElements[1].style.display = "inline-block";
					HiddenElements[1].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[1].select();
				}
			}	
			break;
		case 2:
			{
				if(HiddenElements[1].value != "")
				{
					LeftHiddenElements[2].style.display = "inline-block";
					HiddenElements[2].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[2].select();
				}
			}	
			break;
		case 3:
			{
				if(HiddenElements[2].value != "")
				{
					LeftHiddenElements[3].style.display = "inline-block";
					HiddenElements[3].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[3].select();
				}
			}	
			break;
		case 4:
			{
				if(HiddenElements[3].value != "")
				{
					LeftHiddenElements[4].style.display = "inline-block";
					HiddenElements[4].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[4].select();
				}
			}	
			break;
		case 5:
			{
				if(HiddenElements[4].value != "")
				{
					LeftHiddenElements[5].style.display = "inline-block";
					HiddenElements[5].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[5].select();
				}
			}	
			break;
		case 6:
			{
				if(HiddenElements[5].value != "")
				{
					LeftHiddenElements[6].style.display = "inline-block";
					HiddenElements[6].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[6].select();
				}
			}	
			break;
		case 7:
			{
				if(HiddenElements[6].value != "")
				{
					LeftHiddenElements[7].style.display = "inline-block";
					HiddenElements[7].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[7].select();
				}
			}	
			break;
		case 8:
			{
				if(HiddenElements[7].value != "")
				{
					LeftHiddenElements[8].style.display = "inline-block";
					HiddenElements[8].style.display = "inline-block";
					Num_Bonuses++;
					LeftHiddenElements[8].select();
				}
			}	
			break;
		default:
			alert("Pues cuantas bonificaciones quieres :V");
			// statements_def
			break;
	}
}

//-	-	-	-	-	-	-	-	-	-	- Agregar Automovil	-	-	-	-	-	-	-	-//

/*
function SelectLastId(CuentaCarros)
{
	db.transaction(function(tx)
	{
		tx.executeSql('SELECT id_NewCar FROM Carros',[],function(tx, SetResult)
		{
			console.log("Llegue aqui :D");
			var rows = SetResult.rows;
			for(var i=0;i<rows.length;i++)
			{
				
				CuentaCarros++;
				console.log("i = "+i);
				console.log("CuentaCarros = "+CuentaCarros);
			}
		});
	});
	console.log("CuentaCarros = "+CuentaCarros);
	return CuentaCarros;
}*/
	var obj_tb_NewCar = document.getElementById("auto_nuevo");
	var obj_tb_Precio = document.getElementById("precio");
	var obj_tb_Color = document.getElementById("color");
	
function Anadir_Carro()
{
	NewcarValue = obj_tb_NewCar.value;
	PrecioValue = obj_tb_Precio.value;
	ColorValue = obj_tb_Color.value;
	/*db.transaction(function(tx)
	{
		tx.executeSql("INSERT INTO Carros VALUES('algo chido','50000','negro')");
	});*/
	if(obj_tb_Color.value != "" && obj_tb_Precio != "" && obj_tb_NewCar.value != "")
	{

		db.transaction(function(tx)
		{
			tx.executeSql("INSERT INTO HotWheels VALUES('"+ NewcarValue +"','"+
			 PrecioValue + "','"+ ColorValue +"') ");
		});
		console.log(	  "INSERT INTO Carros VALUES('"+ NewcarValue +"','"+
			 PrecioValue + "','"+ ColorValue +"') ");
		
	}/*
	obj_tb_NewCar.value = "";
	obj_tb_Precio.value = "";
	obj_tb_Color.value = "";*/
}
function muestratabla()
{
	var YupJustOnce = 0;
	NewcarValue = obj_tb_NewCar.value;
	PrecioValue = obj_tb_Precio.value;
	ColorValue = obj_tb_Color.value;
	var LaTabla = document.getElementById("table_Datos");
	
	db.transaction(function(tx)
	{
		tx.executeSql("SELECT * FROM HotWheels",[],function(tx,SetResult)
		{
			var rows = SetResult.rows;
			var tr='';
			for(var i = 0; i < rows.length; i++)
			{
				if(YupJustOnce==0)
				{
					tr+='<tr>';
					tr+='<th> Automovil </th>';
					tr+='<th> Precio </th>';
					tr+='<th> Color </th>';
					tr+='</tr>';
					i--;
					YupJustOnce=1;
				}
				else
				{
					tr+='<tr>';
					tr+='<td>' + rows[i].Nombre_Carro + '</td>';
					tr+='<td>' + rows[i].Precio_Carro + '</td>';
					tr+='<td>' + rows[i].Color_Carro + '</td>';
					tr+='</tr>';
				}
			}
			LaTabla.innerHTML = tr;
		});
	});
}
//-	-	-	-	-	-	-	-	-	-	- Modificar Automovil	-	-	-	-	-	-	-//

function SelectParaLista()
{
	var obj_Select_List = document.getElementById("auto");
	db.transaction(function(tx)
	{
		tx.executeSql('SELECT * FROM HotWheels',[], function(tx, SetResult)
		{
			var rows = SetResult.rows;
			var OptioN = '';
			var FT=0; //auxiliar para que selected solo sea una vez
			for(var i=0;i<rows.length;i++)
			{
				if(FT == 0)
				{
					OptioN='<option selected>';
					FT=1;	
				}
				else
				{
					OptioN+='<option>';
				}
				OptioN+=rows[i].Nombre_Carro;
				OptioN+='</option>';
			}
			console.log("html = "+OptioN);
			obj_Select_List.innerHTML = OptioN;
		});
	});
	
}
function probando()
{
	var obj_Select_List = document.getElementById("auto");
	var ItemSelected = obj_Select_List.value;
	db.transaction(function(tx)
	{
		tx.executeSql("SELECT Precio_Carro,Color_Carro FROM HotWheels WHERE Nombre_Carro='"+ItemSelected+"'",
			[],function(tx,ResultSet)
			{
				var rows = ResultSet.rows;
				obj_tb_Precio.value = rows[0].Precio_Carro;
				obj_tb_Color.value = rows[0].Color_Carro;
			});
	});
}
function ActualizarDatos()
{
	var obj_Select_List = document.getElementById("auto");
	var ItemSelected = obj_Select_List.value;
	PrecioValue = obj_tb_Precio.value;
	ColorValue = obj_tb_Color.value;
	db.transaction(function(tx)
	{
		tx.executeSql("UPDATE HotWheels SET Precio_Carro='"+PrecioValue+"',Color_Carro='"+ColorValue+
			"' where Nombre_Carro='"+ItemSelected+"'");
	});
	console.log("UPDATE HotWheels SET Precio_Carro='"+PrecioValue+"',Color_Carro='"+ColorValue+
			"' where Nombre_Carro='"+ItemSelected+"'");
	SelectParaLista();
}/*
function checaitemselected()
{
	var obj_Select_List = document.getElementById("auto");	//no recuerdo para que es esto...
	var ItemSelected = obj_Select_List.value;
	
}*/
//-	-	-	-	-	-	-	-	-	-	- Eliminar Automovil-	-	-	-	-	-	-	-//

function EliminarDato()
{
	var obj_Select_List = document.getElementById("auto");
	var ItemSelected = obj_Select_List.value;
	db.transaction(function(tx)
	{
		//tx.executeSql("DELETE FROM HotWheels");
		tx.executeSql("DELETE FROM HotWheels WHERE Nombre_Carro='"+ItemSelected+"'");
		console.log("DELETE FROM HotWheels WHERE Nombre_Carro='"+ItemSelected+"'");
	});
	SelectParaLista();
}


//-	-	-	-	-	-	-	-	-	-	- Prueba de sqlite 	-	-	-	-	-	-	-	-//


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
    	tx.executeSql("CREATE TABLE IF NOT EXISTS ")
    });

    db.transaction(function(tx)
    {
    	tx.executeSql("SELECT * FROM ISAN_TABLE",[],function(tx,SetResult)
    	{
    		var rows = SetResult.rows;
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
function DeleteTable()
{
	db.transaction(function(tx)
	{
		tx.executeSql("DROP TABLE HotWheels");
	});
}
