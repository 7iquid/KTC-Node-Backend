'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
// LTER TABLE IF EXISTS public.imagefiles
//     ADD CONSTRAINT imagefiles_blog_association FOREIGN KEY ("imageId")
//     REFERENCES public.blogs (id) MATCH SIMPLE
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
//     NOT VALID;A

     
    queryInterface.addConstraint('imagefiles',{
        feilds:['imageId'],
        type:'Foreign key',
        name: 'imagefiles_blog_association',
        references:{
            table:'blogs',
            feild: 'id',
        },
     });

// await queryInterface.addConstraint(
//         'imagefiles',
//         {
//           type: 'foreign key',
//           fields: ['imageId']
//           name: 'imagefiles_blog_association',
//           references: {
//             table: 'blogs',
//             field: 'id'
//           },
//         }
//       );



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await  queryInterface.removeConstraint('imagefiles', 'imagefiles_blog_association');

  },
