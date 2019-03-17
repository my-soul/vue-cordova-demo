<template>
  <div class="about">
    <button @click="getPosition">getPosition</button>
    <div v-if="position">
      <div>
        纬度：{{ position.coords.latitude }}
      </div>
      <div>
        经度：{{ position.coords.longitude }}
      </div>
      <div>
        海拔：{{ position.coords.altitude }}
      </div>
      <div>
        方向：{{ position.coords.heading }}
      </div>
      <div>
        速度：{{ position.coords.speed }}
      </div>
      <div>
        时间戳：{{ position.timestamp }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: null,
    };
  },
  methods: {
    getPosition() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
      }, () => {});
    }
  }
}
</script>
