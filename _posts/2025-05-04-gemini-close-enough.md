---
title: It's fine if the Gemini protocol doesn't make sense
layout: post
---

It is common for programmers to think that everything can be transmitted via text. It's also Obviously False, just watch a 3blue1brown video and you'll realize the incredible value that visuals can have for understanding concepts. Yet us programmers keep making that mistake:

- In the [Gemini protocol](https://geminiprotocol.net), images are a second-class citizen. And it's designed to not be extensible, so that "bug" can't be fixed.
- One of the most common requests for notes applications is for the backend format to be plain text, because that's portable.

Plaintext is frequently not enough. Arguably, we don't even want our code to be a long boring stream of text: we usually add syntax highlighting to it.

<hr>

Here's an extract from the [Gemini Application Developer Guide](gemini://geminiprotocol.net/docs/app-guide.gmi) saying (emphasis mine)

> While Gemtext defaults to UTF-8 and clients are assumed to generally support Unicode, Emoji are not universally available in all clients. The exact visual appearance of Emoji depends on the fonts available to the client, and **particularly terminal-based TUI clients may have difficulty** displaying Emoji properly. Therefore, you can use Emoji as secondary visual cues, but do not rely on them as independent interface element without any descriptive labels.

When I read something like that, it makes me disagree with the priorities made in the design of Gemini. We're visual creatures, there's very little value in forcing all gemlogs to be readable without a GUI.

<hr>

**But that's OK**. Nobody is going to die because of the low success of Gemini across non-programmer types of people. And it's nice to use, even. It may not have the most varied userbase, but it does have a userbase that's a lot more *human* than the web, which is very valuable.

It's like the appeal of using the Linux Desktop. It may be buggy and some decisions may be dumb, but you trade that for a world where no one is trying to sell you stuff. That is very valuable too.

What to do? I think I'll port this blog to Gemini soon-ish. [Sourcehut pages](https://srht.site) has support for it.
