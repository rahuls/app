function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
  
function generate() {
    let lurl = document.getElementById('lurl').value;
    if(validURL(lurl)==false){
        document.getElementById('lurl').value='';
        alert('Enter a valid URL');
    }else{
      // https://stark-cove-29174.herokuapp.com
      const API_ENDPOINT = 'https://stark-cove-29174.herokuapp.com';
        const userAction = async () => {

            const response = await fetch(API_ENDPOINT, {
              method: 'POST',
              body: JSON.stringify({
                "lurl": lurl
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const {surl} = await response.json();
            console.log(surl);
    
            document.getElementById('result').innerText = `${API_ENDPOINT}/${surl}`;
        }
        userAction();
    }
}

// error handling
// loading screen and button disable
//post as json

