<template>
  <div id="app">
    <!-- ------ NAV DO BOOTSTRAP ----- -->
  <body>
        <b-navbar toggleable="lg" type="light" variant="danger">
      <b-navbar-brand to="/" style="color: black"
        >ToDo List || </b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" class=text-dark>Tarefas</b-nav-item>
          <b-nav-item to="/addTarefa">Adicionar Tarefa</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- ----- FIM DA NAV DO BOOTSTRAP ------- -->
    <router-view />
  </body>

  </div>
</template>

<style>
</style>
