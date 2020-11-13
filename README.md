# My-Calendar-HW5

I was tasked with creating a day scheduler that would allow the user to what they have going on for the day. When the time is past the time described in the box, the box will turn grey. When the time box is equal to the current time the box will be red, and when the time block has not come to pass for the current day the box will be green. I did this by creating a for loop that loops through each time block and depending on the time will add a class of future, past or present. 
The next task was to save the user input in local storage, and have it stay when the page was reloaded. To accomplish this I created a function that would save the user input in local storage, to do this I created a variable that was equal to the text content, and stored it in it’s parent ID. I then added the getter to the end of my for loop to do this for each time block.

link to website: https://marchandmr.github.io/My-Calendar-HW5/
