    function performGetRequest1(){
        var resultElement = document.getElementById('getResult1');
        resultElement.innerHTML = '';
      
        axios.get('http://jsonplaceholder.typicode.com/todos')
          .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
          })
          .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
          });
      }
      
function generateSuccessHTMLOutput(response){
    return '<h4>Result:</h4>' +
    '<h5>Result:</h5>' +
    '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
    '<h5>Headers:</h5>' +
    '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
    '<h5>DATA:</h5>' +
    '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'
}
