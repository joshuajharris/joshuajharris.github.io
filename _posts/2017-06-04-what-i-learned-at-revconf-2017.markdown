---
layout: post
title:  "What I learned at Revolution Conference 2017"
date:   2017-06-04 5:11:00 -0400
categories: conference virginia beach hampton roads
---

# What I learned at Revolution Conference 2017

![](https://pbs.twimg.com/media/DBRMlqQVYAAMfp7.jpg "Bunch of nerds and a drone at the beach")
___[Image](https://twitter.com/ETechAdvisor/status/870404848113651717 "Original Image source") Credits [@ETechAdvisor](https://twitter.com/ETechAdvisor "ETA on Twitter") on twitter___

**Hampton Roads** has become a burgeoning developer region. It now has several technology conferences to it’s name and a community of people excited to participate and fuel the growth.

Several days ago I attended Revolution Conference, the largest developer event  in the area. [RevConf](https://twitter.com/hashtag/RevConf "#RevConf on twitter"), as the kids are calling it, is only two years old. In those infant years we’ve seen some amazing growth thanks to the organizers, sponsors, and community.

Here are some quick stats to illustrate.

Last year **([RevConf 2016](http://2016.revolutionconf.com "RevConf 2016 site")):**
-  📅 **1 day** of talks
- 📍 @ the [Virginia Beach Resort Hotel](https://www.google.com/maps/place/Virginia+Beach+Resort+Hotel+and+Conference+Center/@36.9129525,-76.0681616,15z/data=!4m5!3m4!1s0x0:0x38250104abacbf7a!8m2!3d36.9129525!4d-76.0681616?sa=X&ved=0ahUKEwi0nZHB56TUAhUC4GMKHRCOBckQ_BIIlAEwCg "Virginia Beach Resort Hotel - Google maps")
- 🎟  250 attendees
- 🎤 28 [speakers](http://2016.revolutionconf.com/home#speakers "RevConf 2016 speaker list")
- 💵 14 [sponsors](http://2016.revolutionconf.com/home#sponsors "RevConf 2016 sponsors") (including IssueTrak, Dominion Enterprises, Twilio, Grow, 80:20)

This year **([RevConf 2017](https://revolutionconf.com "RevConf 2017 site")):**
-  📅 **2 days** of talks
- 📍 @ the [Wyndham Virginia beach oceanfront](https://www.google.com/maps/place/Wyndham+Virginia+Beach+Oceanfront/@36.8830809,-75.9849285,15z/data=!4m5!3m4!1s0x0:0x2fb1e5148570f926!8m2!3d36.8830809!4d-75.9849285?sa=X&ved=0ahUKEwiin5nK6aTUAhWIKWMKHS4GBrMQ_BIIhQEwCg "Wyndham Virginia Beach oceanfront - Google maps")
- 🎟  **350+** attendees
- 🎤 56 [speakers](https://revolutionconf.com/speakers "RevConf 2017 Speakers")
- 💵 17 [sponsors](https://revolutionconf.com/sponsors "RevConf 2017 Sponsors") (including IssueTrak, Microsoft, Google, Heroku, Dominion Enterprises)

Having attended both years and witnessing the growth is awesome. I love what’s happening in the area I’ve lived now for quite a while. I’m going to share a couple of cool things I learned from the conference.

#### Photorealistic 3d in Javascript
___Talk given by [Hunter Loftis](https://twitter.com/hunterloftis)___

![](https://pbs.twimg.com/media/DBUoVaPWsAIsBsF.jpg)
___[Image](https://twitter.com/HunterLoftis/status/870646575307075584) Credits [@hunterloftis](https://twitter.com/hunterloftis) on twitter___

This talk was one of my favorites. It was so cool and entertaining. Also, as someone who loves graphics, animation, and javascript, this talk was right up my alley.

The big thing I walked away with from this talk was the Monte Carlo method of rendering, path tracing. Now, I don’t remember exactly how it works but Hunter made an awesome demo in which he implemented this Disney Pixar style rendering technique. The code is very short and runs in your browser! It actually worked super well on my iPhone 6s plus. Check out the source [here](https://github.com/hunterloftis/pathtracer) and the demo [here](https://hunterloftis.github.io/pathtracer/)!

I also talked with Hunter after his presentation as well as some of his co-workers managing the sponsor table from [Heroku](https://www.heroku.com) and they were great people. Offered me really good advice as someone graduating and entering the field.

#### Building Web Services in Golang
___talk given by [Stanley Zheng](https://twitter.com/stanzheng)___

![](https://pbs.twimg.com/media/DBVjbwrUQAQ8hNG.jpg)
___[Image](https://twitter.com/dmakogon/status/870711442210660353 "Original Image source") Credits [@dmakogan](https://twitter.com/dmakogon "David Makogon") on twitter___

The [go language](https://golang.org) is something I've known of for quite a while now but I never really saw much reason to dabble. I'll be honest, I still don't see using it in my career or many of the side projects I start and never finish. Regardless, my friend [Stanley Zheng's](https://twitter.com/stanzheng "Stanely Zheng on twitter") excitement for it radiated to myself and many others during his talk. So now I'm dabbling.

The talk was geared towards developers with experience in other languages, which I appreciated. It very quickly allowed me to grasp some of the core concepts and syntax. Reading the documentation on my own did not appeal to me by this point, obviously, but his presentation very easily gave me a good entry point for dabbling. I got very enthusiastic and before the end of the talk downloaded go and started a side project I had been ignoring. It’s a simple Twitter bot, but doing it in a new language gave me that excitement energy to actually start it.

#### Browser APIs I didn’t know existed
___talk given by [Zeno Rocha](https://twitter.com/zenorocha)___

I knew of Zeno Rocha as a big fan of Alfred. I imagine most every Alfred power pack user comes across his [alfred-workflows](https://github.com/zenorocha/alfred-workflows) repo. Also, I knew him from his popular open source projects like [clipboard.js](https://github.com/zenorocha/clipboard.js) and his [dracula theme](https://github.com/dracula/dracula-theme).

His talk is on some more obscure browser APIs. While some are brand new, others supported by only a few,  they are awesome none the less. I'm just gonna share a couple I thought were really cool but his slides are [here](https://speakerdeck.com/zenorocha/web-apis-you-probably-didnt-know-existed) and a video of the talk from another event is [here](https://m.youtube.com/watch?v=NCGLPp778JY).

* [Web Share API](https://developers.google.com/web/updates/2016/10/navigator-share) - Allows websites to invoke native sharing capabilities of the host platform.
	* Only available in Chrome on Android but the prospects of it are super cool.
* [Face Detection API](https://wicg.github.io/shape-detection-api/#face-detection) - Part of the shape detection api, detects faces lol.
	* Supported in Chrome (Desktop/Android), Safari (Desktop/iOS), Opera, and Android Browser.
* [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) : Device Light, Ambient Light - Lets you capture light data from device sensors.
	* Only supported in Firefox
* [Battery Status](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) - Lets you check the system’s battery level.
	* Supported in Chrome, Firefox, and Opera
* [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) - Lets you recognize a gamepad plugged into the computer.
	* Supported in Chrome, Firefox, Edge, and Opera

## Conclusion

I’ve loved seeing this conference grow from it’s birth last year. I learned so much. I love that post-conference burst of energy I get where I just go home and start working on a bunch of new things.

Something else I loved from this event was something that completely caught me off guard. While walking the hotel floors towards the line for food I ran into a teacher of mine from high school. He was my Advanced Software and Game Development teacher at the [Advanced Technology Center](http://www.vbatc.com) in Virginia Beach.

I was really excited to see him there. Having a teacher enthusiastic enough to go to a conference like this is great for students. But to my surprise, he had with him two students from his current class. They had won two scholarships the conference was handing out and were excited to be there, learning amongst professionals who had been in the field more years than they have been on Earth. I loved seeing kids so excited about technology.

Revolution conference was amazing. I cannot wait for next year. I wish luck to the organizers [Kevin Griffin](https://twitter.com/1kevgriff), [Linda Nichols](https://twitter.com/lynnaloo), and [Erik Olsen](https://twitter.com/erikpmp). I know based on how hard they worked for the last two events they will hit it out of the park again next year.

If you are interested in attending RevConf 2018, follow them on twitter, [@RevConf](https://twitter.com/revconf) for updates.
