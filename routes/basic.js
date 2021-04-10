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
        

        <p>MORE ABOUT THIS JOB OUR IMPACT CRM Engineering team is charged with using CRM tooling, principles and practices to transform processes and optimize the client relationships experience. We operate across Global Markets Division and in many cases across the firm to find and deploy technologies that provide uplift to the CRM ecosystem. CAREER DEVELOPMENT OPPORTUNITY This role provides a fantastic opportunity to have an impact within GS Global Markets Division as the prevalence and velocity of CRM Tooling grows this role also provides an opportunity to interact at firm level, engaging the firm-wide initiatives and projects. RESPONSIBILITIES AND QUALIFICATIONS DESIRED SKILLS & EXPERIENCE Technical: Demonstrate understanding and provide leadership on Salesforce implementations, including but not limited to: requirement gathering, analysis, design, configuration, integrations, system testing and production support Exhibit propensity to solve complex problems Review and implement product enhancements utilizing software development methodology Leverage advanced data management and data analysis skills to define and implement product roadmap and strategy Demonstrate understanding of systems architecture and concepts and acting as subject matter expert for internally designed products Partner with Engineering teams to resolve issues with production applications and work with users on training and adoption Communications Able to translate technical CRM capabilities to a non-technical audience Demonstrate interpersonal skills and an ability to develop relationships with stakeholders Articulate issues clearly and communicate effectively with all levels of the organization Listen well and be receptive to others' ideas and suggestions, encouraging open and collaborative dialogue among team members Client Focus Identify client needs and work to optimize the foundations of great client experience using CRM tooling and technology Establish, cultivate and leverage relationships to identify and execute on process enhancements Risk Management Articulate operational and risk impacts related to a specific task or procedure Develop controls to proactively manage risks in this domain (e.g. entitlement; data proliferation control etc.) Management, Leadership & Culture Foster a culture of solving the firms problems and driving towards business value Ability to manage a plan across multiple competing priorities (multiple platforms, all of which will have different needs at different times) PREFERRED QUALIFICATIONS Salesforce Admin Certification Salesforce implementation and project delivery experience using software development lifecycle methodologies 2-7 years experience in high velocity delivery ABOUT GOLDMAN SACHS ABOUT GOLDMAN SACHS At Goldman Sachs, we commit our people, capital and ideas to help our clients, shareholders and the communities we serve to grow. Founded in 1869, we are a leading global investment banking, securities and investment management firm. Headquartered in New York, we maintain offices around the world.We believe who you are makes you better at what you do. We're committed to fostering and advancing diversity and inclusion in our own workplace and beyond by ensuring every individual within our firm has a number of opportunities to grow professionally and personally, from our training and development opportunities and firmwide networks to benefits, wellness and personal finance offerings and mindfulness programs. Learn more about our culture, benefits, and people at GS.com/careers.Were committed to finding reasonable accommodations for candidates with special needs or disabilities during our recruiting process. Learn more:https://www.goldmansachs.com/careers/footer/disability-statement.html The Goldman Sachs Group, Inc., 2021. All rights reserved.Goldman Sachs is an equal employment/affirmative action employer Female/Minority/Disability/Veteran/Sexual Orientation/Gender Identity Location(s)US-UT-Salt Lake City Job ID2021-70830 Schedule TypeFull Time LevelAssociate Function(s)Business Analysis RegionAmericas DivisionEngineering Business UnitSec Div Data Office Tech Employment TypeEmployee </p>
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


assessment = {
    "Excel":[
        {
            "id":1,
            "question": 'What is the correct syntax for the "If" function?',
            "answerlist": [
                {id:1,"answer":"IF (logical_test, [value_if_true], [value_if_false])"},
                {id:2,"answer":"IF ([value_if_true], [value_if_false], logical_test ])"},
                {id:3,"answer":"IF ([value_if_true], logical_test, [value_if_false] ])"}
            ],
            "answer": 1
        },    
        {
            "id":2,
            "question": 'If I want to multiply A by B and divide the product by C, what is the syntax?',
            "answerlist": [ 
                {id:1,"answer":"A*B/C"},
                {id:2,"answer":"A*(B/C)"},
                {id:3,"answer":"(A*B)/C"}
            ],
            "answer": 3
        }
    ]
}


router.get('/', function(req,res,next){
	return res.render("index.ejs",{"jobs":jobs});
});


router.get('/assessment/:name', function(req,res,next){
	return res.render("assessment.ejs",{"assessment":assessment[req.params["name"]],"name":req.params["name"]});
});

router.post('/assessment/:name', function(req,res,next){
    console.log(req.body);
    if(!req.session.assessment){
        req.session.assessment = {};
    }
    req.session.assessment[req.params["name"]] = req.body;
    return res.redirect("/feedback/"+[req.params["name"]]);
});

router.get('/feedback/:name', function(req,res,next){
    assessmentname = req.params["name"];
    missedquestions = [];
    if(!req.session.assessment && !req.session.assessment[assessmentname]){
        return res.redirect("/");
    }
    total = 0;
    missed = 0;
    for(question in assessment[assessmentname]){
        total++;
        question = assessment[assessmentname][question]
        if(!req.session.assessment[assessmentname]["question"+question.id] || req.session.assessment[assessmentname]["question"+question.id] != question.answer){
            missed++;
            youanswered = question.answerlist[req.session.assessment[assessmentname]["question"+question.id]-1]
            if(!youanswered){
                youanswered= {"answer":""}
            }
            missedquestions.push({"question":question.question,
            "youanswered":youanswered,
            "answer":question.answerlist[question.answer-1]});

        }
    }
    //console.log({"name":assessmentname,"total":total,"score":total-missed,"missed":missedquestions});
	return res.render("feedback.ejs",{"name":assessmentname,"total":total,"score":total-missed,"missed":missedquestions});
});

router.get('/dashboard', function(req,res,next){
	return res.render("employerDashboard.ejs");
});


module.exports = router;




