# InputText

```js
import { InputText } from "@guyn/ds";
```

<script>
export default {
    components: {
        InputText : ()=>import('../InputText')
    }
}
</script>

### Default

The default checkbox.

<Example title="default">
<InputText label="test" />
</Example>

<Example title="placeholder">
<InputText label="First Name" placeholder="John Doe"/>
</Example>

<Example title="Instructions">
<InputText label="E-mail address" placeholder="john@doe.com" instructions="Fill in your e-mail address name here, it is in this case, used just as an example" />
</Example>
