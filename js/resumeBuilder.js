var work = {
	"jobs": [
		{
			"employer": "Employer Name 1",
			"title": "Title 1",
			"location": "United States",
			"dates": "20XX - 20XX",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!"
		},
		{
			"employer": "Employer Name 2",
			"title": "Title 2",
			"location": "Russia",
			"dates": "20XX - 20XX",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!"
		}
	],
	"display" : function () {
		for(job in work.jobs) {
			$("#workExperience-box").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Arcade Game",
			"dates": "2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!",
			"images": ["images/arcade_game-small.jpg"]
		},
		{
			"title": "Website Optimization",
			"dates": "2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!",
			"images": ["images/website_optimization-small.jpg"]
		},
		{
			"title": "Neighborhood Map",
			"dates": "2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!",
			"images": ["images/neighborhood_map-small.jpg"]
		},
		{
			"title": "Feed Reader Testing",
			"dates": "2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!",
			"images": ["images/feed_reader_testing-small.jpg"]
		}
	],
	"display": function() {
		for(project in projects.projects) {
			$("#projects-box").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if (projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};

var bio = {
	"name": "First Last",
	"role": "Role",
	"welcomeMessage": "Insert cool welcome message here!",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "ex@example.com",
		"github": "Github",
		"twitter": "@twitter",
		"location": "Japan"
	},
	"skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
	"bioPic": "images/fry.jpg",
	"display": function() {
		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedHeaderRole);
		$("#header").prepend(formattedHeaderName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		var formatttedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formatttedGithub);
		$("#footerContacts").append(formatttedGithub);                                          
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for(skill in bio.skills) {
				console.log(skill);
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "School Name 1",
			"location": "China",
			"degree": "Degree 1",
			"majors": ["Major 1", "Major 2"],
			"dates": 2012,
			"url": "www.example.com"
		},
		{
			"name": "School Name 2",
			"location": "Canada",
			"degree": "Degree 2",
			"majors": ["Major 1", "Major 2"],
			"dates": 2014,
			"url": "www.example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Development Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "www.udacity.com"
		}
	],
	"display": function() {
		for(school in education.schools) {
			$("#education-box").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			for(major in education.schools[school].majors) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedSchoolMajor);
			}
		}
		$("#education-box").append(HTMLonlineClasses);
		for(onlineCourse in education.onlineCourses) {
			$("#education-box").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

work.display();
projects.display();
bio.display();
education.display();
$("#mapDiv-box").append(googleMap);

$("#workExperienceButton").click(function(){
    $("#workExperience-box").toggle();
});
$("#projectsButton").click(function(){
    $("#projects-box").toggle();
});
$("#educationButton").click(function(){
    $("#education-box").toggle();
});
$("#mapButton").click(function(){
    $("#mapDiv-box").toggle();
});



//Delay needed otherwise the map won't load properly
function funct() {
	$("#mapDiv-box").attr("style","display:none;");
}
setTimeout(function (){
  $(funct);
}, 400);
/*
function animation1() {
	$("#projectsButton").attr("style","animated bounceInRight")
}
function animation2() {
	$("#educationButton").attr("style","animated bounceInRight")
}
function animation3() {
	$("#projectsButton").attr("style","animated bounceInRight")
}*/