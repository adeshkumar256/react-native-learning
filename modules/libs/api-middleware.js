export const HTTP_METHODS = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PUT: 'put'
}

const apiRoot = "http://ec2-3-13-60-11.us-east-2.compute.amazonaws.com:3005/api/v1"

export const callApi = (endpoint, headers, method, body) => {	
	var options = { headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		...headers,
	  }, method:method };

	if(body !== null){
		options.body = JSON.stringify(body)
	}
	const url = apiRoot + endpoint;
	return fetch(url, options);
};