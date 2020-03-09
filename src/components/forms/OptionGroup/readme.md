# OptionGroup

```js
import { OptionGroup } from "@guyn/ds";
```

<script>
export default {
    data: ()=>({
        exampleOptions: [
            { label: "Option 1", value: true },
            { label: "Another option", value: false },
            { label: "Last option", value: false }
        ]
    }),
    components: {
        OptionGroup : ()=>import('../OptionGroup')
    }
}
</script>

<Example>
<OptionGroup group="row" :options="exampleOptions" />
</Example>
