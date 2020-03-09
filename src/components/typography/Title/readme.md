# Title

```js
import { Title } from "@guyn/ds";
```

<script>
export default {
    components: {Title : ()=>import('./Title')}
}
</script>

### Headings

<Example title="Heading 1">
<Title as="h1">Hoiii</Title>
</Example>

<Example title="Heading 2">
<Title as="h2">Hoiii</Title>
</Example>

<Example title="Heading 3">
<Title as="h3">Hoiii</Title>
</Example>

<Example title="Heading 4">
<Title as="h4">Hoiii</Title>
</Example>

<Example title="Heading 5">
<Title as="h5">Hoiii</Title>
</Example>

<Example title="Heading 6">
<Title as="h6">Hoiii</Title>
</Example>

### Color

Titles can have different color by adding the `color` prop. Available colors are all main Guyn colors.

<Example title="Heading 1">
<Title as="h1" color="red">Hoiii</Title>
<Title as="h2" color="green">Doeiii</Title>
<Title as="h3" color="orange">La la la</Title>
</Example>

### Label

All titles can have a label in front by adding the `label` prop to the element.

<Example title="Heading 1">
<Title as="h1" label="New!">Hoiii</Title>
<Title as="h2" label="New!">Doeiii</Title>
<Title as="h3" label="New!">La la la</Title>
</Example>
