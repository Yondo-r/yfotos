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
              <v-btn @click="fotosModel=!fotosModel"> Add fotos</v-btn>
              <v-btn @click="fotosRepresentanteModel=!fotosRepresentanteModel">Meu album </v-btn>
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
                    :src= arrayDeFotosRepresentante[index]
                    height="250px"
                  >
                  </v-card-media>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn color="blue darken-1" flat="flat"
            @click.native="copiarAlbum()"
          >
            Copiar album
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat"
            @click.native="fotosRepresentanteModel = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
                    @dblclick="addFotoRepresentante(index)"
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
            @click.native="fotosModel = false"
          >Fechar</v-btn>
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
      arrayDeFotos: [
        'http://www.topimagens.com.br/imagens/imagens-mais-novas.jpg',
        'https://i.ytimg.com/vi/bPNTOZTXl44/maxresdefault.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpECBw7ms1G8dOd4zVAaHmrRm7X3b3E4DyBK_hj7AVI6ORnusX',
        'http://www.imagenswhatsapp.blog.br/wp-content/uploads/2016/11/Camaro-Imagens-Baixar-Papel-De-Parede.jpg',
        'https://gamelogia.com.br/wp-content/uploads/2016/07/death-note.jpg',
        'http://artisnobilis.com/imgface/gallery/imagens-bonitas-para-facebook-325.jpg',
      ],
      copiaDeAlbum: [],
      arrayDeFotosRepresentante: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXzJSgVhpwSPuGHJcJjT69kIwXFwvN2B5Q5kOIuD9dM9MDqng',
        'https://unsplash.it/150/300?image=10',
        'https://static.todamateria.com.br/upload/58/45/58455fd2206d1-o-que-e-paisagem.jpg'
      ],
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
    addFotoRepresentante(index){
      console.log("representante adicionou foto")
      this.arrayDeFotosRepresentante.push(this.arrayDeFotos[index])
      console.log(this.arrayDeFotosRepresentante)
    },
    copiarAlbum(){
      this.copiaDeAlbum = this.arrayDeFotosRepresentante
      console.log("O Album foi copiado")
      console.log(this.copiaDeAlbum)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
