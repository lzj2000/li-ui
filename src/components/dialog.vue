<template>
<transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
    <div class="li-dialog__wrapper" v-show="visible" @click.self="handleClose">
    <div class="li-dialog" :style="{width, marginTop: top}">
      <div class="li-dialog__header">
        <slot name="title">
            <span class="li-dialog__title">{{title}}</span>
        </slot>
        <button class="li-dialog__headerbtn" @click="handleClose">
          <i class="li-icon-close" style="color:#909399"></i>
        </button>
      </div>
      <div class="li-dialog__body">
        <slot></slot>
      </div>
      <div class="li-dialog__footer" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'LiDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      tpye: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('close', false)
    }
  }
}
</script>

<style lang="scss">
.li-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .li-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .li-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .li-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        background: transparent;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .li-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: dialog-fade-in .4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out .4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
