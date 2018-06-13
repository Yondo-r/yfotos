<template>
  <v-layout row wrap>
    <v-flex xs7 offset-xs2>
      <!-- <div v-if="selectPersonModel == 'representante'"> -->
        <v-container wrap align-center>
          <v-select
            :items="arrayDeRepresentantes"
            v-model="arrayRepModel"
            label="Informe o representante"
            autocomplete
          ></v-select>
          <v-flex
          v-for="(i, index) in arrayDeRepresentantes"
          :key="index">
            <div v-if="arrayRepModel == i">
              <v-btn @click="fotosModel=true"> Add fotos</v-btn>
              <v-btn @click="fotosRepresentanteModel=true">Meu album</v-btn>
            </div>
          </v-flex>
        </v-container>
      <!-- </div> -->
    </v-flex>
    <v-dialog v-model="fotosRepresentanteModel" max-width="790">
      <v-card>
        <v-card-title class="headline">Fotos do representante {{arrayRepModel}}</v-card-title>
        <v-container v-bind="{ [`grid-list-md`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(n, index) in arrayDeFotosRepresentante"
              :key="index"
              xs4
            >
              <v-card flat tile>
                <div>
                  <v-card-media
                    :src= arrayDeFotos[index]
                    height="250px"
                  >
                  </v-card-media>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat"
            @click.native="fotosRepresentanteModel = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
/* eslint-disable */
import PictureInput from 'vue-picture-input'
export default {
  name: 'HelloWorld',
  data() {
    return {
      fotosModel: false,
      fotosRepresentanteModel: false,
      selectPersonModel: null,
      selectPerson: ['admin', 'representante', 'usuário'],
      arrayDeFotos: [],
      arrayDeFotosRepresentante: [],
      arrayDeRepresentantes: ['Lettie', 'Hari', 'Belenos'],
      arrayRepModel: null,
      image: '',
    };
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    addFoto(){
      if (this.image != ''){
        this.arrayDeFotos.push(this.image)
        console.log("abaixo devemos exibir o array de fotos")
        console.log(this.arrayDeFotos)
      } else {
        console.log("você esqueceu de colocar uma foto")
      }
      
      
    },
    oi(){
      console.log("oi, eu sou o goku!")
    },
    addFotoRepresentante(){
      console.log("representante adicionou foto")
      this.arrayDeFotosRepresentante.push(this.image)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
