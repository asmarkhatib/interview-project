<template>
  <div>
    <v-toolbar color="teal lighten-3">
      <v-toolbar-title>User Data</v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link to="/"
        ><v-btn class="mr-2" variant="flat" color="secondary">
          User Data
        </v-btn>
      </router-link>

      <router-link to="/viewData"
        ><v-btn class="mr-2" variant="flat" color="secondary">
          View USer Data
        </v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>
