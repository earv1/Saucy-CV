Why create my own CV presentation library?



* I wanted to brush up on some JavaScript.
* I wanted something on my website that would stand out and make it easier.
 to get past the initial stages of recruiting and allow me to find interviews
 and freelance work much easier.
* There was no good existing solution to the problem. There is shuffle.js which solves part of it, but making my own would allow finegrained control.
* It seemed like it wouldn't take a long time to get a solution out.
* I can blog about it, which again will help me get past the initial stages of recruiting.
* Linked solves some of the problems below but it is more of a summary than a tool for organizing complex information. I feel that putting this functionality in linked would be superfluous as it is more of a search tool than something that gives in depth information about a candidate.



The problem:
Our primary means of accurately sharing information for the past (check time frame on this)
has been through books. Before this our most accurate way of sharing information was through
keepers of knowledge such as village elders and shamans(check this). While this method of
keeping information was not necessarily accurate it has the advantage
of being very intuitive in that you quite literally just need to ask for information in order for it to be available to you.

We therefore have had to rely on other means to replicate this such as table of contents and indexes. These how-ever are a general purpose solution and with information it is possible to create intuitive and fast ways of displaying information.(Look at this sentence again)


Looking at CVs as a general problem that is solvable thanks to information technology:

The Problem:
CVs have been around for a long time, people are used to them and changing this format will force people to spend more time if they want to read your CV which will likely turn them away. To solve this the CV should be presented in a standard format and only change when people choose to interact with it.


Recruiters have lots of CVs that they need to go through.
 Often recruiters skim through CVs to find what they are looking for but once they find it they may be interested in other aspects of the potential candidate. A way to filter information by tags make this process faster.(combined or singular)

This raises another problem of making tags provide readable information that is useful to what recruiters are looking for in a chosen field. Tags should therefore be customizable to accommodate any niche needs in this regard.(Look at sentence) For my CV I have identified roles, skills and technologies as useful filters.

The Code:


<!-- Once a potential candidate is found lots of interviews need to be conducted. Sometimes employers may ask questions to further narrow this down.
Therefore
    -A CV which allows easy back and forth communication is ideal. Ideally, clarification will need to be made and this will reflect all future versions of the cv.
     There may also come a time when they need specific details not usually needed. These can be displayed an filtered by hash tags once some one asks a question.
     It will be up to the CV owner to organise these when necessary(a count of times requested will also be available which will be incremented each time it is retagged or
     when the importance label is voted on by a user of the system.

A role may not be clearly communicated in a CV
Therefore
    -Allow cvs to be tagged with roles e.g. consultant, project manager etc.
    -Allow cv to also be tagged by skills used in roles.

People can lie on their CVS
Therefore
    -Allow qualifications to be posted. Endorsements don't work like on linkedin because people can lie and it becomes very political.
    -Allow likes. People obtain likes when people enjoy working with them.


Such a system has limitations depending on the size of its userbase
Therefore
    -Allow facebook google and if possible linkedin login.

Technical Stuff



When iterating through elements get previous header.
Figure out how to have subsections. I think I might actually just need to use sections for this
but figure out a better name to make it readable in html.

Make header show once. I think some sort of comparison should be made when iterating through items in list.
Since they are put in the array from top to bottom, it should be alright to just put in a header
each time there is a different one. If this breaks I can just append the items below the header. This will
be out of order though.

I also need to figure out a way to put in lists and other html stuff. I don't like mixing so one or the other should be better.

I may also have to have modes for this. Then I can select by class, or tag rather than element name.

Maybe allow sections to be marked as read once selected. So if people reread stuff it makes it easier to identify.    

     -->
