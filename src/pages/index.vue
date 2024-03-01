<template>
<div>
  <resume></resume>
</div>
</template>

<script>
// 便于修改
module.exports = {
  metaInfo: {
    title: 'byeyang | 个人简历'
  },
  components: {
    'resume': httpVueLoader('/src/pages/resume.vue')
  }
}
</script>

<style>

</style>
