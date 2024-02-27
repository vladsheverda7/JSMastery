Feature: I want to login into the site with valid and invalid data

    Background:
        Given the user is on Login Page

    Scenario Outline: Login with valid credentials
        When the user logins with valid <username> and <password>
        Then Inventory Page is opened

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |

    Scenario Outline: Login with invalid credentials
        When the user logins with invalid <username> and <password>
        Then Error message appears

        Examples:
            | username | password |
            | test     | 123456   |