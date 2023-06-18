function suggestLanguage(answers) {
    const q1 = answers.q1;
    const q2 = answers.q2;
    const q3 = answers.q3;
    const q4 = answers.q4;
    const q5 = answers.q5;
}

const suggestions = {
    static_dynamic: "Python",
    static_web_performance: "C#",
    static_web_simplicity: "Ruby",
    static_no: "Rust",
    dynamic_web: "JavaScript",
    dynamic_no: "Go",
    dynamic_mobile: "Swift"
  };

  const key = q1 + "_" + q2 + "_" + q3 + "_" + q4 + "_" + q5;

  
  const language = suggestions[key];

 
  document.getElementById("result").textContent =
