<template>
<center>
    <div id="Venta">
        <h2><center>REGISTRO DE VENTAS</center></h2>
        <h2 id="11" value=""></h2>

        <button  v-on:click="findVentabyId">Buscar por Id</button>
        <button v-on:click="CrearVenta">Crear Venta</button>
        <button v-on:click="cleanCampos">Limpiar</button>
        <button  v-on:click="listarC">Lista de Ventas</button>
        <form>
            <div class="ventas">
            <label for="numeric">ID Venta</label><br />
            <input type="text" id="numeric" name="numeric" value="" placeholder="# id"  /><br /><br />

            <label for="datetime">Fecha de Venta</label><br />
            <input type="text" id="datetime" name="datetime" value="" /><br /><br />

            <label for="balance">Venta Total</label><br />
            <input type="text" id="balance" name="balance" value="" placeholder="valor en $"/><br /><br />

            <label for="telefono">Telefono</label><br />
            <input type="text" id="telefono" name="telefono" value="" placeholder="Telefono"/><br /><br />

            <label for="nombre">Nombre Usuario</label><br />
            <input type="text" id="nombre" name="nombre" value="" placeholder="User"/><br /><br />
            </div>
        </form>
  
    
       <table style="width:100%">
                <tr>
                    <th>Id Venta</th>
                    <th>Venta Total</th>
                    <th>Telefono</th>
                    <th>Usuario</th>
                    <th>Fecha Venta</th>
                    <b-table sticky-header id="my-table" striped hover :items="items"></b-table>
        </table>
    </center>
</template>

      
<script>

import axios from "axios";
export default {
    name: "Venta",
    data: function () {
        return { 
            venta_id:0,
            venta_total:0,
            telefono: 0,
            username: "",
            venta_fecha:"",
            newVenta: {},
            items:[]
        };
    },

    methods: {
        init: function () {
        if (this.$route.name != "user") {
            let username = input.numeric.getItem("current_username");
            this.$router.push({ name: "user", params: { username: username } });
        }
        },

        findVentabyId: function () {
            this.venta_id= document.getElementById("numeric").value
            let self = this
            axios.get("http://localhost:8080/venta/consulta/"+this.venta_id)
            
                .then((result) => {
                    self.venta_id = result.data.venta_id
                    self.venta_fecha = result.data.venta_fecha
                    self.venta_total = result.data.venta_total
                    self.telefono = result.data.telefono
                    self.username = result.data.username
                    confirm("Se encontro el cliente " + self.venta_id);
                    document.getElementById("numeric").value = self.venta_id
                    document.getElementById("datetime").value = self.venta_fecha
                    document.getElementById("balance").value = self.venta_total
                    document.getElementById("telefono").value = self.telefono
                    document.getElementById("nombre").value = self.username
                   
                })
                .catch((error) => {
                    alert("No está registrada la venta");
                });

        },
        cleanCampos: function(){
            document.getElementById("numeric").value = ""
            document.getElementById("datetime").value = ""
            document.getElementById("balance").value = ""
            document.getElementById("telefono").value = ""
            document.getElementById("nombre").value = ""
            
        },

        CrearVenta: function () {
            this.venta_id = document.getElementById("numeric").value
            this.venta_fecha = document.getElementById("datetime").value
            this.venta_total = document.getElementById("balance").value
            this.telefono = document.getElementById("telefono").value
            this.username = document.getElementById("nombre").value

            this.newVenta={
                            "venta_id": this.venta_id,
                            "venta_fecha": this.venta_fecha,
                            "telefono": parseInt(this.telefono, 10),
                            "venta_total": parseInt(this.venta_total),
                            "username": parseString(this.username),
            }

            let self = this
            //const res = await axios.post('https://httpbin.org/post', { answer: 42 });
            axios.post("http://localhost:8080/venta/make/", this.newVenta)
                .then((result) => {
                    window.confirm("Venta creada con éxito");
            
                  })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
        },
        
        
        listarC: function () {
            let self = this
            axios.get("http://localhost:8080/venta/list/")
                .then((result) => {
                    self.items = result.data
                    
                })
                .catch((error) => {
                    
                    alert("ERROR Servidor");
                    
                });
            
        }
        
    },   

};
       

</script>

<style>
#UserBalance {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#UserBalance h2 {
    font-size: 50px;
    color: #283747;
}
#UserBalance span {
    color: crimson;
    font-weight: bold;
}
button{
    color: #000000;
    background: #cf7272;
    border: 1px solid #007efc;
    border-radius: 5px;
    padding: 10px 20px;
}
button:hover{
    color: #000000;
    background: #7fbfff;
    border: 1px solid #358035;
}
#Venta h2{
    font-size: 20px;
    color: #f5a018;
 }

</style>
