const Ui = ()=>{

const handleFormSubmit = async function(event){
   event.preventDefault();

   const formData = new FormData(event.target);

   const formObject = {};

   console.log(formData)

   for (const [name, value]  of formData){
      formObject[name] = value
   }
//    const [name, value] = formData;  // destructing name and value of input element
//   formData[name] = value;  // dynamiclly adding name:value to the formObject

try {
   const response = await fetch("http://localhost:8080/sendmail", {
      method: "POST",
      headers: {
         "Content-Type": 'application/json'
      },
      body: JSON.stringify(formObject)  // stringifying the data to convert JS obj into JSON
   })

   const data = await response.json();

   console.log(data)
} catch (error) {
   console.error("Error ocurred with sending a network rqurest: ", error.message)
}
}

 return (
    <>
     <div className="form">
     <div>
        <h1>Contact Form</h1>
    </div>
    <form onSubmit={handleFormSubmit}>
              <input type="email" name="email" placeholder="Enter your email" id="email" />
        <button type="submit">Send Email</button>
    </form>
     </div>
    </>
 )
    
}
export default Ui
