# Modal

```js
import Modal from "@guyn/ds";
```

<script>
export default {
    components: {
       Modal : ()=>import('../Modal'), 
       Button : ()=>import('../Button') 
    },data:()=>({
        modal: false
    })
}
</script>

#### Props

<!--
| prop    | default | description                                        |
| ------- | ------- | -------------------------------------------------- |
| `image` | `null`  | When applied, the image will be created in the top |
| `title` | `null`  | A title can be set                                 |
| `link`  | `null`  | A card can have a link                             |
| `color` | `null`  | Give the card a color                              | -->

#### Default

A default card is just a little block.

<Example>
<Button @click="modal = true">Open modal</Button>
<Modal :open="modal">I am a card and this is the content</Modal>

<template slot="code">

```html
<Modal>I am a card and this is the content</Modal>
```

</template>
</Example>
