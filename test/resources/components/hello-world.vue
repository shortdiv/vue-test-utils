<template>
  <div>
    <h3>Vuetify Single Checkbox</h3>
    <pre>{{ single.primary }}</pre>
    <v-checkbox
      v-model="single.primary"
      label="Primary?"
      required
    ></v-checkbox>
    <h3>Vanilla Dynamic Checkbox</h3>
    <pre>{{ vanilla.items }}</pre>
    <div class="vanilla-item-wrapper">
      <div
        :key="`vanilla_item_${index}`"
        class="mb-4"
        color="grey lighten-4"
        v-for="(item, index) in vanilla.items"
      >
        <input
          type="checkbox"
          label="Primary"
          v-model="item.primary"
        />
        <input
          @click="vanilla.items.splice(index, 1)"
          type="button"
          value="Remove"
        >
      </div>
      <input
        @click="vanilla.items.push({})"
        type="button"
        value="Add Another Item"
      >
    </div>
    <h3>Vuetify Dynamic Checkbox</h3>
    <pre>{{ vuetify.items }}</pre>
    <div class="vuetify-item-wrapper">
      <v-card
        :key="`vuetify_item_${index}`"
        class="mb-4"
        color="grey lighten-4"
        v-for="(item, index) in vuetify.items"
      >
        <v-card-title>
          <h4>
            item
          </h4>
        </v-card-title>
        <v-card-text>
          <v-checkbox
            label="Primary"
            v-model="item.primary"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="vuetify.items.splice(index, 1)"
            flat
          >
            Remove
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-btn
        @click="vuetify.items.push({})"
        class="ml-0 d-block"
      >
        Add {{ vuetify.items.length ? 'Another' : '' }} Item
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      single: {},
      vanilla: {
        items: []
      },
      vuetify: {
        items: []
      }
    };
  }
};
</script>

<style scoped>
pre {
  background-color: #000;
  color: #fff;
  padding: 10px;
}
</style>
