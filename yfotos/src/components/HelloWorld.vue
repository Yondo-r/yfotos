<template>
  <v-app>
    <v-card-text>
    <div>
      <v-container wrap align-center>
        <v-select
          :items="selectPerson"
          v-model="selectPersonModel"
          label="Informe o tipo de usuário"
          autocomplete
        ></v-select>
      </v-container>
    </div>
    </v-card-text>
    <div v-if="selectPersonModel == 'admin'">
      <v-flex text-xs-center>
        <v-btn @click="fotosModel=true"> Fotos</v-btn>
      </v-flex>
      <div v-if="fotosModel == false">
        <picture-input
          ref="pictureInput"
          @change="onChange"
          width="250"
          height="250"
          margin="16"
          accept="image/jpeg,image/png"
          size="5"
          buttonClass="btn"
          :customStrings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Clique ou arraste uma imagem aqui 😺 '
          }">
        </picture-input>
        <v-flex text-xs-center>
          <v-btn @click="addFoto()">Adicionar foto</v-btn>
        </v-flex>
      </div>
    </div>
    <!-- MODAL DE FOTOS -->
    <v-dialog v-model="fotosModel" max-width="790">
      <v-card>
        <v-card-title class="headline">As fotos serão exibidas aqui</v-card-title>
        <v-container v-bind="{ [`grid-list-md`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(n, index) in arrayDeFotos"
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
          <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
/* eslint-disable */
import PictureInput from 'vue-picture-input'
export default {
  name: 'HelloWorld',
  data() {
    return {
      fotosModel: false,
      selectPersonModel: null,
      selectPerson: ['admin', 'representante', 'usuário'],
      arrayDeFotos: [],
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
      this.arrayDeFotos.push(this.image)
      console.log("abaixo devemos exibir o array de fotos")
      console.log(this.arrayDeFotos)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
