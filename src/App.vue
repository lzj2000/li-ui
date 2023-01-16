<template>
  <div>
<!--     <div class="row">
      <li-button @click="getInfo">按钮</li-button>
      <li-button type="primary">按钮</li-button>
      <li-button type="success">按钮</li-button>
      <li-button type="info">按钮</li-button>
      <li-button type="warning">按钮</li-button>
      <li-button type="danger">按钮</li-button>
    </div>
    <div class="row">
      <li-button plain icon="bluetoothon">按钮</li-button>
      <li-button plain type="primary" icon="camera" >按钮</li-button>
      <li-button plain type="success" icon="course">按钮</li-button>
      <li-button plain type="info" icon="bluetooth_link">按钮</li-button>
      <li-button plain type="warning" icon="addto">按钮</li-button>
      <li-button plain type="danger" icon="audio">按钮</li-button>
    </div>
    <div class="row">
      <li-button round plain>按钮</li-button>
      <li-button round plain type="primary">按钮</li-button>
      <li-button round plain type="success">按钮</li-button>
      <li-button round plain type="info">按钮</li-button>
      <li-button round plain type="warning">按钮</li-button>
      <li-button round plain type="danger">按钮</li-button>
    </div>
    <div class="row">
      <li-button circle plain>按</li-button>
      <li-button circle plain type="primary">按</li-button>
      <li-button circle plain type="success">按</li-button>
      <li-button circle plain type="info">按</li-button>
      <li-button circle plain type="warning">按</li-button>
      <li-button circle plain type="danger">按</li-button>
    </div>
    <div class="row">
      <li-button icon="bluetoothon" circle></li-button>
      <li-button type="primary" icon="camera" circle></li-button>
      <li-button type="success" icon="course" circle></li-button>
      <li-button type="info" icon="bluetooth_link" circle></li-button>
      <li-button type="danger" icon="addto" circle></li-button>
      <li-button type="warning" icon="audio" circle></li-button>
    </div>
    <div class="row">
      <li-button icon="bluetoothon" circle disabled></li-button>
      <li-button type="primary" icon="camera" circle disabled></li-button>
      <li-button type="success" icon="course" circle disabled></li-button>
      <li-button type="info" icon="bluetooth_link" circle disabled></li-button>
      <li-button type="danger" icon="addto" circle disabled></li-button>
      <li-button type="warning" icon="audio" circle disabled></li-button>
    </div> -->
    <li-button @click="visible=true">dialog</li-button>
    <li-dialog title="温馨提示" top="400px" width="90%" :visible="visible" @close="close">
      这是一段内容
      <template v-slot:footer>
        <li-button type="primary" @click="visible=false">确定</li-button>
        <li-button @click="visible=false">取消</li-button>
      </template>
    </li-dialog>
    <!-- <li-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </li-dialog> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    getInfo () {
      console.log('获取信息！！')
    },
    close () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .li-button {
    margin-right: 20px;
  }
}
</style>
