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
    <!-- Modal de fotos para add foto -->
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
                    @dblclick="addFotoRepresentante()"
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
    <!-- Modal de fotos adicionadas -->
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