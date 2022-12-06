<template>
  <a @click="$emit('input', !value)" class="">
    <input type="checkbox" :value="value" />
    <div class="toggle-base">
      <feather
        class="absolute"
        :class="{ oculte: !value }"
        stroke="white"
        type="sun"
        size="15"
      ></feather>
      <div :class="{ oculte: value }" class="absolute moon d-flex align-center">
        <feather stroke="white" type="moon" size="15"></feather>
      </div>
      <transition name="move">
        <div
          class="toggle-circle absolute"
          :class="{ 'light-select': value }"
        ></div>
      </transition>
    </div>
  </a>
</template>

<script>
import feather from "vue-feather";
export default {
  components: {
    feather,
  },
  props: {
    value: Boolean,
  },
};
</script>

<style scoped>
input {
  display: none;
}
.absolute {
  position: absolute;
}
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.none {
  display: none;
}
.light-select {
  margin-left: 22px;
}
.moon {
  right: 0;
  margin-right: 4px;
}
.oculte {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.toggle-base {
  justify-content: space-between;
  background: #5093fe;
  width: 41px;
  height: 26px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  position: relative;
}
.toggle-circle {
  transition: all 0.5s ease;
  background: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
</style>
