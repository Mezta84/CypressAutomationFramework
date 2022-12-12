@Regression
Feature: Webdriver university LoginPage

    Scenario: Login using valid credentials

        Given I access Webdriver university LoginPage
        When I enter a userName webdriver
        And I enter a password webdriver123
        And I click on the Login button
        Then I should be presented with the following message validation succeeded

    Scenario: Login using invalid credentials

        Given I access Webdriver university LoginPage
        When I enter a userName webdriver
        And I enter a password webdriver555
        And I click on the Login button
        Then I should be presented with the following message validation failed
        
        @Login
        Scenario Outline: Webdriver university LoginPage
        Given I access Webdriver university LoginPage
        When I enter a userName <username>
        And I enter a password <password>
        And I click on the Login button
        Then I should be presented with the following message <message>
        Examples:
            | username   | password     | message              |
            | webdriver  | webdriver123 | validation succeeded |
            | webdriver  | webdriver555 | validation failed    |
            | WebDriver  | webdriver123 | validation failed    |

