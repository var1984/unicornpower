<template lang="pug">
div  
    div {{error.statusCode}}
    div {{error.message}}
</template>
        
<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'error',
    layout: 'error-layout',
    props: ['error']

})
</script>
