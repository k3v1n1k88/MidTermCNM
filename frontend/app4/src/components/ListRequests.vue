<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sort direction" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortDirection" slot="append">
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
              <option value="last">Last</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Per page" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-direction="sortDirection"
             @filtered="onFiltered"
    >
        <template slot='index' slot-scope="row">{{row.index+1}}</template>

        <template slot="detail" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target);searchLocation(row.item.address)" class="mr-1">
          Show Map
        </b-button>
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <li>Name: {{row.item.name}}</li>
          <li>Address: {{row.item.address}}</li>
          <li>Phone: {{row.item.phone}}</li>
          <li>Note: {{row.item.note}}</li>
        </b-card>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <br>
        <gmap-map
          :center="currentPlace"
          :zoom="16"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
          ></gmap-marker>

        </gmap-map>
      </div>
      <pre>{{ modalInfo.content }}</pre>

    </b-modal>

  </b-container>
</template>

<script>

const items = [
    { name: 'Nguyen Van A', address: '14, Cu Xa Thanh Da, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van B', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van C', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van D', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van E', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van F', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van G', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van H', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van K', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van L', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van A', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van A', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van A', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van A', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van A', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
    { name: 'Nguyen Van A', address: 'Cho Ba Chieu, Binh Thanh', phone: '0983748340', note:'' },
]

export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'index', label: 'No.'},
        { key: 'name', label: 'Name', sortable: true, sortDirection: 'desc' },
        { key: 'address', label: 'Address', sortable: true, 'class': 'text-center' },
        { key: 'phone', label: 'Phone' },
        { key: 'note', label: 'Note' },
        { key: 'detail', label: 'Detail'}
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      modalInfo: { title: '', content: '' },
      center: { lat: 10.813910, lng: 106.703470 },
      markers: [],
      places: [],
      currentPlace: { lat: 10.813910, lng: 106.703470 }
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    info (item, index, button) {
      this.modalInfo.title = `Row index: ${index}`
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'modalInfo', button)
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    setPlace(place) {
      console.log(place)
      this.searchLocation(place);
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    searchLocation: function(address){
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': address}, (results, status) => {
        if (status === 'OK') {
          console.log(status)
          var place;
          console.log(results[0].geometry.location.lat());
          console.log(results[0].geometry.location.lng())
          this.currentPlace = new google.maps.LatLng(results[0].geometry.location.lat(),results[0].geometry.location.lng());
          console.log(this.currentPlace.toString())
          this.markers.push({ position: this.currentPlace});
        }
      });
    }
  },
  mounted: function () {
    this.geolocate();
  }
}
</script>
<style scoped>
.google-map {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>

<!-- table-complete-1.vue -->