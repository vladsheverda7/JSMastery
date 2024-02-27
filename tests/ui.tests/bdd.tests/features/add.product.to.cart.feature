Feature: I want to adding product to cart

    Background:
        Given the user is on Login Page
        When the user logins with valid standard_user and secret_sauce

    Scenario:
        And the user clicks the add product to cart button
        And the user clicks cart icon
        And the user clicks checkout button
        And the user executed first checkout step
        And the user clicks finish button
        Then checkout is completed
