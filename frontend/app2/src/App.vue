<template>
  <div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-3">
          <c_ListRequest @categorySelected="categorySelectedHandler" />
        </div>
        <div class="col-sm-9 col-md-9">
          <c_Map />
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import axios from 'axios'
import c_ListRequest from './components/c_ListRequest.vue'
import c_Map from './components/c_Map.vue'
export default {
  name: 'App',
  components: {
    c_ListRequest, c_Map
  },
  data () {
    return {
      selectedCategoryName: '',
      productList: []
    }
  },
   methods: {
    categorySelectedHandler(args) {
      // alert(JSON.stringify(args));

      var self = this;
      self.selectedCategoryName = args.CatName;

      axios.get(`http://localhost:3000/categories/${args.CatID}/products`)
        .then(res => {
          self.productList = res.data.products;
        }).catch(err => {
          console.log(err);
        })
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
