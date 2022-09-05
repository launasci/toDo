<template>
  <div class="container mt-2" v-if='tarefas.length != 0'>
    <div v-for="(tarefa, index) in tarefas" :key="index">
      <b-card :title="tarefa.subject" class="mb-2">
        <b-card-text>{{tarefa.description}}</b-card-text>
        <b-button variant="outline-secondary" class="mr-2" @click="editar(index)">editar</b-button>
        <b-button variant="outline-danger" class="mr-2" @click="excluir(tarefa, index)">excluir</b-button>
      </b-card>
    </div>
    <b-modal ref="modalRemove" hide-footer title="Deseja excluir a tarefa selecionada? ">
      <div class="d-block text-left"> 
        <div class="title mt-2">
          Titulo da tarefa:
          <p class="border p-3">
            {{tarefaSelecionada.subject}}
          </p>
        </div>
        <div class="description mt-2">
          Descrição:
          <p class="border  p-3">
            {{tarefaSelecionada.description}}
          </p>
        </div>
      </div>
      <div class="mt-3 d-flex justify-content-end">
        <b-button variant="outline-secondary" class="mr-2" @click="hideModal">cancelar</b-button>
        <b-button variant="outline-danger" class="mr-2" @click="confirmarExclusao">excluir</b-button>
      </div>
    </b-modal>
  </div>
  <div v-else class="alinhar w-100 d-flex justify-content-center align-items-center">
    <b-card class="alinhar-1 w-25 h-25 d-flex justify-content-center align-items-center">
       <b-card-text class="mt-1.5">Ainda não tem tarefas cadastras</b-card-text>
       <b-button to="/addTarefa" class="botao">
       Adicionar nova tarefa
       </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name:"Lista",

  data(){
    return{
      tarefas: [],
      tarefaSelecionada: [],
    }
  },

  created(){
    this.tarefas = (localStorage.getItem("tarefas")) ? JSON.parse(localStorage.getItem("tarefas")) : [];
  },

  methods:{
    editar(index){
      this.$router.push({name:"addTarefa", params:{index}});
    },

    excluir(tarefa, index){
      this.tarefaSelecionada = tarefa;
      this.tarefaSelecionada.index = index;
      this.$refs.modalRemove.show();
    },

    hideModal(){
      this.$refs.modalRemove.hide();
    },

    confirmarExclusao(){
      this.tarefas.splice(this.tarefaSelecionada.index, 1);
      localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
      this.hideModal();
    },
  }
}
</script>

<style>
.alinhar{
  height: 92vh !important;
}

.alinhar-1{
  flex-direction: row !important;
  text-align: center !important;
}

.botao{
  border-radius: 3rem !important;
}
</style>