Feature: submit a new order


	Background: Customer added stuff to cart and wants to buy them.
	
		Given the guest is on the login
		When the guest enters their email
		When the guest enters their password
		When the guest clicks login
		Then the guest should be on shop page


	Scenario: Submit order from cart page
		Given the guest is on the cart page
		When the guest clicks submit cart order
		Then confirmation of order is displayed