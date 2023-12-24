import express from 'express'
const router = express.Router()

import userController from '../../controllers/user.js'

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get users list
 *     description: Returns a user list based on filters
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     parameters:
 *       - name: data
 *         in: query
 *         description: Add filter query and pagination data options here
 *         required: true
 *         style: form
 *         explode: true
 *         schema:
 *           type: object
 *           required:
 *             - filter
 *             - options
 *           properties:
 *             filter:
 *               type: object
 *               example: {}
 *             options:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                   example: 1
 *                   description: page number of the result.
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                   description: limit for a one single page.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     docs:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/User'
 *                     totalDocs:
 *                       type: integer
 *                       example: 1
 *                     limit:
 *                       type: integer
 *                       example: 10
 *                     totalPages:
 *                       type: integer
 *                       example: 1
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     pagingCounter:
 *                       type: integer
 *                       example: 1
 *                     hasPrevPage:
 *                       type: boolean
 *                     hasNextPage:
 *                       type: boolean
 *                     prevPage:
 *                       type: string
 *                       format: nullable
 *                     nextPage:
 *                       type: string
 *                       format: nullable
 *       400:
 *         description: Bad request. Invalid filter data supplied
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.get('/', userController.getUsers)

/**
 * @openapi
 * /users/{userId}:
 *   get:
 *     summary: Find user by ID
 *     description: Returns a single user
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: User not found
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.get('/:userId', userController.getUser)

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Add a new user
 *     description: Creates a new user
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     requestBody:
 *       description: The user data to be created
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                   description: Created User
 *       400:
 *         description: Bad Request
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.post('/', userController.createNewUser)

/**
 * @openapi
 * /user/{userId}:
 *   patch:
 *     summary: Update an existing user
 *     description: Update an existing user by ID
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     requestBody:
 *       description: The user data to be updated
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                   description: The updated User
 *       400:
 *         description: Bad Request
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.patch('/:userId', userController.updateOneUser)

/**
 * @openapi
 * /users/{userId}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a single user by ID
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string
 *                   description: ID of the deleted user
 *                   example: 64dbeac4c84d7b5eb71b4cb1
 *       400:
 *         description: Bad Request
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.delete('/:userId', userController.deleteOneUser)

export default router
