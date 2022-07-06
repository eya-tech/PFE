// // import {addUser,changepassword,forgot_password,signin, verifyresettoken} from "../controllers/auth.js"
// // import { add_roles } from "../controllers/roles.js";
// // import protectAdmin from '../middlewares/protectAdmin.js'
// // import protect from '../middlewares/protect.js'
// // import express from "express"

// // const router = express.Router();

// // router.post("/auth/sign-in",signin)
// // router.route("/auth/adduser").post(addUser)
// // // router.route("/auth/adduser").post(protectAdmin,addUser)
// // router.route("/auth/forgotpass").post(forgot_password)
// // router.route("/auth/changepass/:token").post(changepassword)
// // router.route("/auth/resetpass/:token").put(verifyresettoken)
// // // router.post('/addroles',add_roles)

// // export default router 
// import {addUser,changepassword,forgot_password,signin,
//         verifyresettoken,getuser,deleteuser} from "../controllers/auth.js"
// import { add_roles } from "../controllers/roles.js";
// import protectAdmin from '../middlewares/protectAdmin.js'
// import protect from '../middlewares/protect.js'
// import express from "express"

// const router = express.Router();

// router.post("/auth/signin",signin);
// // protect
// router.route("/auth/user").get(protect,getuser);
// router.route('/auth/deleteuser').post(protectAdmin,deleteuser)
// // protectAdmin
// router.route("/auth/adduser").post(addUser);
// router.route("/auth/forgotpassword").post(forgot_password)
// router.route("/auth/changepassword").post(protect,changepassword)
// router.route("/auth/resetpassword/:token").put(verifyresettoken)
// // router.post('/addroles',add_roles)

// export default router
import {addUser,changepassword,forgot_password,signin, verifyresettoken,getuser,deleteuser} from "../controllers/auth.js"
import { add_roles } from "../controllers/roles.js";
import protectAdmin from '../middlewares/protectAdmin.js'
import protect from '../middlewares/protect.js'
import express from "express"

const router = express.Router();

router.post("/auth/signin",signin);
router.route("/auth/user").get(protect,getuser);
router.route('/auth/deleteuser').post(protectAdmin,deleteuser)
router.route("/auth/adduser").post(addUser);
router.route("/auth/forgotpassword").post(forgot_password)
router.route("/auth/changepassword").post(protect,changepassword)
router.route("/auth/resetpassword/:token").put(verifyresettoken)
// router.post('/addroles',add_roles)

export default router
 