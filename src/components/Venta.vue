<template>
<center>
    <div id="Venta">
        <h2><center>REGISTRO DE VENTAS</center></h2>
        <h2 id="11" value=""></h2>
        <form>
            
            <label for="numeric">ID Venta</label><br />
            <input type="number" id="numeric" name="numeric" value=""  /><br /><br />

            <label for="datetime">Fecha de Venta</label><br />
            <input type="datetime-local" id="datetime" name="datatime" value="" /><br /><br />

            <label for="numeric">Venta Total</label><br />
            <input type="text" id="balance" name="balamce" value="" /><br /><br />

            <label for="phone">Telefono</label><br />
            <input type="number" id="telefono" name="Phone" value="" /><br /><br />

            <label for="idCC">Nombre Usuario</label><br />
            <input type="text" id="nombre" name="name" value="" /><br /><br />
 
        </form>
        <button v-on:click="findVentabyId">Buscar por Id</button>
        <button v-on:click="CrearVenta">Crear Venta</button>

        
    </div>
</center>
</template>


<script>

import axios from "axios";
export default {
    name: "Venta",
    data: function () {
        return { 
            venta_total: "" ,
            telefono: 0,
            username: "",
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
            this.venta_id= document.getElementById("numeric")
            let self = this
            axios.get("http://localhost:8080/venta/consulta/" + this.venta_id )
            
                .then((result) => {
                    self.venta_id_2 = result.data.venta_id
                    self.venta_fecha_tiempo = result.data.venta_fecha
                    self.venta_total_productos = result.data.venta_total
                    self.telefono_movil = result.data.telefono
                    self.nombre_username = result.data.username
                   
                    document.getElementById("numeric").value = self.venta_id;
                    document.getElementById("datetime").value = self.venta_fecha;
                    document.getElementById("balance").value = self.venta_total;
                    document.getElementById("telefono").value = self.telefono;
                    document.getElementById("nombre").value = self.username;
                    document.getElementById("11").value = "Se encontró venta" + self.telefono
                   
                   
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });

        },

        CrearVenta: function () {
            this.venta_total = document.getElementById("balance").value
            this.telefono = document.getElementById("telefono").value
            this.username = document.getElementById("nombre").value

            let self = this

            
            axios.post("http://localhost:8080/venta/make/", {
                            "telefono": parseInt(this.telefono, 10),
                            "venta_total": parseInt(this.venta_total),
                            "username": parseString(this.username),
    
            })
                .then((result) => {
                    alert("Venta Exitosa");
    
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
        }
        
    
    },
    /*created: function() {

            this.username = this.$route.params.username

            let self = this
            axios.get("https://cajero-api2.herokuapp.com/user/balance/" + this.username)
                .then((result) => {
                    self.balance = result.data.balance
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
        }*/

    

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