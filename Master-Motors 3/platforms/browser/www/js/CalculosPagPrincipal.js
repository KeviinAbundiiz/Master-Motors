/*=IF(AND(D9>='tarifa 2017'!B4,D9<='tarifa 2017'!C4),D18/(('tarifa 2017'!E4/100)+1),IF(AND(D9>='tarifa 2017'!B5,D9<=
'tarifa 2017'!C5),D18/(('tarifa 2017'!E5/100)+1),IF(AND(D9>='tarifa 2017'!B6,D9<='tarifa 2017'!C6),D18/(('tarifa 2017'!E6/100)+1),
IF(AND(D9>='tarifa 2017'!B7,D9<='tarifa 2017'!C7),D18/(('tarifa 2017'!E7/100)+1),D18/1.17))))

=IF(AND(D9>='tarifa 2017'!B4,D9<='tarifa 2017'!C4),'tarifa 2017'!B4,IF(AND(D9>='tarifa 2017'!B5,D9<='tarifa 2017'!C5),'tarifa 2017'!B5,
	IF(AND(D9>='tarifa 2017'!B6,D9<='tarifa 2017'!C6),'tarifa 2017'!B6,IF(AND(D9>='tarifa 2017'!B7,D9<='tarifa 2017'!C7),'tarifa 2017'!B7,
		IF(D9>='tarifa 2017'!B8,'tarifa 2017'!B8,0)))))

=IF(AND(D28>='tarifa 2017'!B4,D28<='tarifa 2017'!C4),'tarifa 2017'!B4,IF(AND(D28>='tarifa 2017'!B5,D28<='tarifa 2017'!C5),'tarifa 2017'!B5,
	(AND(D28>='tarifa 2017'!B6,D28<='tarifa 2017'!C6),'tarifa 2017'!B6,IF(AND(D28>='tarifa 2017'!B7,D28<='tarifa 2017'!C7),'tarifa 2017'!B7,
		IF(D28>='tarifa 2017'!B8,'tarifa 2017'!B8,0)))))

=IF(AND(D9>='tarifa 2017'!B4,D9<='tarifa 2017'!C4),'tarifa 2017'!D4,IF(AND(D9>='tarifa 2017'!B5,D9<='tarifa 2017'!C5),'tarifa 2017'!D5,
	IF(AND(D9>='tarifa 2017'!B6,D9<='tarifa 2017'!C6),'tarifa 2017'!D6,IF(AND(D9>='tarifa 2017'!B7,D9<='tarifa 2017'!C7),'tarifa 2017'!D7,
		IF(D9>='tarifa 2017'!B8,'tarifa 2017'!D8,0)))))*/
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

//-	-	-	-	-	-	-	-	-	-	-	-	Variables Globales	-	-	-	-	-//

var TB4; 	var TC4;	var TD4;	var TE4;
var TB5;	var TC5;  	var TD5;	var TE5;
var TB6;  	var TC6;  	var TD6;	var TE6;
var TB7;	var TC7;	var TD7;	var TE7;
var TB8;  	/*nada*/	var TD8;	var TE8;

AsignarTablaIsan();
function AsignarTablaIsan()
{
	db.transaction(function(tx)
	{
		tx.executeSql("SELECT * FROM ISAN_TABLE",[],function(tx,SetResult)
		{
			var rows = SetResult.rows;
			TB4 = rows[0].LI;
			TC4 = rows[0].LS;
			TD4 = rows[0].CF;
			TE4 = rows[0].TSELI;
			TB5 = rows[1].LI;
			TC5 = rows[1].LS;
			TD5 = rows[1].CF;
			TE5 = rows[1].TSELI;
			TB6 = rows[2].LI;
			TC6 = rows[2].LS;
			TD6 = rows[2].CF;
			TE6 = rows[2].TSELI;
			TB7 = rows[3].LI;
			TC7 = rows[3].LS;
			TD7 = rows[3].CF;
			TE7 = rows[3].TSELI;
			TB8 = rows[4].LI;
			TD8 = rows[4].CF;
			TE8 = rows[4].TSELI;
		});
	});
}

var D3 = 450900;
var D7;
var D9;
var D11;
var D13;
var D15;
var D18;
var D23;
var D28;
var D30;
var D32;
var D34;
var D36;
var D38;
var D40;
var Venta;
var Total;
var Costo_Unidad;
var Bonificacion;
var Gastos;
var Utilidad;
var Comision_Asesor;
var Inventario;
var Hibridos;
//-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-	-//
function CalcularVenta()
{
	//-		-	-	-	-	-	-	-	-	Declaraciones	-	-	-	-	-	-	-//
	var Objeto_tb_PreFac = document.getElementById("tb_Precio_Factura");
	var Objeto_tb_Venta = document.getElementById("tb_Venta");
	var Objeto_tb_Iva = document.getElementById("tb_Iva");
	var Objeto_tb_Isan = document.getElementById("tb_Isan");
	var Objeto_tb_Total = document.getElementById("tb_Total");
	var Objeto_tb_Costo_Unidad = document.getElementById("tb_Costo_Unidad");
	var Objeto_tb_Bonificacion = document.getElementById("tb_Bonificacion");
	var Objeto_tb_Utilidad = document.getElementById("tb_Utilidad");
	var Objeto_tb_Comision = document.getElementById("tb_Comision");
	var Objeto_tb_Inventario = document.getElementById("tb_Inventario");
	var Objeto_tb_Hibridos = document.getElementById("tb_Hibridos");
	if(Objeto_tb_PreFac.value != "" && Objeto_tb_Costo_Unidad.value != "")
	{
	//-		-	-	-	-	-	-	-	-	Calculos	-	-	-	-	-	-	-	-//
		D3 = parseFloat(Objeto_tb_PreFac.value);
		D7 = (D3/1.16) * 0.16;
		D9 = D3 - D7;
		D11 = SacaD11();
		D13 = D9 - D11;
		D15 = SacaD15();
		D18 = D13 - D15;
		D23 = SacaD23();
		D28 = D23 + D15; //Originalmente D23 + D25, pero D25 = D15 so...
		D30 = SacaD30();
		D32 = D28 - D30;
		D34 = SacaD34();
		D36 = D32 * D34;
		D38 = SacaD38();
		D40 = D36 + D38;
		Total = D28+D7+D40;	// Venta + ISAN + IVA
		Venta = D28;
		Costo_Unidad = Objeto_tb_Costo_Unidad.value; /* 374568.65; */
		Gastos = 0;	// Esto va a cambiar por una lectura de base de datos(?) o quiza por un valor leido, no se
		Bonificacion = ((Costo_Unidad / 100)*6);
		Utilidad = Venta - Costo_Unidad + Bonificacion - Gastos;
		Comision_Asesor = (Utilidad * 13) / 100;
		Inventario = (Comision_Asesor * 15) / 10;
		Hibridos = (Utilidad * 15) / 100;
		//-		-	-	-	-	-	-	-	-	Impresiones	-	-	-	-	-	-	-	-//
		Objeto_tb_Venta.value = D28;
		Objeto_tb_Isan.value = D40;
		Objeto_tb_Iva.value = D7;
		Objeto_tb_Total.value = Total;
		Objeto_tb_Bonificacion.value = Bonificacion;
		Objeto_tb_Utilidad.value = Utilidad;
		Objeto_tb_Comision.value = Comision_Asesor;
		Objeto_tb_Inventario.value = Inventario;
		Objeto_tb_Hibridos.value = Hibridos;
	}
	else
	{
		if(Objeto_tb_PreFac.value == "")
		{
			if(Objeto_tb_Costo_Unidad.value == "")
			{
				alert("Los campos Precio Factura y Costo Unidad estan vacios.")
			}
			else
			{
				alert("El campo Precio Factura esta vacio.")
			}
		}
		else
		{
			if(Objeto_tb_Costo_Unidad.value == "")
			{
				alert("El campo Costo Unidad esta vacio.")
			}
		}
	}
}

function SacaD11()
{
	if((D9 >= TB4)&&(D9 <= TC4))
	{
		return TD4;
	}
	else
	{
		if((D9 >= TB5)&&(D9 <= TC5))
		{
			return TD5;
		}
		else
		{
			if((D9 >= TB6)&&(D9 <= TC6))
			{
				return TD6;
			}
			else
			{
				if((D9 >= TB7)&&(D9 <= TC7))
				{
					return TD7;
				}
				else
				{
					if(D9 >= TB8)
					{
						return TD8;
					}
					else
					{
						return 0;
					}
				}
			}
		}
	}
}

function SacaD15()
{
	if((D9 >= TB4)&&(D9 <= TC4))
	{
		return TB4;
	}
	else
	{
		if((D9 >= TB5)&&(D9 <= TC5))
		{
			return TB5;
		}
		else
		{
			if((D9 >= TB6)&&(D9 <= TC6))
			{
				return TB6;
			}
			else
			{
				if((D9 >= TB7)&&(D9 <= TC7))
				{
					return TB7;
				}
				else
				{
					if(D9 >= TB8)
					{
						return TB8;
					}
					else
					{
						return 0;
					}
				}
			}
		}
	}
}

function SacaD23()
{
	if((D9 >= TB4 ) && (D9 <= TC4) )
	{
		return D18 / ((TE4/100)+1);
	}
	else
	{
		if((D9 >= TB5)&&(D9 <= TC5))
		{
			return D18 / ((TE5 / 100) +1 );
		}
		else
		{
			if((D9 >= TB6 ) && ( D9 <= TC6))
			{
				return D18 / ((TE6 / 100) +1);
			}
			else
			{
				if((D9 >= TB7)&&( D9 <= TC7))
				{
					return D18 / ((TE7 /100) +1);
				}
				else
				{
					return D18 / 1.17;
				}
			}
		}
	}
}

/*=IF(AND(D28>='tarifa 2017'!B4,D28<='tarifa 2017'!C4),'tarifa 2017'!D4,IF(AND(D28>='tarifa 2017'!B5,D28<='tarifa 2017'!C5),'tarifa 2017'!D5,
	(AND(D28>='tarifa 2017'!B6,D28<='tarifa 2017'!C6),'tarifa 2017'!D6,IF(AND(D28>='tarifa 2017'!B7,D28<='tarifa 2017'!C7),'tarifa 2017'!D7,
		IF(D28>='tarifa 2017'!B8,'tarifa 2017'!D8,0)))))

=IF(AND(D28>='tarifa 2017'!B4,D28<='tarifa 2017'!C4),('tarifa 2017'!E4/100),IF(AND(D28>='tarifa 2017'!B5,D28<='tarifa 2017'!C5),
	'tarifa 2017'!E5/100,IF(AND(D28>='tarifa 2017'!B6,D28<='tarifa 2017'!C6),'tarifa 2017'!E6/100,IF(AND(D28>='tarifa 2017'!B7,
		D28<='tarifa 2017'!C7),'tarifa 2017'!E7/100,IF(D28>='tarifa 2017'!B8,'tarifa 2017'!E8/100,0)))))

=IF(AND(D28>='tarifa 2017'!B4,D28<='tarifa 2017'!C4),'tarifa 2017'!B4,IF(AND(D28>='tarifa 2017'!B5,D28<='tarifa 2017'!C5),'tarifa 2017'!B5,
	(AND(D28>='tarifa 2017'!B6,D28<='tarifa 2017'!C6),'tarifa 2017'!B6,IF(AND(D28>='tarifa 2017'!B7,D28<='tarifa 2017'!C7),'tarifa 2017'!B7,
		IF(D28>='tarifa 2017'!B8,'tarifa 2017'!B8,0)))))*/

function SacaD30()
{
	if((D28 >= TB4)&&(D28 <= TC4))
	{
		return TB4;
	}
	else
	{
		if((D28 >= TB5)&&(D28 <= TC5))
		{
			return TB5;
		}
		else
		{
			if((D28 >= TB6)&&(D28 <= TC6))
			{
				return TB6;
			}
			else
			{
				if((D28 >= TB7)&&(D28 <= TC7))
				{
					return TB7;
				}
				else
				{
					if(D28 >= TB8)
					{
						return TB8;
					}
					else
					{
						return 0;
					}
				}
			}
		}
	}
}

function SacaD34()
{
	if((D28 >= TB4)&&(D28 <= TC4))
	{
		return TE4 / 100;
	}
	else
	{
		if((D28 >= TB5)&&(D28 <= TC5))
		{
			return TE5 / 100;
		}
		else
		{
			if((D28 >= TB6)&&(D28 <= TC6))
			{
				return TE6 / 100;
			}
			else
			{
				if((D28 >= TB7)&&(D28 <= TC7))
				{
					return TE7 / 100;
				}
				else
				{
					if(D28 >= TB8)
					{
						return TE8 / 100;
					}
					else
					{
						return 0;
					}
				}
			}
		}
	}
}

function SacaD38()
{
	if((D28 >= TB4)&&(D28 <= TC4))
	{
		return TD4;
	}
	else
	{
		if((D28 >= TB5)&&(D28 <= TC5))
		{
			return TD5;
		}
		else
		{
			if((D28 >= TB6)&&(D28 <= TC6))
			{
				return TD6;
			}
			else
			{
				if((D28 >= TB7)&&(D28 <= TC7))
				{
					return TD7;
				}
				else
				{
					if(D28 >= TB8)
					{
						return TD8;
					}
					else
					{
						return 0;
					}
				}
			}
		}
	}
}