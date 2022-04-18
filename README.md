# project4_frontend
# WRESTL API

This is an API for professional wrestling events in the 1990s. I remember when looking for APIs about a month ago that I didn't see any pro-wrestling APIs and I thought the name WRESTL API was a pretty fun play on words to a RESTful API. I was a big pro-wrestling fan in the early-mid 1990s so that's ultimately why I picked that specific era.

# Technologies

The backend for this app is powered by Django using Python serving a JSON API with all CRUD operations while the frontend is based in React. The model I used is pretty basic-- detailing the name and year the event in question took place, along with best match, the # of matches, and an abstractly vague rating for the show. I also included a property for noteworthy events on the show like if someone won a championship or if there was a critically important match that had some legacy effect on the pro-wrestling industry. I also used python-dotenv to secretly store backend variables.

# Issues

Admittedly, I had a lot of trouble coming up with an idea for this app after spending so much time thinking about my last project that focused on my interest in bikes. I've also been thinking a lot about what I'd like to do for my final capstone project. So I hate to say it but it resulted in this being a pretty boring app. While I am personally satisfied that professional wrestling as an art form is not dead and seems to currently be going through a Renaissance period in companies like AEW and ROH-- it doesn't really capture my interest like it used to.

I wanted the rating property for my model to be based on whatever score it got in the decades-old Wrestling Observer Newsletter which is kind of the historical standard for live wrestling event reviews. The Wrestling Observer Newsletter often use a float for its ratings like 3.5/5 stars. I found some difficulties in getting the float and decimal data types to work the way I intended so I just scrapped it and used a whole integer to save myself the headache in order to reach MVP. When setting up my backend originally, I tested what it would be like to add more Model properties after having created some very basic objects and I ran into a plethora of issues while trying to migrate the data. To resolve most of those issues, I ended up having to delete many of the migrations except for the first one just to get the backend working properly. So ultimately, my idea for this project was something that doesn't really excite me and because I could see myself getting in way over my head with more complex data, I just couldn't push myself beyond reaching MVP.

Another issue I ran into that was frustrating and I'm embarrassed to admit, I may have accidentally committed and pushed up some sensitive info (which I have since changed) even after installing python-dotenv. Even though I thought I had saved settings.py after storing my variables in a dotenv, I'm thinking I forgot to use 'git add ." instead of "git add -A" but who knows. It took me a few hours to figure out how to change the key and try to rebase my commits which I don't think actually worked-- but it also seemed to pose a risk of deleting all of my previous commits so I just changed my Django secret key, login credentials, and set this repo to private until submission time.

Once this project is marked complete, I will likely delete this repo and re-upload at some point, perhaps with an entirely different model if I think of something better.

# Other thoughts
I think I prefer Javascript way more than Python but I see how others might really enjoy it. I just find the indentations to be very tedious and while f-strings are cool, I'll take regular javascript interpolation over it any day. I'm glad to have had this experience though despite finding database migration to be very frustrating.