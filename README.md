# ☕ Chai-Tailwind

A lightweight, **Runtime Utility-First CSS Engine** built with Vanilla JavaScript and the DOM API. This engine allows you to style your HTML using custom `chai-` prefixed classes that are processed and converted into inline styles at runtime.

## 🚀 How it Works

Unlike standard Tailwind which requires a Node.js build step, **Chai-Tailwind** operates directly in the browser using the DOM:

1.  **Selection**: It identifies every element containing a `chai-` class using a CSS attribute selector.
2.  **Snapshot**: It converts the element's `classList` into a static array to prevent "loop skipping" when classes are removed.
3.  **Mapping**: It matches found classes against a centralized `tailwindConfig` object.
4.  **Injection**: It applies the corresponding CSS properties directly to the element's `style` object.
5.  **Cleanup**: It removes the utility classes from the DOM to keep the final HTML clean and readable.

## 🛠️ Usage

1. **Add the Script**: Link the script at the bottom of your `index.html`.
2. **Write Utilities**: Use the `chai-` prefix in your HTML tags.

```html
<p class="chai-bg-black chai-text-white chai-p-10 chai-rounded-lg">
  Styled with Chai-Tailwind!
</p>