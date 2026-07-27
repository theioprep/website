Labeled single-line text input, used for signup, checkout, and account forms.

```jsx
<Input label="Email" placeholder="you@school.edu" value={v} onChange={e=>setV(e.target.value)} />
```

Pass `error` to show a validation message and turn the border red.
