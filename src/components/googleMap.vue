<template>
  <div class="googleMap">
    <div class="col-sm-offset-1">
      <!--基本地图-->
      <gmap-map
        :center="{lat: 10, lng: 10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px;"
      ></gmap-map>

      <!--有坐标点的地图-->
      <gmap-map
        :center="center"
        :zoom="7"
        style="width: 500px; height: 300px"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>

    </div>
  </div>
</template>

<script>
  export  default {
    name: 'googleMap',
    data () {
      return {
        center: {lat: 30.0, lng: 120.0},
        markers: [{
          position: {lat: 30.0, lng: 120.0}
        }, {
          position: {lat: 31.0, lng: 121.0}
        }]
      }
    }
  }
</script>
