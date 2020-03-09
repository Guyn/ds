# Colors

```js
import Colors from "@guyn/color";
```

<script>
import Colors from './base.json';

export default {
    computed: {
        allColors(){
            return Colors;
        }
    }
}
</script>

### Default

<div class="color-block__overview">
<div class="color-block__item" v-for="(value,key) in allColors" >
    <div class="color-block__block" :style="`background-color: ${value}`">{{key}}</div>
   <div class="color-block__description"> <div class="color-block__title">{{key}}</div>
    <div class="color-block__value">{{value}}</div></div>
</div>
</div>

<style lang="scss">
/* @import 'base'; */
.color-block{   
    &__overview{
        display: flex; 
        flex-wrap: wrap;
    }
    &__block{
        padding: var(--base-padding, 1em); 
        border-radius: var(--base-border-radius, 0.5em); 
        color: transparent;
        /* background: var(--background-color) */
    }
    &__item{  padding: var(--base-padding, 1em); margin: var(--base-margin, 0.5em);} 
    &__value{
        opacity: 0.5;
    }
    &__description{ padding: var(--base-padding, 1em); 
    }
}
</style>
