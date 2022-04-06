<template>
  <div class="Echarts">
    <div id="main" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);
export default {
  name: 'BusEcharts',
  components: {},
  directives: {},
  filters: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
    this.myEcharts();
  },
  methods: {
    myEcharts(){
      const myChart = echarts.init(document.getElementById('main'));
      //配置图表
      const option = {
        title: {
          text: 'echarts入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5,20,36,10,10,20]
        }]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style lang="less" scoped>

</style>
