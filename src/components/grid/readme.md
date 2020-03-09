# Grid

```js
import { Row, Column } from "@guyn/ds";
```

<script>
export default {
    components: {Row : ()=>import('./Row'),Column : ()=>import('./Column')}
}
</script>

#### Breakpoints;

| prop     | default             | description             |
| -------- | ------------------- | ----------------------- |
| `small`  | `0px` > `800px`     | Size from small and up  |
| `medium` | `801px` > `1200px`  | Size from medium and up |
| `large`  | `1201px` > `1201px` | Size from large and up  |

#### Row

The row is a container for columns.

<Example>
<Row style="border: 1px solid var(--color-blue); padding: 1em" :gap="1">
  <Column style="border: 1px dashed var(--color-ice); padding: 1em" size="half">Half</Column> 
  <Column style="border: 1px dashed var(--color-ice); padding: 1em" small="half" medium="quarter">Half, and quarter from medium</Column>
  <Column style="border: 1px dashed var(--color-ice); padding: 1em" small="half" medium="quarter">Half, and quarter from medium</Column>
</Row>

<template slot="code">

```html
<Row>
	<Column size="half">Half</Column>
	<Column small="half" medium="quarter">Half, and quarter from medium</Column>
	<Column small="half" medium="quarter">Half, and quarter from medium</Column>
</Row>
```

</template>
</Example>

#### Column

A column is a container for items. A column should always been directly in a Row.

<Example>

<Row style="border: 1px dashed var(--color-ice); padding: 1em" :gap="1">
  <Column style="border: 1px solid var(--color-blue); padding: 1em" size="two-third">Half</Column> 
  <Column style="border: 1px solid var(--color-blue); padding: 1em" small="full" medium="third">Half, and quarter from medium</Column>
</Row>
</Example>
