---
title: Yet another "computers are fast" post
layout: post
---

I've seen many of these posts, so reading this one probably doesn't help anyone learn anything new. But sometimes you get used to slow things, and remembering that it doesn't have to be this way comes as a surprise.

So I took an optional course on compact data structures in my last year of university, where we learned different representations of common CS data structures, like trees, arrays or text indexes, that were designed to use less bits than the traditional representations.
For example, ordinal tree structures can be represented as simple parentheses, like this `((())()(()()))`, which uses less than 2 bytes to represent the structure of a tree that, using 64-bit pointers and linked lists, would be around 60 bytes. "Supporting" data is needed to move around the trees efficiently, but the structures we studied usually had light supporting structures, with lower space requirements than the data itself.

So recently I decided to use this as an opportunity to try out Rust. And, because I've used Haskell before, I looked up whether there was a [QuickCheck](https://hackage.haskell.org/package/QuickCheck) (a library for property testing) analog for Rust. [There is](https://github.com/BurntSushi/quickcheck), and it's by an important Rustacean, the creator of ripgrep.

So, as I was writing my trees library, I added property tests. They helped me fix things I didn't think about, like really big numbers overflowing `i32`[^fenwick]. And the (small) test suite ran quickly, in about 10 milliseconds. So I got cocky, and started writing ever more expensive tests.

[^fenwick]: I used Fenwick Trees to quickly add up popcounts. These tests made me realize the tree nodes had to have larger integers than the numbers they added up. I know Fenwick trees aren't optimal when you're not going to mutate the underlying array, but I wanted to use them anyway, they're cool.

What prompted me to write this post was writing an O(n^2) property test, which ran 100 times, with n ~= 100. That's on the order of a million iterations total, and the test suite run time didn't perceptibly budge. At most, it took 10 more milliseconds. That would be **100 million iterations per second** at least, on a 3.2 MHz Apple M1 CPU.

I don't know how this can even happen. How many instructions per clock is that? Maybe quickcheck does parallel testing by default, or it could be that the Rust compiler is very good at optimizing, and this helps the CPU do less work. But it's still impressive.
Especially compared to my usual job (a Django web app), where running a single test usually takes about 5 seconds[^pydb]. In fairness, we use integration tests, which are significantly more complex, involving a DB connection among other things. But _man_, I'm sad about the Python + Docker on Mac slowness.

[^pydb]: And way more when debugging, which is one of the nice things about having tests at all.

