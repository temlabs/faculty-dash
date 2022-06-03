# Consultancy Project Dashboard
- deployed frontend: <a href="https://cs-dash.netlify.app/">https://cs-dash.netlify.app/</a>

![image](https://user-images.githubusercontent.com/31001388/171858058-ab5738db-371f-47f4-b54e-00b2115b0617.png)


## Features
This dashboard allows one to view completed projects and retrieve key information about them. This information includes the dates, revenue generated, the employees that worked on the project and the revenue generated by the project. The data used is falsified and was provided by facultyai. It can be accessed via this API:<a href="https://consulting-projects.academy-faculty.repl.co/"> https://consulting-projects.academy-faculty.repl.co/ </a>
** Please note that the server ‘sleeps’ after a period of inactivity. This means requests will initally timeout or may be slow. Continue to refresh at 1 minute intervals, and it will wake up.

> In addition to viewing projects, there also exists profile pages for each client and each employee, which detial relevant information.

> Furthermore, projects can be sorted through and filtered. The filter settings are saved to and retrieved from session storage.

## Improvements
### Improved filtering
It was my intention to show a dropdown of clients or employees when '/client' or '/employee' is typed into the filter bar. A user would then be able to select a value to filter projects on this employee, or on this client. They would ideally be able to filter on any number of either, and these would show up as buttons just below the search bar. They would be removable by clicking. The infrastructure to handle this exists; the HomePage state includes 'filteredEmployees' and 'filteredClients', as well as a list of all employees and a list of all clients.

### Better error handling
Currently, failed requests produce a windows alert. I would have liked for this to be a nicer looking modal. It would also have been good to have retries when requests time out, or to be able to respond to errors based on their specific types- even if it only means providing a more detailed alert.

### More testing
Some Cypress tests are employed to verify that window alerts do occur when a request fails. With more time however, I would have liked to test a wider expanse of user inputs and use stories so as to prove that it does what it ought to.
