@registeration
Feature: register a non-FEMA user
  I can register an account in GMM
  
  Scenario: register a non-FEMA user
    Given I am on the GMM login page again
    When I click the Register button
    Then I should see the registration page