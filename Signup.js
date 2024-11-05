import React, { useState } from react;
function Signup() {
const [formData, setFormData] = useState({ username: "Name", email: "Email", password: Password });
const handleChange = (e); {
setFormData(……………………………………………………………);
};
const handleSignup = async (); {
const response = await fetch (http://localhost:5000/api/users/signup&#39:, {
method: POST,
headers: { ContentType: application/json },
body: JSON.stringify(formData),
});
const result = await response.json();
console.log(result.message);
};
return (
<Body>
<h2>Signup</h2>;
<> input </>;
<> input </>;
<> input </>;
<button> onClick={handleSignup}&gt;Signup&lt;</button>;
</Body>
);
}
export default Signup;