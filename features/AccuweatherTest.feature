Feature: Interaction with Accuweather page

  Background:
  Given I am on the Main page
  #And I click on consent data usage
  
  Scenario: As a user, I can Search Weather in Different Locations
    When I click on consent data usage
    And I input "New York" in the search field
    Then the result list is displayed
    When I click on the first search result
    Then the city weather page header contains the city name "New York"

  Scenario: As a user I can found recent searched locations
    When I input "London" in the search field
    And I click on the first search result
    Then the city weather page header contains the city name "London"
    And I go back to the Main page
    Then the main page is opened
    When I select the first city in Recent locations
    Then I am on "London" weather page

  Scenario: Current location label
    When I click the search field
    Then the use your current location label is displayed