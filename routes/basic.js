var express = require('express');
var router = express.Router();

var path = require('path');
var __basedir = path.join(__dirname, "..");

var ejs = require('ejs');

jobs = [
    {
        "id":1,
        "title":"Associate",
        "company":"Mckinsey & Co",
        "description":`<h3> Who You'll Work With     </h3>
        

        <p> Associates join our offices and practices (e.g. Digital, Marketing & Sales, Operations, etc.) around the world to work in teams and directly with our clients. </p>
         
       <p>  When you join McKinsey as an Associate, you are joining a firm that will challenge you and invest in your professional development. In this role you will work on the best teams to help the best organizations in the world – in private, public, and social sectors – solve their most difficult problems. You will also work with many experts, from data scientists and researchers to software and app designers.</p>
         
        <p> If you are interested in joining a specific practice, please indicate this in your office/practice preference (combinations are possible). To learn more about how we help our clients and where you fit in, visit our careers site.</p>
         
        <h3> What You'll Do</h3>
         
        <p>You'll work in teams of typically 3 - 5 consultants, playing an active role in all aspects of client engagement.</p>
         
        <p> This includes gathering and analyzing information, formulating and testing hypotheses, and developing and communicating recommendations. You'll also have the opportunity to present results to client management and implement recommendations in collaboration with client team members.</p>
         
        <p> Associates receive exceptional training as well as frequent coaching and mentoring from colleagues on their teams. This support includes a Partner from your local office or practice assigned to you to help guide your career as well as up to five weeks of formal training in your first two years as an Associate. Additionally, you'll receive guidance and support from your local office or practice in the selection of client projects, helping you to develop your skills and build your network.</p>
         
        <p> While all consultants develop specialized knowledge and a focused program as they progress with McKinsey, most are initially very broad in their focus, meaning they do not need specific industry or functional expertise to be successful. For consultants who join McKinsey as experienced professionals, this can mean building on previous knowledge or developing unique experience in an area that is completely new.</p>
         
         <p>For all Associates, you will likely intersect with many elements of our firm's work including Digital, Analytics, Implementation - either by collaborating on teams or working with colleagues from these groups.</p>
         
         <p><h3>Qualifications</h3>
             <ul><li> Bachelor's degree; Advanced graduate degree (e.g., MBA, PhD, etc.) typically preferred; Academic degree requirements may vary by country </li>
             <li> Outstanding records of academic and managerial or professional achievement </li> 
             <li> Exceptional analytical and quantitative problem-solving skills </li>
             <li> Strong record of leadership in an academic, professional, or extracurricular setting </li>
             <li> Ability to work collaboratively in a team environment </li>
             <li> Ability to work effectively with people at all levels in an organization </li>
             <li> Ability to communicate complex ideas effectively, both verbally and in writing, in English and the local office language(s)
             <li> Willingness to travel </li>
         </ul></p> 
        `
    },
    
    {
        "id":2,
        "title":"Salesforce Business Analyst - CRM Engineering",
        "company":"Goldman Sachs and Co.",
        "description":`<h3> Who You'll Work With     </h3>
        

        <p> Associates join our offices and practices (e.g. Digital, Marketing & Sales, Operations, etc.) around the world to work in teams and directly with our clients. </p>
         
       <p>  When you join McKinsey as an Associate, you are joining a firm that will challenge you and invest in your professional development. In this role you will work on the best teams to help the best organizations in the world – in private, public, and social sectors – solve their most difficult problems. You will also work with many experts, from data scientists and researchers to software and app designers.</p>
         
        <p> If you are interested in joining a specific practice, please indicate this in your office/practice preference (combinations are possible). To learn more about how we help our clients and where you fit in, visit our careers site.</p>
         
        <h3> What You'll Do</h3>
         
        <p>You'll work in teams of typically 3 - 5 consultants, playing an active role in all aspects of client engagement.</p>
         
        <p> This includes gathering and analyzing information, formulating and testing hypotheses, and developing and communicating recommendations. You'll also have the opportunity to present results to client management and implement recommendations in collaboration with client team members.</p>
         
        <p> Associates receive exceptional training as well as frequent coaching and mentoring from colleagues on their teams. This support includes a Partner from your local office or practice assigned to you to help guide your career as well as up to five weeks of formal training in your first two years as an Associate. Additionally, you'll receive guidance and support from your local office or practice in the selection of client projects, helping you to develop your skills and build your network.</p>
         
        <p> While all consultants develop specialized knowledge and a focused program as they progress with McKinsey, most are initially very broad in their focus, meaning they do not need specific industry or functional expertise to be successful. For consultants who join McKinsey as experienced professionals, this can mean building on previous knowledge or developing unique experience in an area that is completely new.</p>
         
         <p>For all Associates, you will likely intersect with many elements of our firm's work including Digital, Analytics, Implementation - either by collaborating on teams or working with colleagues from these groups.</p>
         
         <p><h3>Qualifications</h3>
             <ul><li> Bachelor's degree; Advanced graduate degree (e.g., MBA, PhD, etc.) typically preferred; Academic degree requirements may vary by country </li>
             <li> Outstanding records of academic and managerial or professional achievement </li> 
             <li> Exceptional analytical and quantitative problem-solving skills </li>
             <li> Strong record of leadership in an academic, professional, or extracurricular setting </li>
             <li> Ability to work collaboratively in a team environment </li>
             <li> Ability to work effectively with people at all levels in an organization </li>
             <li> Ability to communicate complex ideas effectively, both verbally and in writing, in English and the local office language(s)
             <li> Willingness to travel </li>
         </ul></p> 
        `
    },
    
    {
        "id":3,
        "title":"Business Analyst",
        "company":"Boston Consulting Group",
        "description":`<h3> Who You'll Work With     </h3>
        

        <p> Associates join our offices and practices (e.g. Digital, Marketing & Sales, Operations, etc.) around the world to work in teams and directly with our clients. </p>
         
       <p>  When you join McKinsey as an Associate, you are joining a firm that will challenge you and invest in your professional development. In this role you will work on the best teams to help the best organizations in the world – in private, public, and social sectors – solve their most difficult problems. You will also work with many experts, from data scientists and researchers to software and app designers.</p>
         
        <p> If you are interested in joining a specific practice, please indicate this in your office/practice preference (combinations are possible). To learn more about how we help our clients and where you fit in, visit our careers site.</p>
         
        <h3> What You'll Do</h3>
         
        <p>You'll work in teams of typically 3 - 5 consultants, playing an active role in all aspects of client engagement.</p>
         
        <p> This includes gathering and analyzing information, formulating and testing hypotheses, and developing and communicating recommendations. You'll also have the opportunity to present results to client management and implement recommendations in collaboration with client team members.</p>
         
        <p> Associates receive exceptional training as well as frequent coaching and mentoring from colleagues on their teams. This support includes a Partner from your local office or practice assigned to you to help guide your career as well as up to five weeks of formal training in your first two years as an Associate. Additionally, you'll receive guidance and support from your local office or practice in the selection of client projects, helping you to develop your skills and build your network.</p>
         
        <p> While all consultants develop specialized knowledge and a focused program as they progress with McKinsey, most are initially very broad in their focus, meaning they do not need specific industry or functional expertise to be successful. For consultants who join McKinsey as experienced professionals, this can mean building on previous knowledge or developing unique experience in an area that is completely new.</p>
         
         <p>For all Associates, you will likely intersect with many elements of our firm's work including Digital, Analytics, Implementation - either by collaborating on teams or working with colleagues from these groups.</p>
         
         <p><h3>Qualifications</h3>
             <ul><li> Bachelor's degree; Advanced graduate degree (e.g., MBA, PhD, etc.) typically preferred; Academic degree requirements may vary by country </li>
             <li> Outstanding records of academic and managerial or professional achievement </li> 
             <li> Exceptional analytical and quantitative problem-solving skills </li>
             <li> Strong record of leadership in an academic, professional, or extracurricular setting </li>
             <li> Ability to work collaboratively in a team environment </li>
             <li> Ability to work effectively with people at all levels in an organization </li>
             <li> Ability to communicate complex ideas effectively, both verbally and in writing, in English and the local office language(s)
             <li> Willingness to travel </li>
         </ul></p> 
        `
    }
]


router.get('/', function(req,res,next){
	return res.render("index.ejs",{jobs:jobs});
});


router.get('/assessment', function(req,res,next){
	return res.render("assessment.ejs");
});

router.get('/feedback', function(req,res,next){
	return res.render("feedback.ejs");
});

router.get('/dasboard', function(req,res,next){
	return res.render("employerDashboard.ejs");
});


module.exports = router;




