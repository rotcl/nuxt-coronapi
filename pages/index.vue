<template>
  <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="bg-white max-w-xs rounded overflow-hidden shadow-xl">
      <div class="py-4 px-6">
        <div v-if="cases != null" class="font-bold text-xl text-center">
          {{ cases.total_confirmed | currency }}
        </div>
        <p class="text-gray-700 mt-2">Total confirmados</p>
      </div>
      <div class="h-px bg-gray-200"></div>
    </div>
    <div class="bg-white max-w-xs rounded overflow-hidden shadow-xl ml-8">
      <div class="py-4 px-6">
        <div v-if="cases != null" class="font-bold text-xl text-center">
          {{ cases.total_recovered | currency }}
        </div>
        <p class="text-gray-700 mt-2">Total recuperados</p>
      </div>
      <div class="h-px bg-gray-200"></div>
    </div>
    <div class="bg-white max-w-xs rounded overflow-hidden shadow-xl ml-8">
      <div class="py-4 px-6">
        <div v-if="cases != null" class="font-bold text-xl text-center">
          {{ cases.total_death | currency }}
        </div>
        <p class="text-gray-700 mt-2">Total muertos</p>
      </div>
      <div class="h-px bg-gray-200"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cases: null,
      timeline: null
    }
  },
  async beforeMount() {
    await this.$http
      .$get(`${process.env.API_BASE_URL}/casos`)
      .then(res => {
        this.cases = res
      })
      .catch(err => {
        alert(
          'There is a problem with the API, try again in a few minutes. \nDebug error: ' +
            err.response
        )
        this.$router.push('/')
      })
    await this.$http
      .$get(`${process.env.API_BASE_URL}/timeline`)
      .then(res => {
        this.timeline = res
      })
      .catch(err => {
        alert(
          'There is a problem with the API, try again in a few minutes. \nDebug error: ' +
            err.response
        )
        this.$router.push('/')
      })
  }
}
</script>
