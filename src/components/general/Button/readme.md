# Button

<script>
export default {
    components: {Button : ()=>import('./Button')}
}
</script>

#### Props

| prop        | default | description                                         |
| ----------- | ------- | --------------------------------------------------- |
| `link`      | null    | Either an outgoing link or a Route link.            |
| `color`     | null    | Any main color defined by Guyn                      |
| `icon`      | null    | Name of an icon, which will be placed in the button |
| `secondary` | false   | Is the button secondary?                            |

#### Default

A default button will use the primary defined colors.

<Example title="Base">
<Button>Hoiii</Button>
</Example>

#### Secondary button

The button can be colored in any color provided. By default these are all Guyn colors. The button can be colored by setting it's `color` prop.

<Example title="Colors">
   <Button secondary>Hoiii</Button>
</Example>

#### Color

The button can be colored in any color provided. By default these are all Guyn colors. The button can be colored by setting it's `color` prop.

<Example title="Primary Colors">
<table>
    <thead>
    <tr>
        <th></th>
        <th>Default</th>
        <th>Secondary</th>
    </tr>
    </thead>
    <tr>
        <td>Red</td>
        <td><Button color="red">Hoiii</Button></td>
        <td><Button secondary color="red" >Hoiii</Button></td>
    </tr>
    <tr>
        <td>Green</td>
        <td><Button color="blue">Hoiii</Button></td>
        <td><Button color="blue" secondary>Hoiii</Button></td>
    </tr>
    <tr>
        <td>Yellow</td>
        <td><Button color="yellow">Hoiii</Button></td>
        <td><Button color="yellow" secondary>Hoiii</Button></td>
    </tr>
    <tr>
        <td>Orange</td>
        <td><Button color="orange">Hoiii</Button></td>
        <td><Button color="orange" secondary>Hoiii</Button></td>
    </tr>
    <tr>
        <td>Purple</td>
        <td><Button color="purple">Hoiii</Button></td>
        <td><Button secondary color="purple" >Hoiii</Button></td>
    </tr>
</table>
</Example>

#### Disabled button

A disabled button can not be clicked and can be set by adding `disabled` to the button. The disabled button is automatically greyed out and unclickable.

<Example title="Colors">
<table>
    <thead>
    <tr>
        <th></th>
        <th>Normal</th>
        <th>Disabled</th>
    </tr>
    </thead>
    <tr>
        <td>Red</td>
        <td><Button color="red">Hoiii</Button></td>
        <td><Button  color="red" disabled>Hoiii</Button></td>
    </tr>
    <tr>
        <td>Blue secondary</td>
        <td><Button color="blue" secondary>Hoiii</Button></td>
        <td><Button  color="blue" secondary disabled>Hoiii</Button></td>
    </tr>
</table>
</Example>
