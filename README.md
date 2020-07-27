# QuickElement

Simple way to create basic HTML elements with no other dependencies.

## Install

```
npm install --save quickelement

## Usage

import { el } from 'quickelement';

# Create an element with an img inside it.
let link = el("a", "my-class", {href: "http://example.com/"}, [
  el("img", "", {src: "image.jpg})
])

document.body.appendChild(link)

```

Or even quicker:

```
import { div } from 'quickelement';

let clock = div('clock', {id: 'nyc'}, [
  div('hours', {}, '23'),
  div('minutes', {}, '36)
])

```