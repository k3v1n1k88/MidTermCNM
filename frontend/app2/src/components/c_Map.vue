<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">List request</h3>
    </div>
    <div class="list-group">
      <a v-for="c in list" :key="c.CatID" href="javascript:;" class="list-group-item" :class="{active: selected === c.CatID}" @click="categoryClicked(c.CatID, c.CatName)">{{c.CatName}}</a>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name : 'c_ListRequest',
  data () {
      return {
        list: [
          { CatID: 1, CatName: 'Laptop'},
          { CatID: 2, CatName: 'Tablet'},
        ],
        selected: -1
      }
    },
    methods: {
    categoryClicked(id, name) {
      var self = this;
      self.selected = id;

      var args = {
        CatID: id,
        CatName: name
      }
      self.$emit('categorySelected', args);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
