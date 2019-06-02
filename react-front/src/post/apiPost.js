export const update = (userId, token, post) => {
		console.log("USER DATA UPDATE: ",user);
		return fetch(`http://localhost:8080/post/new/${userId}`,{
			method:'POST',
			headers: {
				Accept:"application/json",
				Authorization: `Bearer ${token}`
			},
			body: post
		})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
	};