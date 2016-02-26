
describe('Sign up', function() {
	var signup,
			thisUser;

	beforeEach(function() {
		signup = new SignupView();
	});

	it('should be able to add a user', function() {
		$('#btn-submit').click();
		expect(signupView.getUser(0)).toBe(userModel.cid);
	});

	/*
	it('should be able to delete a user', function() {
		signup.addUser(thisUser);
		signup.deleteUser(0);

		expect(signup.getUser(0)).not.toBeDefined();
	});

	it('should be able to update a user profile', function() {
		signup.addUser(thisUser);
		signup.updateUser(thisUser);

		// check that original User(signup.thisUser) is the same as updateUser(thisUser);
		expect(signup.thisUser).toBe(signup.updateUser(thisUser));
	});
	*/

});
