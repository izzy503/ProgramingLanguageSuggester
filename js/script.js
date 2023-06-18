document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var q1 = document.getElementById('q1').value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;
    var q4 = document.getElementById('q4').value;
    var q5 = document.getElementById('q5').value;
  
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
  
    var language = suggestLanguage(q1, q2, q3, q4, q5);
  
    var result = "Based on your answers, we suggest using " + language + " programming language.";
    resultElement.innerHTML = result;
  });
  
  function suggestLanguage(q1, q2, q3, q4, q5) {
    var suggestions = {
      "static_yes_performance_yes_yes": "Go",
      "dynamic_yes_simplicity_yes_yes": "Python",
      "static_yes_simplicity_yes_no": "Ruby",
      "dynamic_no_performance_no_no": "Rust"
    };
  
    var key = q1 + "_" + q2 + "_" + q3 + "_" + q4 + "_" + q5;
    
    if (suggestions.hasOwnProperty(key)) {
      return suggestions[key];
    } else {
      return "JavaScript";
    }
  }
  