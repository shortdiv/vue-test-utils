<template>
  <button @click="someMethod">Button</button>
</template>

<script>
  export default{
    name: 'component-with-click-method',
    methods: {
      someMethod () {
        console.log('some method')
      }
    }
  }
</script>
