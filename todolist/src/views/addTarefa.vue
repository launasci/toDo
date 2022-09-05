<template>
  <div class="container mt-2">
    <b-form>
      <b-form-group 
        label="Titulo" 
        label-for="subject">
          <b-form-input
            id="subject"
            v-model="form.subject"
            type="text"
            placeholder="Ex: Estudar JavaScript"
            required
            autocomplete="on">
          </b-form-input>
      </b-form-group>
      <b-form-group 
        label="Descrição" 
        label-for="description">
          <b-form-textarea
            id="description"
            v-model="form.description"
            type="text"
            placeholder="Ex: continuar curso da Origamid"
            required
            autocomplete="on">
          </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="outline-primary" @click="salvarTarefa">Salvar</b-button>
    </b-form>
    
  </div>
</template>

<script>
export default {
  name:"Form",

  data(){
    return{
      form:{
        subject:"",
        description:"",
      },
      methodSave:"novo"
    }
  },
  
  created(){
    if(this.$route.params.index === 0 || this.$route.params.index !== undefined){
      this.methodSave = "update";
      let tarefa = JSON.parse(localStorage.getItem("tarefas"));
      this.form = tarefa[this.$route.params.index];
    }
  },

  methods:{
    salvarTarefa(){
      if(this.methodSave === "update"){
        let tarefa = JSON.parse(localStorage.getItem("tarefas"));
        tarefa[this.$route.params.index] = this.form;
        localStorage.setItem("tarefas", JSON.stringify(tarefa));
        this.$router.push({name: 'lista'});
        return;
      }

      let tarefa = (localStorage.getItem("tarefas")) ? JSON.parse(localStorage.getItem("tarefas")) : [];
      tarefa.push(this.form);
      localStorage.setItem("tarefas", JSON.stringify(tarefa));
      this.$router.push({name: 'lista'});

    }
  },
}
</script>