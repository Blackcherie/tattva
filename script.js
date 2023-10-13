async function getAccessToken(){
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "BrowserId=9ItrVGkDEe61bsXvetuiVw; CookieConsentPolicy=0:0; LSKey-c$CookieConsentPolicy=0:0");
    
    var formdata = new FormData();
    formdata.append("grant_type", "password");
    formdata.append("client_id", "3MVG9fe4g9fhX0E6QHXKyZQJrefkrT7E1t8VsBbznlG2AI8bl4drjFFeWJJ.1OvsjQAhC30Sc9ehuriEPSuNZ");
    formdata.append("client_secret", "C7D028845EE1ADD96688A0AAA41BA6CBA48F10B9F2846B1DF4E7B3B29404B776");
    formdata.append("username", "integrationuser@eden.com");
    formdata.append("password", "Xrbia@12343CrItyR4bQuVSuxaOgcHMkky");
    
    var requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    const res = await fetch("https://login.salesforce.com/services/oauth2/token", requestOptions);
    const {access_token, instance_url} = await res.json();
    
    return {access_token, instance_url};
}

// async function enquiry_form(){
// //     console.log(event)
// //     alert(event);
//     // event.preventDefault();

//     // const form = document.getElementById("footer_form");
//     // const formData = new FormData(form);

//     const {access_token, instance_url} = await getAccessToken();
//     const lead = {
//         name: "Kshitij",
//         email: "shetty@gmail.com",
//         mobile: "9284294433",
//         campaignCode:  "Digital", 
//         url:  "https://google.co.in", 
//         remarks:  "Test Leads from Website",
//         UTM_Medium:  "Google",
//         UTM_Source:  "Search",
//         LeadIdentifier:  "Web" 
//       };

//       const response = await fetch(`${instance_url}/services/apexrest/CreateLead/`, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${access_token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           req: lead,
//         }),
//       });

//       const data = await response.json();

//       if (data.returnCode === 0) {
//         // Lead created successfully
//         console.log(data)
//       } else {
//         // Handle error
//         console.log("error " + data)
//       }
// }

// enquiry_form();
