<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Email</th>
        <th class="text-left">Phone No.</th>
        <th class="text-left">Sum</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.sum }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.showUser;
    },
  },
};
</script>
