<template>
  <div :class="skeletonClasses" />
</template>

<script>
import { computed } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebSkeleton',
  props: {
        // Individual props will be auto-generated based on the component type
        // This is a placeholder that will be manually refined per component
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
        shapeClasses[props.shape] || 'rounded-md',
        props.customClasses
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
  width: v-bind('width');
}
.skeleton-height {
  height: v-bind('height');
}
</style> 