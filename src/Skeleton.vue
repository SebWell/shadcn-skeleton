<template>
  <div :class="skeletonClasses" />
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebSkeleton',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        width: 'auto',
        height: 'auto',
        shape: 'rounded',
        customClasses: ''
      })
    }
  },
  setup(props) {
    const skeletonClasses = computed(() => {
      const shapeClasses = {
        'rounded': 'rounded-md',
        'circle': 'rounded-full',
        'square': 'rounded-none'
      }
      
      return cn(
        "animate-pulse bg-muted",
        shapeClasses[props.content.shape] || 'rounded-md',
        props.content.customClasses
      )
    })

    return {
      skeletonClasses
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style>

<style scoped>
.skeleton-width {
  width: v-bind('content.width');
}
.skeleton-height {
  height: v-bind('content.height');
}
</style> 