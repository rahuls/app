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
        const userAction = async () => {
            const response = await fetch('http://localhost:3000', {
              method: 'POST',
              body: 'lurl='+lurl, // string or object
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });
            const res = await response.json(); //extract JSON from the http response
            // do something with myJson
            console.log(res.surl);
    
            document.getElementById('result').innerText = 'http://localhost:3000/'+res.surl;
        }
        userAction();
    }
}