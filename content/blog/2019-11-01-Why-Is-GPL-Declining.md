---
layout: post
title: Why is GPL use declining?
---

Today I started writing a [reply on Hacker News](https://news.ycombinator.com/item?id=21420541)
in which I tried to answer the question in the title of this post,
and I ended up giving my answer to what license makes a project successful too.
I decided to post that reply here because it got too long. So here it is, with some modifications.

## Should projects use permissive or copyleft licenses to be successful?

Short answer: **It depends on the size and quantity of companies working on things related to the project** .

Say you want to make a business around a FOSS project. Which license should you choose for that project?

If your business starts gaining traction, people may realize it's a good business opportunity, and create companies that compete against you.

I'll simplify to two licenses, GPL and MIT. Then there's two options, based on which one you chose originally:

1) If you chose the GPL, then you can be sure that no competitor will get to use your code without allowing you to use theirs too. You can think of this as protection, ensuring no other company can make a product that's better than yours without starting from scratch. Because everyone is forced to publish their changes, your product will get better the more competition you have. However, your competitors will always be just a little behind you because you can't legally deny them access to the code.

2) OTOH if you chose MIT, a competitor can just take your project, make a proprietary improved version of it and drive you out of the market. The upside is if you get to be big enough, you can do exactly that to _your_ competitors.

You can see that when you are a small company the benefits of GPL outweigh the cons, but for big ones it's more convenient to use MIT or other permissive licenses. In fact, I think 
**the use of GNU GPL licenses is declining because tech companies tend to be bigger than before**.

Now say you want to make a business around some already existing software. And say there's two alternative versions of that software, one under the GPL and one under the MIT license (for example, Linux and BSD). Which one should base your business on? And contribute to? Well, it's the same logic as before.
For this reason, rational companies should decide to invest in and contribute in the project with the appropiate license given their size and competition.

So next time someone says permissive licenses are _always_ better for businesses than
strong GPL-style licenses, take it with a grain of salt.
