# Button

<script>
export default {
    components: {Button : ()=>import('./Button')}
}
</script>

#### Default

A default button will use the primary defined colors.

<Example title="Base">
<Button>Hoiii</Button>
</Example>

#### Color

The button can be colored in any color provided. By default these are all Guyn colors. The button can be colored by setting it's `color` prop.

<Example title="Colors">
   <Button color="red">Hoiii</Button>
   <Button color="blue">Hoiii</Button>
   <Button color="green">Hoiii</Button>
   <Button color="yellow">Hoiii</Button>
   <Button color="orange">Hoiii</Button>
   <Button color="purple">Hoiii</Button>
</Example>
