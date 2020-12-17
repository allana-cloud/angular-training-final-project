# Final Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

* Bootstrap 4.x 
* SweetAlert 2


# Specifications

Elements

    One-Column
    Two-Column
    Header
        - app title
        - app sub title
        - Jumbotron
    Footer
        - not logged
            - has the following links
                - Home
                - Tickets
                - About Us
                - Login
        - logged
            - has the following links
                - Home
                - Tickets
                - About Us
    Nav
        - not-logged
            - Home
            - Tickets
            - About Us
        - logged
            - Home
            - Tickets
            - About Us
            - (far right) button Logout
    SideBar
        - not-logged
            - no data
        - logged
            - display data  
            - Edit Profile button
            - Name
            - Job Title
            - Email      
            - Mobile No.

Pages
    /home (two-column)

    /tickets (two-column)    
        - not logged display swal
            - will not load ticket should be login to API
        - logged
            - display tickets

        /ticket-list
    
    /profile (two-column)
        - show user profile
        - with update button
        - any updates with this section reflects immediately on the Sidebar

    /about-us (one-column)

    /login (one-column)
        - submit click empty fields show swal "Form Field Required" Please complete all required fields
        - login-success
            - display swal
            - redirect to home
            - Sidebar has data now