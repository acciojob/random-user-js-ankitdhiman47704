//your code here
let image =  document.getElementById("image")
let getAnother = document.getElementById("getAnotherUser")
let fullName = document.getElementById("fullName")
let additional = document.getElementById("additionalInfo")
getAnother.addEventListener('click',function(){
	fetch("https://randomuser.me/api/").then((response)=> response.json())
		.then((data)=>{
			let user = data.results[0]
			image.src = user.picture.large
			fullName.innerText = user.name.first+" "+user.name.last
			fullName.dataset.age = user.dob.age
			fullName.dataset.email = user.email
			fullName.phone = user.phone
			additional.innerText = ""
		})
})
let age = document.getElementById("age")
let email = document.getElementById("email")
let phone = document.getElementById("phone")

age.addEventListener("click",()=>{
	additional.innerText = "Age: "+ fullName.dataset.age
})
email.addEventListener("click",()=>{
	additional.innerText = "email: "+ fullName.dataset.email
})
phone.addEventListener("click",()=>{
	additional.innerText = "phone: "+ fullName.dataset.phone
})
getAnother.click()





