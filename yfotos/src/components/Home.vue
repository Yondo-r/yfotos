<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense v-if="roleName == 'Admin'">
        <template v-for="element in menu">
          <v-list-group :key="element.text" :prepend-icon="element.icon" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  <router-link style="text-decoration: none; color: white;" :to="element.link">
                    <v-list-tile-title class="link">
                      <span> {{ element.text }} </span>
                    </v-list-tile-title>
                  </router-link>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
      <v-list dense v-if="roleName == 'Cliente'">
        <template v-for="element in menuUser">
          <v-list-group :key="element.text" :prepend-icon="element.icon" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  <router-link style="text-decoration: none; color: white;" :to="element.link">
                    <v-list-tile-title class="link">
                      <span> {{ element.text }} </span>
                    </v-list-tile-title>
                  </router-link>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
      <v-list dense v-if="roleName == 'Funcionario'">
        <template v-for="element in menuWork">
          <v-list-group :key="element.text" :prepend-icon="element.icon" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  <router-link style="text-decoration: none; color: white;" :to="element.link">
                    <v-list-tile-title class="link">
                      <span> {{ element.text }} </span>
                    </v-list-tile-title>
                  </router-link>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
      <v-list dense v-if="roleName == 'Recepcionista'">
        <template v-for="element in menuRecep">
          <v-list-group :key="element.text" :prepend-icon="element.icon" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  <router-link style="text-decoration: none; color: white;" :to="element.link">
                    <v-list-tile-title class="link">
                      <span> {{ element.text }} </span>
                    </v-list-tile-title>
                  </router-link>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed hide-overlay app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Kronos</v-toolbar-title>
      <v-spacer></v-spacer>
      <p><a class="usuario" @click="myProfile">{{ usuario }}</a></p>
      <div class="logout">
        <a class="logoutLink" @click="logout">
          <i class="material-icons" >
            exit_to_app
          </i>
        </a>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <router-view :key="$route.fullPath"> </router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  data: () => ({
    usuario: window.localStorage.getItem('usuario'),
    drawer: true,
    roleName: window.localStorage.getItem('role'),
    // roleName: '',
    menu: [
      {
        icon: 'people',
        text: 'Admin',
        link: '/admin',
      },
      {
        icon: 'perm_identity',
        text: 'Representante',
        link: '/representante',
      },
      {
        icon: 'person',
        text: 'Usuário',
        link: '/usuario',
      },
    ],
    menuRepresentante: [
    {
        icon: 'perm_identity',
        text: 'Representante',
        link: '/representante',
    },
    ],
    menuUsuario: [
      {
        icon: 'person',
        text: 'Usuário',
        link: '/usuario',
      },
    ]
  }),
  
  props: {
    source: String
  },
  methods: {
    logout() {
      // Criar aqui a logica de logout!
      console.log(localStorage.getItem('usuario'));
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      this.$router.push('/');
    },
    myProfile () {
      this.$router.push('/MyProfile');      
    }
  }
};
</script>

<style scoped>
.link {
  width: 100vw !important;
}
.logoutLink {
  color: inherit;
}
.logout {
  position: right;
}
.usuario {
  color: inherit;
  margin-right: 10px;
  margin-bottom: 10px;
  padding-bottom: 20px;
}
</style>