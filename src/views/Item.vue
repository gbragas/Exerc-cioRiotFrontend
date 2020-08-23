<template>
    <div class="div">
       <div class="container">
           <div class="row">
               <div v-for="item in itens" :key="item.name" class="col-4 mt-5">
                   <div class="card mx-1 p-4 text-left borda-card">
                       <div>
                            <img :src="`http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/${item.image.full}`">
                            <h5 class="nome-item mt-2">{{ item.name }}</h5>
                            <p>Descrição: {{ item.plaintext }}</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
import api from '../helpers/api'
export default {

    data: function() {
        return {
            itens: [],
        }
    },
    created: function (){
        api.get('itens')
        .then(response => {
            const res = response.data
            this.itens = res.data
            console.log(res.data)
        })
    }
}
</script>

<style>
html, boddy{
    background: #f3f3ff;
}
img {
    width: 70px;
    height: 70px;
}
.div {
    background: #f3f3ff;
}
.borda-card{
    border: gray 1px solid;
    height: 300px;
}
.nome-item{
    font-size: 25px;
}

</style>