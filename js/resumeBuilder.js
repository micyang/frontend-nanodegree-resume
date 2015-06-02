var render = function(template, data) {
	return template.replace("%data%", data);
}
var renderArray = function(template, data, length) {
	var array = "";
	for(var i = 0; i < length; i++) {
		array = array + template.replace("%data%", data[i]);
	}
	return array;
}

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
		/*
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
		*/
		var jobsHTML = work.jobs.map(function(job) {
			return render(HTMLworkEmployer, job.employer) +
		         render(HTMLworkTitle, job.title) +
		         render(HTMLworkDates, job.dates) +
		         render(HTMLworkLocation, job.location) +
		         render(HTMLworkDescription, job.description);
		})

		jobsHTML.forEach(function(html) {
		  $("#workExperience-box").append(HTMLworkStart);
		  $(".work-entry:last").append(html);
		})
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
	/*
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
	*/
		var projectsHTML = projects.projects.map(function(project) {
			return render(HTMLprojectTitle, project.title) +
				render(HTMLprojectDates, project.dates) +
				render(HTMLprojectDescription, project.description) +
				renderArray(HTMLprojectImage, project.images, project.images.length);
		})
		projectsHTML.forEach(function(html) {
		  $("#projects-box").append(HTMLprojectStart);
		  $(".project-entry:last").append(html);
		})
		
	}
};

var bio = {
	"name": "First Last",
	"role": "Role",
	"welcomeMessage": "Insert cool welcome message here! Hello World!",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "email@email.com",
		"github": "github",
		"twitter": "@twitter",
		"location": "Japan"
	},
	"skills": [
		"Skill 1", 
		"Skill 2", 
		"Skill 3", 
		"Skill 4"],
	"bioPic": "images/fry.jpg",
	"display": function() {
		/*
		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formatttedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedHeaderRole);
		$("#header").prepend(formattedHeaderName);

		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		$("#topContacts").append(formatttedGithub);
		$("#footerContacts").append(formatttedGithub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for(skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}*/
		var headerNameHTML = render(HTMLheaderName, bio.name) + 
						render(HTMLheaderRole, bio.name);
		var contactsHTML = render(HTMLmobile, bio.contacts.mobile) +
						render(HTMLemail, bio.contacts.email) +
						render(HTMLtwitter, bio.contacts.twitter) +
						render(HTMLgithub, bio.contacts.github) +
						render(HTMLlocation, bio.contacts.location);
		var bioMsgHTML = render(HTMLbioPic, bio.bioPic) +
						render(HTMLwelcomeMsg, bio.welcomeMessage);
		var skillHTML =	renderArray(HTMLskills, bio.skills, bio.skills.length);

		$("#header").prepend(headerNameHTML);
		$("#topContacts").append(contactsHTML);
		$("#footerContacts").append(contactsHTML);
		$("#header").append(bioMsgHTML + HTMLskillsStart);
		$("#skills").append(skillHTML);
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
		/*for(school in education.schools) {
			
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
		}*/
		var onlineCourseHTML = education.onlineCourses.map(function(online) {
			return render(HTMLonlineTitle, online.title) +
				render(HTMLonlineSchool, online.school) +
				render(HTMLonlineDates, online.dates) +
				render(HTMLonlineURL, online.url);
		})

		var educationHTML = education.schools.map(function(school) {
			return render(HTMLschoolName, school.name) +
				render(HTMLschoolDegree, school.degree) +
				render(HTMLschoolDates, school.dates) +
				render(HTMLschoolLocation, school.location) +
				renderArray(HTMLschoolMajor, school.majors, school.majors.length);
		})
		console.log(educationHTML);
		
		educationHTML.forEach(function(html) {
			$("#education-box").append(HTMLschoolStart);
			$(".education-entry:last").append(html);
		})

		$("#education-box").append(HTMLonlineClasses);
		onlineCourseHTML.forEach(function(html) {
			$("#education-box").append(HTMLschoolStart);
			$(".education-entry:last").append(html);
		})
	}
};

work.display();
projects.display();
bio.display();
education.display();
$("#mapDiv-box").append(googleMap);

var makeToggler = function(selector){
	return function() {
		$(selector).toggle();
	}
}

$("#workExperienceButton").click(makeToggler("#workExperience-box"));
$("#projectsButton").click(makeToggler("#projects-box"));
$("#educationButton").click(makeToggler("#education-box"));
$("#mapButton").click(makeToggler("#mapDiv-box"));

//Delay needed otherwise the map won't load properly
setTimeout(function (){
  $("#mapDiv-box").attr("style","display:none;");
}, 500);