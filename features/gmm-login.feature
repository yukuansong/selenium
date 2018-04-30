@login
Feature: login gmm solution
  I can login gmm solution
  
  Scenario: login gmm solution
    Given I am on the GMM login page
    When I type the user name "testuser2@test.com"
    And I type the password "pass"
    And I click the login button
    Then I should get into the gmm landing page and see some results