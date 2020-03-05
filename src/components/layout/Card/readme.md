# Card

<script>
export default {
    components: {
        Card : ()=>import('./Card'), 
        Row: ()=>import("../../grid/Row"), 
        Column: ()=>import("../../grid/Column")
    }
}
</script>

#### Props

| prop    | default | description                                        |
| ------- | ------- | -------------------------------------------------- |
| `image` | `null`  | When applied, the image will be created in the top |
| `title` | `null`  | A title can be set                                 |
| `link`  | `null`  | A card can have a link                             |
| `color` | `null`  | Give the card a color                              |


#### Default

A default card is just a little block.

<Example>
<Card>I am a card and this is the content</Card>

<template slot="code">

```html
<Card>I am a card and this is the content</Card>
```
</template>
</Example>

#### With title

A default card is just a little block.

<Example>
<Card title="I am card">And this is the content</Card>

<template slot="code">

```html
<Card title="I am card">And this is the content</Card>
```
</template>
</Example>


#### With image

An image card add a image to the top.

<Example>
<Card title="I am card" image="https://images.unsplash.com/photo-1582360863556-6ad64b4839ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80">And this is the content</Card>

<template slot="code">

```html
<Card title="I am card" image="[image url]">And this is the content</Card>
```
</template>
</Example>

#### Using colors

A default card is just a little block.

<Example>
<Row gap="1">
<Column size="third">
<Card color="red" title="I am Red card" image="https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80">And this is the content</Card>
</Column>
<Column size="third">
<Card color="blue" title="I am Blue card" image="https://images.unsplash.com/photo-1520176501380-9a174bf7c783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80">And this is the content</Card>
</Column>
<Column size="third">
<Card color="green" title="I am Green card" image="https://images.unsplash.com/photo-1573952106639-694daec2b88a?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">And this is the content</Card>
</Column>
</Row>

<template slot="code">

```html
<Card color="red" title="I am Red card" image="[image url]">And this is the content</Card>
<Card color="blue" title="I am Blue card" image="[image url]">And this is the content</Card>
<Card color="green" title="I am Green card" image="[image url]">And this is the content</Card>
```
</template>
</Example>

#### With links

A default card is just a little block.

<Example>
<Row gap="1">
<Column size="half">
<Card color="red" link="#" title="I am Red Linked card" image="https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80">And this is the content</Card>
</Column>
<Column size="half">
<Card  link="#" title="I am Linked card" image="https://images.unsplash.com/photo-1520176501380-9a174bf7c783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80">And this is the content</Card>
</Column>
</Row>
</Example>