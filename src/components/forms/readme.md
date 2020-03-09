# Form Elements

```js
import { Button, Checkbox, Radio, InputText, TextArea, Select } from "@guyn/ds";
```

<script>
export default {
    components: {
        Button : ()=>import('../general/Button'),
        Checkbox : ()=>import('./Checkbox'),
        Radio : ()=>import('./Radio'),
        InputText : ()=>import('./InputText'),
        TextArea : ()=>import('./TextArea'),
        Select : ()=>import('./Select')
    }
}
</script>

### Checkbox

The default checkbox.

<Example>
<Checkbox label="test" />
</Example>

<Button to="components/forms/checkbox">Checkbox</Button>

### Radio

<Example>
<Radio label="test" />
</Example>
<Button to="components/forms/Radio">Radio</Button>

### InputText

<Example>
<InputText label="test" />
</Example>
<Button to="components/forms/InputText">InputText</Button>

### TextArea

<Example>
<TextArea label="test" />
</Example>
<Button to="components/forms/TextArea">TextArea</Button>

### Select

<Example>
<Select label="test" />
</Example>
<Button to="components/forms/Select">Select</Button>
