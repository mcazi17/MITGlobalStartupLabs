from flask import Blueprint, request, render_template

accounts = Blueprint('accounts', __name__)

@accounts.route('/sign_in/', methods=['GET'])
def sign_in():
	print (request.form)
	return render_template('twitter/accounts/sign_in.html')

# @accounts.route('/', methods=['POST','GET'])
# def create_user(user_name, email, password):
# 	# user = manager.register_user(user_name, email, password)
# 	# if not user:
# 		# return {'error': 'user creation failed'}, 500
# 	# else:
# 		# return {'user_id': user.user_id}, 200
# 	return render_template('twitter/accounts/index.html')

@accounts.route('/new_account', methods=['GET'])
def create_user():
	# user = manager.register_user(user_name, email, password)
	# if not user:
		# return {'error': 'user creation failed'}, 500
	# else:
		# return {'user_id': user.user_id}, 200
	return render_template('twitter/accounts/index.html')

@accounts.route('/get/<user_name>/', methods=['GET'])
def get_user(user_name):
	# user = manager.get_user(user_name)
	# if not user:
		# return {'error': 'user not found'}, 500
	# else:
		# return {'doc': 'user': {
			# 'user_name': user.name,
			# 'user_id': user.id,
			# 'email': user.email
		# }}, 200
	return "User Found"

@accounts.route('/delete/<user_name>/', methods=['DELETE', 'GET'])
def delete_user(user_name):
	# try:
		# user = manager.delete_user(user_name)
	# except:
		# return {'error': 'something went wrong'}, 500
	# return {'doc': 'user_name': user.name}, 200
	return "User Deleted"

@accounts.route('/edit/<user_name>/<email>/<password>/', methods=['POST', 'GET'])
def edit_user(user_name, email=None, password=None):
	# try:
		# user = manager.edit_user(user_name, email, password)
	# except:
		# return {'error': 'something went wrong'}, 500
	# return {'doc': 'user_name': user.name}, 200
	return "User Edited"

@accounts.route('/follow/<user_name>/<other_user>/', methods=['POST', 'GET'])
def follow_user(user_name, other_user):
	# try:
		# user = manager.follow_user(user_name, other_user)
	# except:
		# return {'error': 'something went wrong'}, 500
	# return {'doc': 'user_name': user.name}, 200
	return "User Followed"

@accounts.route('/unfollow/<user_name>/<other_user>/', methods=['POST', 'GET'])
def unfollow_user(user_name, other_user):
	# try:
		# user = manager.unfollow_user(user_name, other_user)
	# except:
		# return {'error': 'something went wrong'}, 500
	# return {'doc': 'user_name': user.name}, 200
	return "User Followed"
