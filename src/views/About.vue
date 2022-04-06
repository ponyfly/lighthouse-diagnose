<template>
  <div>this is about</div>
  <router-link to="/">go home</router-link>
  <el-button type="primary">primary button</el-button>
  <my-echarts></my-echarts>
</template>

<script>
import Echarts from "@/components/Echarts";
import { ElButton } from 'element-plus'
export default {
  name: "BusAbout",
  components: {
    'my-echarts': Echarts,
    ElButton
  },
  directives: {},
  filters: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.hello {
  color: red;
}
</style>
