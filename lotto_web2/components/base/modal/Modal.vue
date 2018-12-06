<template>
  <transition
    :name="transition"
    mode="in-out"
    appear
    :appear-active-class="enterClass"
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
    @beforeEnter="beforeEnter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @afterLeave="afterLeave"
  >
    <div :class="classes" v-if="show">
      <div class="modal-background" @click="deactive"></div>
      <div class="modal-container">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
      <button class="modal-close" @click="deactive" v-if="closable"></button>
    </div>
  </transition>
</template>

<script>
import BaseModal from './BaseModal'
export default {
    props: {
      visible: Boolean,
      closable: {
          type: Boolean,
          default: true
      },
      transition: {
          type: String,
          default: 'fade'
      }
    },
  
    data () {
      return {
        show: this.visible
      }
      
    },
    computed: {
      classes () {
        return ['modal', 'animated', 'is-active']
      }
    },
    mounted () {
      document.body.appendChild(this.$el)
    },
  
    methods: {
      beforeEnter () {
        this.$emit('open')
      },
      
      afterEnter () {
        this.$emit('opened')
      },
  
      beforeLeave () {
        this.$emit('before-close')
      },
      
      afterLeave () {
        this.$emit('close')
      },
  
      active () {
        this.show = true
      },
  
      deactive () {
        if(this.closable)
          this.show = false
      }
    },
  
    computed: {
      enterClass () {
        return `${this.transition}In`
      },
  
      leaveClass () {
        return `${this.transition}Out`
      }
    },
  
    watch: {
      visible (val) {
        this.show = val
      }
    }
}
</script>