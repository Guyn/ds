# Notifications

<script>
export default {
    components: {Notification : ()=>import('./Notification')}
}
</script>

#### Default

A default button will use the primary defined colors.

<Example title="Base">
<Notification><h4>Hi! Check this..</h4>
<p>Aliquam dapibus, eros sit amet lobortis vestibulum, enim nunc elementum elit, sit amet blandit dui dolor id risus. Integer magna erat, fringilla ac eleifend a, facilisis at ex. </p>
</Notification>

</Example>

<Example title="Error">
<Notification type="error"><h4>An error</h4><p>Praesent vitae enim ut tortor efficitur semper. Aenean et placerat nisi, sed tincidunt massa. Ut magna urna, lobortis id diam sit amet, malesuada viverra libero. Aenean posuere sed ex quis tincidunt. Phasellus tellus dui, consectetur ac dolor et, porttitor viverra tellus.</p></Notification>

</Example>

<Example title="Warning">
<Notification type="warning"><h4>Watch out!</h4><p>Proin suscipit varius enim. Sed viverra tincidunt est non vestibulum. Ut sed mattis tellus. Proin in urna in massa ultrices ullamcorper. Quisque placerat semper fringilla. Quisque suscipit vitae eros in finibus. Aenean nec dictum diam. Nullam eu ligula ullamcorper, auctor augue vitae, facilisis orci. Aliquam dapibus lectus at dui interdum cursus.</p>
</Notification>

</Example>

<Example title="Success">
<Notification type="success"><h4>Oh yeah!</h4>
<p>Aliquam dapibus, eros sit amet lobortis vestibulum, enim nunc elementum elit, sit amet blandit dui dolor id risus. Integer magna erat, fringilla ac eleifend a, facilisis at ex. </p></Notification>

</Example>
