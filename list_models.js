const key = "AIzaSyBtST1kVYbTLLUoVxVeOuQ5MkjFZ2dPWdU";
fetch(\`https://generativelanguage.googleapis.com/v1beta/models?key=\${key}\`)
  .then(res => res.json())
  .then(data => {
    if (data.models) {
      console.log(data.models.map(m => m.name).join('\\n'));
    } else {
      console.log("Error:", data);
    }
  });
