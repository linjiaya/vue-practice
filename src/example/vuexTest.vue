<template>
  <div class="vuexTest">
    showSingle: {{showSingle}}<br>
    show: {{show}}<br>
    no_show: {{no_show}}
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: 'vuexTest',
  computed: {
    showSingle () {
      return this.$store.state.dialog.show;
    },
    ...mapState({
      show (state) {
        return  state.dialog.show
      },
      no_show: state => !state.dialog.show
    })
  }
}
</script>
