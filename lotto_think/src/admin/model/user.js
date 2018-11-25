'use strict';

module.exports = class extends think.Model {
  get relation() {
    return {
      user_role: {
        type: think.Model.HAS_MANY
      }
    };
  }

  getAdminUserById(userId) {
    return this.where({'id': userId, 'user_type': 2}).field('id, user_name, nick_name, email, avatar, introduction').find();
  }

  getAllUsers(userType, pageNo, pageSize) {
    return this.where({user_type: userType}).page(pageNo, pageSize).countSelect();
  }

  getUserById(userId) {
    return this.where({'id': userId}).find();
  }

  addUser(user) {
    return this.where({email: user.email}).thenAdd(user);
  }

  updateUser(user) {
    user.updated_at = ['exp', 'CURRENT_TIMESTAMP()'];
    return this.where({id: user.id}).update(user);
  }
};
