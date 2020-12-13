<template>
    <div id="Cliente">
        <h2>REGISTRO DE CLIENTES</h2>
        <h2 id="11" value=""></h2>
        <form>
            
            <label for="Phone1">Telefono:</label><br />
            <input type="text" id="Phone" name="Phone" value=""  /><br /><br />
            <label for="name">Nombre:</label><br />
            <input type="text" id="name" name="name" value="" /><br /><br />
            <label for="adress">direccion:</label><br />
            <input type="text" id="adress" name="adress" value="" /><br /><br />
            <label for="zone">barrio:</label><br />
            <input type="text" id="zone" name="zone" value="" /><br /><br />
            <label for="idCC">cedula:</label><br />
            <input type="text" id="idCC" name="idCC" value="" /><br /><br />
            <label for="birth">cumpleanos:</label><br />
            <input type="text" id="birth" name="birth" value="" /><br /><br />
        </form>
        <button  v-on:click="findCliente">Buscar</button>

        
    </div>
</template>

<script>

import axios from "axios";
export default {
    name: "Cliente",
    data: function () {
        return {
            telefono: 0,
            nombre: "",
            direccion: "",
            barrio: "",
            cedula: 0,
            cumpleanos: "",
            balance: 0,
        };
    },

    methods: {
        init: function () {
        if (this.$route.name != "user") {
            let username = input.Phone.getItem("current_username");
            this.$router.push({ name: "user", params: { username: username } });
        }
        },

        findCliente: function () {
            let self = this
            axios.get("https://restaurante-back-g1.herokuapp.com/cliente/consulta/3214567895" )
                .then((result) => {
                    self.telefono = result.data.telefono
                    self.nombre = result.data.nombre
                    self.direccion = result.data.direccion
                    self.barrio = result.data.barrio
                    self.cedula = result.data.cedula
                    self.cumpleanos = result.data.cumpleanos
                    document.getElementById("Phone").value = self.telefono;
                    document.getElementById("name").value = self.nombre;
                    document.getElementById("adress").value = self.direccion
                    document.getElementById("zone").value = self.barrio
                    document.getElementById("idCC").value = self.cedula
                    document.getElementById("birth").value = self.cumpleanos
                    document.getElementById("11").value = "Se encontro usuario" + self.nombre
                    
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });

        },
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
</style>