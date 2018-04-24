@login
Feature: login gmm solution
  I can login gmm solution
  
  Scenario: login gmm solution
    Given I am on the GMM login page
    When I type the user name "yukuan.song@gmail.com"
    And I type the password "Mycode123456789!"
    And I click the login button
    Then I should get into the gmm landing page and see some results