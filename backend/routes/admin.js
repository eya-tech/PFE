import { fetsh_all, getUserInfo } from "../controllers/users.js";

import { addFoundationalRequirements, getFoundationalRequirement } from "../controllers/foundational_requirements.js";
import { addCommunRequirements, getCommunRequirement, getCr } from "../controllers/commun_requirements.js";
import { addTests, getTests, getTest } from "../controllers/tests.js";
import { addVulnerabilities, getVulnerabilities, getVulnerability } from "../controllers/vulnerabilities.js";

import protectAdmin from "../middlewares/protectAdmin.js"; 
import express from 'express' 

  
const router = express.Router(); 
router.route("/allusers").get(fetsh_all);
router.route('/usermeta').get(getUserInfo); 

router.route("/foundational_requirements").get(getFoundationalRequirement);
router.route('/add_foundational_requirement').post(addFoundationalRequirements);
 
router.route("/commun_requirements").get(getCommunRequirement); 
router.route("/commun_requirement/:id").get(getCr); 
router.route('/add_commun_requirement').post(addCommunRequirements);

router.route("/tests").get(getTests);
router.route("/test/:id").get(getTest);
router.route('/add_tests').post(addTests); 

router.route("/vulnerabilities").get(getVulnerabilities);
router.route("/vulnerability/:id").get(getVulnerability);   
router.route('/add_vulnerabilities').post(addVulnerabilities); 
  
// router.route("/allusers").get(protectAdmin,fetsh_all);
// router.route('/usermeta').get(protectAdmin,getUserInfo);
 
export default router