export const props = {
  items: {
    type: Array,
    required: true,
  },

  keyField: {
    type: String,
    default: "id",
  },

  direction: {
    type: String,
    default: "vertical",
    validator: value => ["vertical", "horizontal"].includes(value),
  },

  /**
   * The number of items back from the end of the list when a `end:threshold`
   * event should be raised.
   */
  endingThreshold: {
    type: Number,
    default: 3,
  },

  tag: {
    type: String,
    default: "div",
  },

  listTag: {
    type: String,
    default: "ul",
  },

  itemTag: {
    type: String,
    default: "li",
  },
};

export function simpleArray() {
  return this.items.length && typeof this.items[0] !== "object";
}

export const rAF = window.requestAnimationFrame;
