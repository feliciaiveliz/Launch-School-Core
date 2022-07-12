## The Importance of Time and Stress Management for Launch School Interviews 

Historically, interviewing has not been my strongest skill in Launch School. In fact, I have a harder time with interviewing than with any other aspect of Launch School. Give me 4 hour written tests all day long, but slap an interview in front of me, and I crumble. Okay I’m only joking, I wouldn’t say crumble exactly, I’m not that bad at it - but still, there are some issues that I have when it comes to Launch School interviews that affect my ability to perform to my highest capabilities, namely: time management, handling stress, and being efficient, all while trying to be thorough in my approach to solving the coding challenge. All this in itself is a challenge, besides the actual problem itself! It seems as though I practice and train for months on end and yet these things still come back to bite me in the real interview. Before Launch School, I absolutely hated any sort of public speaking endeavor, so it was no different coming to Launch School. Like any other thing in life however, it’s something I have to face head on and improve on if I want to be a software engineer. 

In this article, I want to tell you about my experience in one of Launch School’s toughest assessments: the LS216 Javascript Interview, what went wrong, and what I could have done to make it better. It wasn’t a complete fail - there are aspects of my performance that I did surprisingly well on, better than I had  anticipated I would do well on actually, and I can’t help but feel proud of that. I’ve come a long way from Ruby 109. Going into this interview I was much more calm and collected compared to my first interviews (though still nervous) and I felt that my PEDAC was the strongest it’s ever been in an assessment setting. It is my hope that you read this and understand that interviewing is a tough situation to be in and that juggling all these things at the same is a job in itself, yet it can be managed properly with enough practice. If you are preparing for a Launch School interview, this might be of some help to you. If you’re a seasoned interviewer, maybe you can relate to some of this. This is not a skill most people are good at immediately; sometimes it takes months and maybe even years to get better at, and even then consistent practice is the key to keeping sharp and fluent after the fact.



### The Interview

My interview started off pretty smoothly. Though my heart was pounding out of my chest, I was excited (shockingly) to finally show the interviewer my skills! It had been months, and today was finally the day! I was introduced to the interviewer and after a nice brief chat, was presented with the problem. It took a few seconds for my brain to compute that this was the big moment, then finally I started off announcing that I was going to read the problem out loud. Immediately it almost felt like I was back in regular time practicing for my interview in front of other students - it was a routine. I would read the problem description, then start identifying inputs and outputs. The examples were next to be examined. This was always the part I worried about the most: would I catch all the edge cases? What if I miss something? Am I spending too long on this part? Instead of worrying about it too much, I kept going. I tried to organize my test cases by separating concerns (happy path, invalid inputs, etc.) and made only small changes to the ones already there, enough to get the point across of what edge case I wanted to test for. Some things were not clear to me, even with asking my interviewer for clarification. Maybe it was the stress, maybe it was just me, I’m not sure, but in any case I got hung up on something. I didn’t recognize the correct output for certain test cases and also kept asking questions about the input that I had already had answered. Things were getting a little fuzzy. Looking back on it now, it’s very obvious what was going on, but in the moment my brain power was knocked down a few notches from the stress of it all, so it wasn’t easy for me to spot. I also misunderstood a part of the problem and had an incorrect understanding of what I needed to do with the input. After a while of getting all my test cases, I eventually felt that I had examined enough of them to know everything about this problem (or thought I did) and moved on to Data Structures and the Algorithm. I was running a little behind and I knew it: a creeping panic started to flow through me. I knew I had to speed things up but I worried that by doing so I wouldn’t be able to think clearly enough to set up my algorithm. I tried to speed up my pace anyway - better to have some code than none at all. At least there would be something to work with.
 
I worked my algorithm like how I had trained for months before. I started off with edge cases that were easier to deal with, created any output containers that I would need, and moved on to the heart of what the problem was asking me to do. “I’ve done this a million times already, I’ve got this!” I thought to myself. “The end is almost in sight!” I try to write my algorithm in structure with how I will actually write my code, step by step, line by line. This way, I could keep organized and be clear at every step of the code that I would eventually write. This part I felt I had trained well on.  After this, I took an example and ran through it manually against my algorithm to see if there was anything that I missed. Turns out, there was. Hmm, remember when I was hung up on the outputs earlier? Did I just forget? I messed up a fundamental requirement of the problem that made the output of some edge cases different from others. Frustration! Now I’m more panicked. Despite this hiccup, I had to keep going. I was struggling to get a working solution and I hadn’t even started writing code yet. I finally got somewhere after some heavy brain lifting (or so I thought), and felt that now it was time to code. I was dangerously close to the end of my time limit, but still kept going. Since I took care of easier test cases first, those were able to be dealt with easily and the output was what I expected. However, everything else was not. There weren't any error messages, but the output was not what I wanted. 

The debugging process kicked in. I recognized what I needed to do but it was already too late, and I didn’t have time to fix it.  How did it get to this point? At what point was the first mistake made that led to this series of errors? What could I have done better to give myself more time to write up an *working* algorithm? I felt defeated and disappointed. I did my best, and somehow, I still couldn’t get it right. My stress levels were at maximum and there was nothing more I could do. 

This is how it can be sometimes. It’s not a good feeling, and trust me when I say that I know this feeling well. It’s taken me a long time to get to this point. I didn’t perform as well as I had hoped I would, but still despite it all, I was proud of the things I did get right. It’s time to examine my mistakes more clearly so that we can learn from them.

### What Went Wrong

It might seem obvious from the beginning what the inputs and outputs are supposed to be for a problem. However, sometimes it can be different for different examples and edge cases. I should have spent another minute or two in this beginning stage crystallizing the rules of correct output for all examples. That way when I get to the part of actually creating my own examples, I don’t have to spend more time sorting through all the differences. I sometimes blend the two steps to make it easier. I jump back and forth between inputs, outputs and the examples to flesh out exactly what I need to return. This time around, I didn’t make it explicit enough for myself. In my case, accounting for this was actually easier than I made it out to be when I saw a possible solution at the end. I didn’t need to do anything crazy or complicated in my code to make this work. Yet, I somehow made it more complicated than it needed to be. This I believe started my downward spiral of compounding mistakes that cost me valuable time in this interview. 

Second, I had asked questions while coming up with examples that were already answered previously. Without going into details, this was probably a syntax issue that I had either forgotten at the moment or just simply overlooked. Again, familiarity with syntax and fluency in language concepts is critical for interview situations. This cost me time because I was going in circles here trying to account for things I had already established as rules before. I am a little embarrassed for this part because I know I should have known this in the interview. 

For example, let’s say you are dealing with `null` in your examples. If you didn’t know Javascript, you’d probably think that `null` would be a `null` type. Turns out, `null` is of type `object`. In the interview, if you needed to check for that and you tried to use, say, `typeof null`, you’d see the `object` output. If you didn’t know any other way of checking, you’d probably be panicking and wasting valuable time trying to figure it out. Again, the interview is not the time to be figuring this stuff out. 

Third, because of the mistakes I made previously, my algorithm was solving those incorrect problems and not the one that I needed to solve. This wouldn’t have been an issue if I was clear on the requirements beforehand. This cost me all of my time and there was nothing more I could do in the end to save myself. This surely will come with more practice. All in all, one mistake led to another and it snowballed into an interview that didn’t need to go the way it did.

### Time and Stress Management and What To Do Differently Next Time

For future coding interviews, besides solving the problem, managing my time, being efficient, and handling my stress are all factors that are absolutely critical for my success. I’ve never been a fast learner or test taker - I *always* take my time and go. I’m not known for being quick. But sometimes, being too cautious is not the right way to go. It could be a matter of confidence, but in any case I have to learn how to trust in the process, trust that I know what I’m doing and charge ahead. Being confident doing something that naturally scares me is difficult to do. I have a tendency to get stuck in one place, almost paralyzed if I don’t see a clear path. Staying stuck in one part of the process means you’ll have less time in equally important parts of the process that might need your attention later on.  Remember that you’re responsible for tracking your time in an interview so it’s good to know at what point in the PEDAC process you’re at at certain times to gauge how much time you have left. 

For example, if we spend 20 minutes reading the problem, identifying inputs/outputs, and creating test cases with a (clear and accurate) understanding of the problem, then that leaves 20 minutes left. By the 30 minutes mark, the algorithm can be written with 10 minutes left to code and debug if necessary. There’s adequate time for everything and even some time in the end to account for possible bugs in the original solution. Keep a timer somewhere near you. Try to aim for having all examples and edge cases figured out by the 20 minute mark. Then try to get the algorithm finished up by the 30 minute mark. Leave the rest to coding and debugging and if you can manage that, you’re most likely ready for the real thing. Expect to feel under stress so it’s even more important to stick to this time frame as much as possible, because trust me, interview time absolutely flies by quicker than you think.

There’s a balance between the two things: taking your time to digest the problem, and also moving at a good pace to get it all done in time. However, how do you move on if you don’t understand something completely? I would say that for me, to best improve my chances next time, I would obviously need to be absolutely fluent in the syntax of the programming language. These are things I need deep in long term memory and also at the forefront of my mind, ready to be used at a moment's notice. These are things I shouldn't even have to think about; they should just flow right out of my fingertips onto the keyboard and into Coderpad. Familiarity and fluency with the given language is absolutely essential in interview situations. Without it, valuable time is spent trying to remember something maybe as simple as, “What does map return again?”. On top of everything else, remembering syntax and language concepts in a highly stressful situation does not make stress levels go down, but instead heightens them. We’ve seen the downward spiral that commences when this happens. Also I would practice even more with problems like the ones Launch School recommends in Interpretive Problem Solving and others with a slightly higher complexity than in the interview, that way I will be familiar with coding patterns and won’t get stuck with seemingly complicated coding structures, like double looping, for example. When I get to the interview, hopefully having practiced slightly harder problems (but not too much harder) would make it seem that the coding challenge is not as scary as I think.
Another note on time: if you are running out of time and are not finished, still keep to the process of PEDAC. Go back to the Algorithm first if there are issues. This is one thing that I think I actually did well on. I know the dangers of hack and slash coding and didn’t want to add that to my troubles. It’s important to be efficient and keep things going smoothly, but at the same time you have to be thorough in your approach and follow the steps. Organization is key here, you don’t want to be in a frenzy trying to figure out where you are. Everything can be figured out before you even write a single line of code. 

The second thing I would do differently is to clearly define inputs and outputs for all examples very explicitly, not just some, as early as humanly possible. Obviously this is something we’re supposed to do. I somehow missed a critical requirement because for some reason I focused on some of the examples and not others more, so I wrote my algorithm to account for it, and subsequently wrote my code as such. One mistake led to another, and then it all compounded into something that I didn’t have time to fix in the end. Had I made the requirements explicit and clear as crystal from the jump, I probably wouldn’t have had a difficult time accounting for a problem that didn’t even need to be a problem - I ended up creating one when the solution was much simpler than I made it out to be. I should have communicated to my interviewer what was expected of me. My understanding of the problem was wrong, so I ended up crafting a solution that solved the wrong problem. Once I saw how simple the solution was, well, I just couldn’t believe how badly I fumbled. 

The third thing I would do differently is manage my stress in better ways. Meditate before the interview. Drink water. Move the microphone away from my face for a second so the interviewer doesn’t have to listen to me take a deep breath. Tip: the interviewer noticed that I was taking deep breaths into the microphone during the interview to slow my heart rate and relax, try not to do this if you can help it. Obviously I don’t want to come off as nervous, but I did. Prior to this interview, I live coded in front of many students one on one countless times to mimic the feel of the real thing. However, at some point I started to not feel as nervous. Maybe because I was getting used to it? I realized that I needed to really put myself on the spot, literally. Following in the footsteps of the one and only Katarina Rosiak, I announced that I would be live coding on Discord in front of any and all who wanted to witness my suffering as I sweated through a Javascript problem for an hour. I believe maybe 5 or 6 people showed up. Finally, I started to feel my nerves again and that “heart pounding out your chest” feeling. This, I thought, was how I was going to feel in the interview, so I better learn how to deal with this. I ended up solving the problem with some help and was very grateful to everyone who patiently watched as I worked. This made me feel afterwards that if I could live code in front of 6 people, I could definitely take this interview. Also, I wanted to show people newer in Launch School that it doesn’t matter how far you are in the Curriculum, students will always struggle with something but despite that, progression in Core is possible. 

Here’s another bit of advice: take care of yourself before and after the interview. Sure, it’s just an interview in the grand scheme of things, not a life or death situation. However, sometimes our brains can make it out to be like one. (Can anyone relate?) Silly, I know, but it’s true. Before the interview, I highly recommend doing things that are fun, get your energy up (without caffeine because trust me, your adrenaline is all you need to feel awake), and make you feel happy. This I’ve learned is essential to doing well. For this interview, despite my mistakes, I truly feel that I was much happier and physically stronger to deal with it all. Exercise, go for walks, eat well, get lots of sleep and absolutely do not burn yourself out hours before the interview by cramming in study sessions solving difficult problems. If anything, tackle smaller ones that you can easily handle, that way it’ll boost your confidence. Then take a break and know that by that point, you probably won’t learn anything new so save your energy for the actual interview. 

When I started Launch School, I knew interviewing was going to be my biggest hurdle and scariest experience. It still kind of is. Luckily now, I can’t even try to start coding a solution to a programming problem without writing some sort of PEDAC, even if it’s in the form of short bullet points. It’s ingrained in me now, and when all else fails (and it does sometimes), at least I can get that right. However, another thing that I would do differently is maybe not stay stuck in the PEDAC like glue when I need to move on. Sometimes I’m too cautious. I want to be right every step of the way. I can’t move on unless I’m sure about something. This sounds reasonable, but as we’ve seen, it’s a big time waster. It’s hard to know in the moment when to do this, but again it’s most likely the issue of trusting one’s self and abilities and knowing the language very well. 

### This Is All A Learning Process

I hope this article shed some light on the interviewing process from someone who naturally struggles with this type of work. If you’re preparing for your first Launch School interview, just remember that sometimes you might not perform to the best of your abilities and that’s normal. Lots of people need to practice this skill to be good at it. It’s not something to beat yourself up about though. I don’t think you’ll ever meet another Launch School student who would say that they’ve never struggled with something. It’s a learning process. Take the mistakes from others and try to learn from them as much as you can. Use the PEDAC process to its fullest potential and remember to trust yourself and the process. Be clear with your intentions and always, always, communicate with the interviewer if anything is unclear. I know this all sounds overwhelming and a lot to juggle at the same time - and it is - but just like anything else, if you do it enough times soon you’ll become much better than you were before. There were aspects of my performance in this interview that I’m extremely proud of, and I know that I have vastly improved since my first Launch School interview. Now I can take that experience and only improve myself from here. 
If you ever have to retake an interview or written test, think of it in this perspective: this is your chance to show the interviewer (or test grader) how much you’ve learned, and more importantly, how much you’ve improved! That should be something to be excited about. And celebrated! The great thing about Launch School feedback is that it is *thorough* and it gets to the very heart of what you need to improve on. It also is great for letting you know what you excelled at, which is just as important to know in my opinion. Going through Launch School is not easy sailing, as many people can attest to. If you can get through Launch School assessments, you can pretty much do anything :) 
You can reach out to me anytime on Slack (@Felicia) if you want to chat or have practice with interviewing/live coding/written assessment prep, etc. It will help keep me sharp and I’ll give you as many tips as I can from what I’ve learned over the years. You got this!

Thanks for reading!