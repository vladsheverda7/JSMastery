Feature: I want to check social media links open

    Background:
        Given the user is on Login Page
        When the user logins with valid standard_user and secret_sauce

    Scenario Outline: Verify social media links
        And the user clicks social <socialMedia>
        Then corresponding social media <link> is opened

        Examples:
            | socialMedia | link                                         |
            | twitter     | https://twitter.com/saucelabs                |
            | facebook    | https://www.facebook.com/saucelabs           |
            | linkedin    | https://www.linkedin.com/company/sauce-labs/ |
