const n=s=>{if(s.response&&s.response.status&&s.response.status===404){document.location="/manager/error404";return}if(s.response&&s.response.status&&s.response.status===401){document.location="/manager/auth/signin";return}if(s.response&&s.response.status&&s.response.status===500){if(s.response.data&&s.response.data.name==="AuthenticationException"){document.location="/manager/auth/signin";return}console.log(s)}};export{n as u};
