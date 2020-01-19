---
title: A story about cache
date: '2019-11-02'
description: ''
---

Pick up your phone, put it on airplane mode and open up one of your favorite apps. What happens? The most common outcome is somewhat along these lines: a visual indicator is displayed somewhere on the top/bottom/side (or covering everything, which is bad, but we'll get to that) informing you that oh well, _you're offline_, you have _no data_, _you have trouble reaching the internet_.

It's a small fraction of apps that do _not_ heavily rely on an active Internet connection. The larger majority do. And that's perfectly normal. What I'm going to analyze here is what should happen when you're offline (and even when you're not) and how you can minimize the data transfer across the network. Bonus points: less data transfer, less energy consumption.

## Let's build a festival app

Last summer I wrote an app for a music festival called [Durusa Summer Hills]() (it's located on top of a hill, bathed in sunlight all day long, hence the name). It was an effort of two people - me and Robert (a friend of mine and [amazing UI/UX designer]()). Our goal: a festival app that looks and feels good. Most of the requirements were self-imposed (both a blessing and a curse), while some of them were, really, a necessity.

1. Internet connection. The Internet connection there is not great. Our app had to work fine in a slow (or no) Internet connection environment.

2. Energy consumption. When you're at a music festival, you don't want to be tied to a socket, waiting to recharge your device. Objective no 2: use as little energy as possible to power the mighty app.

Third, the app should not get in the way of the actual music festival experience. Objective no 3: help, do not annoy. But that's for another article.

## The network layer

The app's only access point to the outside world is the network layer.
