$(document).ready(function(){

	let userName = document.getElementById("userName");
	let numberOfPhotos = document.getElementById("numberOfPhotos");
	let mainContent = document.getElementById("mainContent");
	mainContent.setAttribute("class","mainContent");
	let personalInfo = document.querySelector(".personalInfo");
	let profilePicture = document.createElement("img");
	profilePicture.alt = "profilePicture";
	personalInfo.append(profilePicture);

	let showMore = document.getElementById("showMore");
	let shownItems = 5;
	let globalData;

	showMore.addEventListener("click", function(event) {
		shownItems += 5;
		getContent(globalData);
	})

	$.ajax({
		url: "https://api.instagram.com/v1/users/self/?access_token=20981872193.f6718f4.307bfdfae0364e618b69f81b54c5c659",
		method: "GET",
		success: function(data) {
			profilePicture.setAttribute("src", data.data.profile_picture);
			personalInfo.append(profilePicture);
			userName.innerHTML = "user: " + data.data.username;
			personalInfo.append(userName);
			numberOfPhotos.innerHTML = "photos: " + data.data.counts.media;
			personalInfo.append(numberOfPhotos);
		}
	})

	function getContent(data) {
		for (let q = shownItems - 5; q < shownItems; q++) {
			let contentItem = document.createElement("div");
			let picInfo = document.createElement("div");

			let newImg = document.createElement("img");
			newImg.setAttribute("src", data.data[q].images.standard_resolution.url);
			contentItem.append(newImg);

			let newLike = document.createElement("div");
			newLike.innerHTML = "likes: " + data.data[q].likes.count;
			picInfo.append(newLike);

			let newDescription = document.createElement("div");
			newDescription.innerHTML = "description: " + data.data[q].caption.text;
			picInfo.append(newDescription);

			let newDate = document.createElement("div");
			let date = new Date(parseInt(data.data[q].created_time, 10) * 1000);
			newDate.innerHTML = "publication date: " + date.toLocaleString("ru", {
			day:"numeric", month:"numeric", year:"numeric"}
			);
			picInfo.append(newDate);

			let newHashtag = document.createElement("div");
			newHashtag.innerHTML = data.data[q].tags;
			contentItem.append(newHashtag);
			contentItem.setAttribute("class", "contentItem");
			picInfo.append(newHashtag);

			contentItem.append(picInfo);

			mainContent.append(contentItem);
		}
	}

	$.ajax({
		url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=20981872193.f6718f4.307bfdfae0364e618b69f81b54c5c659",
		method: "GET",
		success: function(data) {
			globalData = data;
			getContent(data);
		}
	})
})
