# Flexbox in vertical layouts

An exploration of Flexbox behaviour in vertical layouts.

## Stream of conscious experiment notes

1. Nothing has a height when there is no content, but will be the width of the viewport. Why? Because browser stylesheets. Fun fact, everything is an inline box by default!
2. Simplest is to set `writing-mode` on `html`. Then the `inline-size` is the viewport size and `block-size` is nothing.
3. Without logical properties, we flip our guidelines from `horizontal-tb` land to set `width: 100%` on `html` so it has a `block-size`.
4. Use CSS logical properties so your brain does not explode.
