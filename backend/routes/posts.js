// Mise en place des routes concernant la gestion des posts ---------------------------------------------------------------------
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); // Authentification des routes via token
const multer = require("../middleware/multer-config"); // Multer gère l'upload des fichiers

const postsCtrl = require("../controllers/posts");
const commentsCtrl = require("../controllers/comments");
const likesCtrl = require("../controllers/likes");

// Posts ---------------------------------------------------------------------------------------
router.post("/add", auth, multer, postsCtrl.createPost); // Création d'un post
router.get("/:id", auth, postsCtrl.getOnePost); // Obtention d'un post via l'user id
router.get("/", auth, postsCtrl.getAllPosts); // Obtention de tout les posts
router.put("/:id", auth, multer, postsCtrl.updatePost); // Modification d'un post
router.delete("/:id", auth, multer, postsCtrl.deletePost); // Suppression d'un post

// Commentaires ---------------------------------------------------------------------------------
router.post("/:postId/comments", auth, commentsCtrl.createComment); // Ajout d'un commentaire
router.get("/:postId/comments", auth, commentsCtrl.getComments); // Obtention de tout les commentaires d'un post
router.delete("/comments/:id", auth, commentsCtrl.deleteComment); // Suppression d'un commentaire

// Likes -----------------------------------------------------------------------------------------
router.post("/:postId/likes", auth, likesCtrl.addLike);

module.exports = router;
