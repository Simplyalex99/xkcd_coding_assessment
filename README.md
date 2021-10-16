# Description

A coding assessment case study based on Cyber City Comics.

## Technical Approach:

- Redesign: Upon careful study, experimenting of wireframes and mockups and review of user feedback, I decided to redesign the currrent website
  with a fun and cartoony theme , enhanced UX/UI design, along with new features and keep the current functionality of the website
  to provide more ease of use of the app for current users. Also marketed the website to attract new users. Also keeping in mind accessibility.
- Implementation: I decided to go with react-framework since it is light weight, fast to do this app and powerful for
  re-useable components. I split down the sections of the pages and components into their proper folders, and the main features/components of the website were the comic strips and navigation, and the same for the pages (comic strip page with the id in url and home page).
  Along the way implementing the figma design I also addded new functionality such as icons for easier navigation.
  I implemented a re-usable hook for sending request to the API. I also implemented a heroku app which acts as proxy server to send request to the API to prevent CORS issue.

- Challenges: Due to time contraint with other activities, I was not able to implement everything from figma design or do as more as I would like.
  One of the challenges doing this was learning new technologies such as Figma, and finding a suitable design. In addition, CORS policy issue was encountered.
- Conclusion: There are rooms for improvement as always, such as having to send a request everytime to go to the next comic strip is not the best for performance. This could be improved by storing the data in local storage or pre-fetching some data and only send request to needed data.
  Also, the design of the website could be improved. Thanks for fun challenge!
- Note: If I had more time, I would implement comic page counter to show how many users have seen the comic. This could be done
  by 1) storing the data in database and adding a field "views". Then everytime the data is requested from server, and displayed on the client
  or UI we can increment its count. We could use express for this as the backend and mongoDB. Or 2) if the api already contains some form of endpoint to get views.
