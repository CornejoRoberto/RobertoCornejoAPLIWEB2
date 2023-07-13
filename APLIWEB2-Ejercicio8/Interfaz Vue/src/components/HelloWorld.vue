<!-- There are multiple root elements -->
<template>

  <hr>
  <div class="container">
    <h1 class="text-center">PREPARAR PLATILLO</h1>
    <form @submit.prevent="resultadoput()" class="form " v-if="vieweditarr">
      <div class="w-50 m-auto  ">
        <div class="text-center ">
          <label for="id_Mesero" class="form-label">ID MECERO</label>
          <input type="text" name="id_Mesero" v-model="resultadoedicion.id_Mesero" class="form-control">
        </div>
        <div class="text-center ">
          <label for="id_Receta" class="form-label">ID RECETA</label>
          <input type="text" name="id_Receta" v-model="resultadoedicion.id_Receta" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="tiempoestimado" class="form-label">TIEMPO ESTIMADO</label>
          <input type="text" name="tiempoestimado" v-model="resultadoedicion.tiempoestimado" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="costo" class="form-label">COSTO</label>
          <input type="text" name="costo" v-model="resultadoedicion.costo" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="fecha" class="form-label">FECHA</label>
          <input type="text" name="fecha" v-model="resultadoedicion.fecha" class="form-control ">
        </div>
        <div class=" d-flex justify-content-center mt-4 mb-4">
          <button class="btn btn-success w-50 " type="submit">Editar</button>
          <button class="btn btn-danger w-50 " @click="vieweditarr = false">Cancelar</button>
        </div>
      </div>

    </form>


    <hr>
    <form @submit.prevent="resultadoPost()" class="form " v-if="!vieweditarr">
      <div class="w-50 m-auto  ">
        <div class="text-center ">
          <label for="id_Mesero" class="form-label">ID Mecero</label>
          <input type="text" name="id_Mesero" v-model="resultado.id_Mesero" class="form-control">
        </div>
        <div class="text-center ">
          <label for="id_Receta" class="form-label">ID Receta</label>
          <input type="text" name="id_Receta" v-model="resultado.id_Receta" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="tiempoestimado" class="form-label">Tiempo Estimado</label>
          <input type="text" name="tiempoestimado" v-model="resultado.tiempoestimado" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="costo" class="form-label">Costo</label>
          <input type="text" name="costo" v-model="resultado.costo" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="fecha" class="form-label">Fecha</label>
          <input type="text" name="fecha" v-model="resultado.fecha" class="form-control ">
        </div>
        <div class=" d-flex justify-content-center mt-4 mb-4">
          <button class="btn btn-primary w-50 ">Enviar</button>
        </div>
      </div>
    </form>
  </div>


  <hr>

  <div class="container text-center">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Preparar Platillo</th>
          <th scope="col">ID Mecero</th>
          <th scope="col">ID Receta</th>
          <th scope="col">Tiempo Estimada</th>
          <th scope="col">Costo</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in resultados" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.id_Mesero }}</td>
          <td>{{ item.id_Receta }}</td>
          <td>{{ item.tiempoestimado }}</td>
          <td>{{ item.costo }}</td>
          <td>{{ item.fecha }}</td>
          <td><button class="btn btn-danger" @click="resultadoDelete(item._id)">Eliminar</button> <button
              class="btn btn-success" @click="vieweditar(item._id)">Editar</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      resultados: [],
      resultado: {
        id_Mesero: '',
        id_Receta: '',
        tiempoestimado: '',
        costo: '',
        fecha:''
      },
      resultadoedicion: {},
      vieweditarr: true

    }
  },
  created() {
    this.resultadoGet();
  },
  methods: {
    resultadoGet() {
      axios.get('http://localhost:1000/resultado')
        .then(respuesta => {
          this.resultados = respuesta.data
        })
        .catch(evento => { console.log(evento) })
    },
    resultadoPost() {
      axios.post('http://localhost:1000/resultado', this.resultado)
        .then(respuesta => {
          this.resultados.push(respuesta.data)

        })
        .catch(evento => { console.log(evento.response) })
    },
    resultadoDelete(_id) {
      axios.delete(`http://localhost:1000/resultado/${_id}`)
        .then(res => {
          const index = this.resultados.findIndex(item => item._id === res.data._id);
          this.resultados.splice(index, 1)
        })
        .catch(e => { console.log(e.response) })
    },

    vieweditar(_id) {
      this.vieweditarr = true
      axios.get(`http://localhost:1000/resultado/${_id}`)
        .then(respuesta => {
          this.resultadoedicion = respuesta.data

        })
        .catch(evento => {
          console.log(evento.response)
        })

    },
    resultadoput(item) {
      axios.put(`http://localhost:1000/resultado/${item._id}`, item)
        .then(respuesta => {
          const index = this.datos.findIndex(n => n._id === respuesta.data._id)
          this.resultados[index].id_Mesero = respuesta.data.id_Mesero
          this.resultados[index].id_Receta = respuesta.data.id_Receta
          this.resultados[index].tiempoestimado = respuesta.data.tiempoestimado
          this.resultados[index].costo = respuesta.data.costo
          this.resultados[index].fecha = respuesta.data.fecha
        })
        .catch(evento => {
          console.log(evento.response)
        })
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.container{
  background-color: rgba(43, 193, 115, 0.527);
  border-radius: 10px;
}
</style>
