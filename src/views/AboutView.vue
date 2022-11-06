<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="count++">{{count}}</button>
    <button @click="clickMe">clickme</button>
    <li v-for="item in items" :key="item.id" >{{item.name}}</li>
    <p>message is {{ message }}</p>
    <input v-model="message" placeholder="clickme" ref="items" />
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
export default {
  setup() {
    console.log(1)
  },
  data () {
    return {
      count: 0,
      message: 'abc',
      items: [{id:1,name:'jacky'},
       {id:2,name:'james'}
      ],
      toggle: true 
    }
  },
  mounted: function () {
    console.log(this.count)
    this.$refs.items.focus()
  },
  methods: {
    clickMe: function () {
      console.log(this.count)
    }
  }
}
</script>
