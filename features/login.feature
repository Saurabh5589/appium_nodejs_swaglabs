Feature: Login Functionality

  Scenario: Successful login to the application

    Given I launch the app
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should see the "PRODUCTS" header
    Then I logout from the app


  Scenario: Failure login to the application

    Given I launch the app
    When I log in with username "abc@exampl.com" and password "10203040"
    Then I should see the "Username and password do not match any user in this service." message