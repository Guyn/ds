export const DefaultProps = {
	checked: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
	readOnly: { type: Boolean, default: false },
	name: { type: String, default: null },
	label: { type: String, default: null },
	type: { type: String, default: null },
	instructions: { type: String, default: null },
	value: { type: String, default: null },
	inline: { type: Boolean, default: false }
};
export const TextProps = {
	placeholder: { type: String, default: " " },
	pattern: { type: String, default: null },
	unit: { type: String, default: null }
};
export const GroupProps = {
	options: { type: Array, default: () => [] },
	group: { type: String, default: null },
	multi: { type: Boolean, default: false }
};

export const FieldProps = {
	focus: {
		type: Boolean,
		default: false
	},
	type: {
		type: String,
		default: null
	},
	instructions: {
		type: String,
		default: null
	},
	fieldId: {
		type: String,
		default: null
	},
	inline: {
		type: Boolean,
		default: false
	}
};
