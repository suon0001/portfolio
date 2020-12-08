<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input 
        type="checkbox" 
        :checked="(mode === 'dark') ? 'checked' : false" 
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style lang="scss">
@import "@/scss/template.scss";
@import "@/scss/variables.scss";
@import "@/scss/toggler.scss";

</style>

