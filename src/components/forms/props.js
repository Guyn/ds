export const DefaultProps = {
  checked: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  name: { type: String, default: null },
  label: { type: String, default: null },
  type: { type: String, default: null },
  instructions: { type: String, default: null }
};
export const TextProps = {
  placeholder: { type: String, default: " " }
};
export const GroupProps = {
  options: { type: Array, default: () => [] },
  group: { type: String, default: null },
  multi: { type: Boolean, default: false }
};
