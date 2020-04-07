function cargarDatos(){
    
    var detalles="";
    for(var i=0; i<datos.length;i++){
        detalles+= "<tr>"+
        "<td>"+datos[i].id+"<td>"+
        "<td>"+datos[i].first_name+"<td>"+
        "<td>"+datos[i].last_name+"<td>"+
        "<td>"+datos[i].email+"<td>"+
        "<td>"+datos[i].gender+"<td>"+
        "<td><img src="+datos[i].image+"><td>"+
        "</tr>"
    }

    document.getElementById("tablaDatosPersonalesDetalles").innerHTML=detalles;

}