var express = require('express');
var router = express.Router();

var path = require('path');
var __basedir = path.join(__dirname, "..");

var ejs = require('ejs');

jobs = [
    {
        "id":1,
        "title":"Intern, Statistician-Data Analyst",
        "company":"FIS",
        "description":`<h3> Summer FIS University Program 2021     </h3>
        

        <p> Are you curious, motivated, and forward-thinking? At FIS you’ll have the opportunity to work on some of the most challenging and relevant issues in financial services and technology. Our talented people empower us, and we believe in being part of a team that is open, collaborative, entrepreneurial, passionate and above all fun.</p>

        <p> Join the 2021 FIS University Summer Internship Program! </p>

        <p> As a 2021 FIS University Program Summer Intern, you will have the opportunity to participate in team projects, community service activities, social events, professional development seminars and work alongside team mentors. This is a full time (40hrs/week) paid internship that will begin on June 7, 2021 and conclude on August 13, 2021. </p>
        
        <h3> About The Team </h3>
        
        <p> We are a group of data scientists that leverage machine learning, statistical modeling, and quantitative analysis. We range in experience from members who have just graduated from school to 20+ year industry veterans. </p>
        
        <p><h3> What You Will Be Doing</h3></p>

        <ul><li> You will employ machine learning and statistical modeling to create and enhance data driven products </li>
            <li> You will analyze client data to develop optimal strategies and show value of products </li> 
            <li> You will create summaries of your work and present to internal and external stakeholders </li>
            <li> You will be leveraging data science tools and languages such as SAS, Python, and R </li>
            <li> You will participate in creating dynamic business intelligence dashboards and reporting for both internal and external stakeholders </li>
         </ul></p> 

         <p><h3>What You Bring</h3>

         <ul><li> Pursuing a Masters or PhD in Statistics, Data Science or related job discipline (graduating December 2021 through May 2022)</li>
            <li> Proficiency in data science and business intelligence tools</li>
            <li> Strong written and communication skills</li>
            <li> Adaptability, a drive to learn, and strong problem-solving skills</li>
            <li> Ability to handle multiple projects and priorities while maintaining accuracy and speed</li>
            <li> Ability to work well independently and within a team</li>
         </ul></p> 

         <p><h3>What We Offer You</h3>

         <ul><li>Competitive full-time paid summer internship</li>
            <li>Opportunity to participate in projects that directly impact business value</li>
            <li>The chance to work on some of the most challenging, relevant issues in financial services & technology</li>
            <li>Time to support charities and give back in your community</li>
            <li>A work environment built on collaboration, flexibility and respect</li>
        </ul><p>
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
            "button":"Take Excel Skills Assessment",
            "name":"Excel",
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
    ],
    "Financial_Modeling":[
        {
            "button":"Take Financial Modeling Assessment",
            "name":"Financial Modeling",
            "id":1,
            "question": 'Our company has an asset that depreciates at a rate of $660/Yr following a straight-line model. The following year, the company enacts procedural changes that allows accounting to record the depreciation at a rate of $330/Yr for the same type of asset while still using a straight-line model. What is the reason for this?',
            "answerlist": [
                {id:1,"answer":"Asset lost value"},
                {id:2,"answer":"Asset useful life increased"},
                {id:3,"answer":"Changed depreciation accounting method"}
            ],
            "answer": 2
        }
        // ,  
        // {
        //     "id":2,
        //     "question": 'If I want to multiply A by B and divide the product by C, what is the syntax?',
        //     "answerlist": [ 
        //         {id:1,"answer":"A*B/C"},
        //         {id:2,"answer":"A*(B/C)"},
        //         {id:3,"answer":"(A*B)/C"}
        //     ],
        //     "answer": 3
        // }
    ],
    
    "Business_Analytics":[
        {
            "button":"Take Business Analytics Assessment",
            "name":"Business Analytics",
            "id":1,
            "question": 'When launching a new product which is NOT an important question to consider?',
            "answerlist": [
                {id:1,"answer":"Will the new product cannabalize any of our existing product offerings?"},
                {id:2,"answer":"Can we use the same distribution channels?"},
                {id:3,"answer":"What lunch will be served at the product launch event?"}
            ],
            "answer": 1
        }
        // ,
        // {
        //     "id":2,
        //     "question": 'If I want to multiply A by B and divide the product by C, what is the syntax?',
        //     "answerlist": [ 
        //         {id:1,"answer":"A*B/C"},
        //         {id:2,"answer":"A*(B/C)"},
        //         {id:3,"answer":"(A*B)/C"}
        //     ],
        //     "answer": 3
        // }
    ]
}


router.get('/', function(req,res,next){
	return res.render("index.ejs",{"jobs":jobs,"assessment":assessment });
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
	return res.render("feedback.ejs",{"name":assessment[assessmentname][0].name,"total":total,"score":total-missed,"missed":missedquestions});
});

router.get('/dashboard', function(req,res,next){
	return res.render("employerDashboard.ejs");
});


module.exports = router;




