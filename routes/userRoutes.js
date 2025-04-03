const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password  # Added required password field
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the user
 *         name:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email address of the user
 *         age:
 *           type: integer
 *           description: Age of the user
 *         password:
 *           type: string
 *           description: Password of the user  # Fixed incorrect indentation
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User Created
 *       400:
 *         description: Bad Request (Validation Failed)
 *       500:
 *         description: Server Error
 */
router.post("/users", userController.createUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns all users
 *       500:
 *         description: Server Error
 */
router.get("/users", userController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to fetch
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User Not Found
 *       500:
 *         description: Server Error
 */
router.get("/users/:id", userController.getUserById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated name
 *               email:
 *                 type: string
 *                 description: Updated email
 *               age:
 *                 type: integer
 *                 description: Updated age
 *               password:
 *                 type: string
 *                 description: Updated password (if changing)
 *     responses:
 *       200:
 *         description: User Updated
 *       400:
 *         description: Bad Request (Validation Failed)
 *       404:
 *         description: User Not Found
 *       500:
 *         description: Server Error
 */
router.put("/users/:id", userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User Deleted
 *       404:
 *         description: User Not Found
 *       500:
 *         description: Server Error
 */
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
