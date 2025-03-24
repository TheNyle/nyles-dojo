# Pairing

### Why pair programming?

Pair programming has a great many benefits to both the quality of engineering and the quality of the outcome. Some example benefits of pairing are:

* **Faster feedback loop** - We all agree that Pull Requests are a must to both ensure both code quality and security. Having multiple engineers working on a feature expedites this whole process, and allows each piece of code to be reviewed as it's being written.
* **Knowledge-sharing** - Not all engineers are at the same level, and even those that are haven't worked on the same features. Pairing is an easy way to share knowledge by doing.
* **2 brains are better than 1** - Having another person working on a problem with you can help both engineers find new ways of working. Whether it's sharing Git shortcuts you haven't come across before, or whole new ways of breaking down software problems.
* **Thinking about the bigger picture** - Taking turns being driver and navigator allows the navigator to sit back and think about the biggger picture, whilst the driver is focussing on writing the code
* **Focussed teams, not focussed individuals** - Working on features in pairs means that the WIP limits are lower, team members are less siloed, and goals are achieved as a team instead of as an individual.

### What pair programming isn't...

* It is not being on a call for 8 hours per day. This is exhausting and counter-productive and there are many other things we need to do in a day besides writing code.
* It is not a way for the more experienced to flex on the less experienced

### How to pair

Pairing is usually made up of two roles: the Driver and the Navigator.

* **The Driver** is the person at the keyboard who is focussing on writing the software. The driver should always be talking through what they're writing and why they're writing it.

* **The Navigator** is the observer. They are thinking about the bigger picture, and are also reviewing the code as the Driver types. The Navigator should be thinking about the next steps.

### Pairing styles

**Ping Pong**

Ping Pong is the perfect pairing technique for encouraging TDD. The cadence of switching the Driver and the Navigator role is baked into the Red-Green-Refactor model.

Given two engineers (A & B) the sequence of writing code is:

* A writes a failing test
* B writes just enough code to make the test pass
* B writes a new failing test
* A writes just enough code to make the test pass
* A writes a new failing test
* Repeat...

**Strong-style**

Strong-style pairing is best suited for a more experienced engineering assisting an less experienced engineer. The overall rule for this style of pairing is:

> “For an idea to go from your head into the computer it MUST go through someone else's hands”.

Whilst this technique borders on micro-management, it can be a useful onboarding tool to favour active __learning by doing__ over passive __learning by watching__.

### Managing time

When you aren't using a pairing technique that has role swaps built into it (like Ping Pong), it's important to manage the time spent effectively. A good method for doing this is to use The Pomodoro technique.

Given two engineers (A & B) the sequence of writing code is:

* A writes code for a set period of time (20 - 30 minutes)
* B writes code for the same set period of time
* Take a 5 - 10 minute break
* A writes code for a set period of time (20 - 30 minutes)
* B writes code for the same set period of time
* Take a longer break (10 - 20 minutes)

It's also important to ensure that you carve out time in your day to perform your other daily tasks. Pairing should not be done for an entire working day.

### Tips

* **Don't micromanage** - The Navigator shouldn't be telling the Driver every detail of what they need to do. Allow the Driver space to think, space to look-up any documentation they might need.
* **Be patient** - As the Navigator, when you see the Driver making a mistake, hold off telling them for 5 seconds. Give the Driver space to notice it themselves.
* **Don't hog the keyboard** - Be strict with your role rotations. When the timer is up, or the test is written, swap roles.