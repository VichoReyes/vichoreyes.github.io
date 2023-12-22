---
layout: post
title: "Demos of native HTML things"
---

This contains native things, to check how they work on different devices/browsers easily. Most examples are either taken from [Mozilla MDN](https://developer.mozilla.org/en-US/) directly or slightly edited.

## Select Multiple

<select multiple name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>

code:

```html
<select multiple name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
```

## Input with Datalist

You can add a `list` attribute to some `input` types, to give suggestions, like a native, limited select2 alternative. The suggestions themselves should be in a `<datalist>`, and the `list` attribute is the `id` of the corresponding `datalist`.

Here is the `<input type="text">` version:

<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Chocolate"></option>
  <option value="Coconut"></option>
  <option value="Mint"></option>
  <option value="Strawberry"></option>
  <option value="Vanilla"></option>
</datalist>

And here are versions for 5 time selection `<input>`s.

 datetime-local 

<label>Select with type time:
<input type="time" list="popularHours" />
</label>
<datalist id="popularHours">
  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>

<label>Select with type month, suggesting 2023-12, 2020-03 and 2016-08:
<input type="month" list="interestingMonths" />
</label>
<datalist id="interestingMonths">
  <option value="2023-12"></option>
  <option value="2020-03"></option>
  <option value="2016-08"></option>
</datalist>

<label>Select with type week, suggesting some weeks at the beginning of 2023:
<input type="week" list="interestingWeeks" />
</label>
<datalist id="interestingWeeks">
  <option value="2023-W2"></option>
  <option value="2023-W3"></option>
  <option value="2023-W8"></option>
</datalist>


<label>Select with type date, suggesting some dates at the beginning of 2023:
<input type="date" list="interestingDates" />
</label>
<datalist id="interestingDates">
  <option value="2023-02-23"></option>
  <option value="2023-01-04"></option>
  <option value="2023-01-15"></option>
</datalist>


<label>Select with type datetime-local
<input type="datetime-local" list="interestingDateTimes" />
</label>
<datalist id="interestingDateTimes">
  <option value="2023-02-23T14:00"></option>
  <option value="2023-01-04T12:15"></option>
  <option value="2023-01-15T13:30"></option>
</datalist>

For the code, use _inspect element_.


