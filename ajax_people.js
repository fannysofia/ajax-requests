const links = document.getElementById('json-links');
links.addEventListener('click', handleClick);


function handleClick(event) {
  //  You should start by writing this function.
  //   It is very similar to the queryJSON function in the examples
  /* It should:
    - create a new XMLHttpRequest
    - rewriteContent should be attached to 'load' events for the request
    - you should find out the href attribute for the clicked linked
      (hint, you can access the clicked lin with 'event.target')
    - the request should open a 'GET' request, to the .json file
    - the request should finally be sent by calling '.send()' method
  */
  event.preventDefault();
  
    console.log(event);
  //create a new XMLHttpRequest
  let request = new XMLHttpRequest();
  
  //rewriteContent should be attached to 'load' events for the request
  request.addEventListener('load', rewriteContent);
  
  //you should find out the href attribute for the clicked linked
	let clickedTarget = event.target.innerHTML;
	console.log("clickedTarget: " +clickedTarget);
 
  //the request should open a 'GET' request, to the .json file
  request.open('GET', '/json/' +clickedTarget);
 
  //the request should finally be sent by calling '.send()' method
	request.send();
  
}

function rewriteContent() {
  // After you've completed handleClick function,
  // the following line should log the contents of
  // the .json file to the browsers console
  console.log("tulosta: " +this.responseText);

  /*
    Once you see content logged to the console, you can remove
    the console.log command and start completing this function.
    It should:
    - parse the responseText to be a JavaScript object
    - you should change the #name in the document
      to equal the name property found in object
    - you should do the same for #born and born property
    - you should do the same for #link and link property
    - finally, the href attribute of the #link should be
      changed to match the link property of the object

    Once you've completed both of these functions and they
    work as expected, submit this file to the grader to receive points.
    y
    */
	
	//One solution:
	//parse the responseText to be a JavaScript object
	let parsedResponse = JSON.parse(this.responseText);
	let name = parsedResponse["name"];
	console.log(name);
	let born = parsedResponse["born"];
	console.log(born);
	let href = parsedResponse["link"];
	console.log(href);

	//you should change the #name in the document to equal the name property found in object
      
	document.getElementById("name").innerText = name;
	document.getElementById("born").innerText = born;
	document.getElementById("link").href = href;
	document.getElementById("link").innerText = href;
	

	
	

}
