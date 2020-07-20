const API_ENDPOINT = 'https://stark-cove-29174.herokuapp.com';

//Function to check whether the input url is valid
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
  
  //function to perform post operation to the server
  
function generate() {
    let lurl = document.getElementById('lurl').value; //get the long URL from input
    if(validURL(lurl)==false){ //Check whether the URL is valid.
        document.getElementById('lurl').value='';
        alert('Enter a valid URL');
    }else{
        const postURL  =async () => {
          document.getElementById("btn").disabled = true;
      
            const response = await fetch(API_ENDPOINT, {
              method: 'POST',
              body: JSON.stringify({"lurl": lurl}),
              headers: {'Content-Type': 'application/json'}
            });
      
            const {surl} = await response.json(); //get the short url from response
            document.getElementById('result').innerText = `Short URL: ${API_ENDPOINT}/${surl}`;
            document.getElementById("btn").disabled = false;
      
        }
        postURL(); //If URL is valid, generate a short URL.
    }
}

// error handling
// loading screen and button disable
//post as json

