<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length > 0">
    <table>
      <tr v-for="(item, index) in paramInfo.table" :key="index">
        <td v-for="(v, i) in item" :key="i">{{ v }}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(item, index) in paramInfo.set" :key="index">
        <td class="info-key">{{ item.key }}</td>
        <td class="info-value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.param-info .info-key {
  width: 95px;
}
.param-info .info-value {
  color: #eb4868;
}
</style>