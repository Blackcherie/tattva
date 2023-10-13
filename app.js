const popupClose = document.getElementById("popup-close")

popupClose.addEventListener('click', () => {
    const popup = document.getElementById("popup")
    popup.style.display = "none";
})

const popupBtns = document.querySelectorAll('.popup-btn')

console.log(popupBtns)


popupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const popup = document.getElementById("popup")
        popup.style.display = "block";
    })
})

const createLead = async (name, email, mobile) => {
    const requestData = {
        name,
        email,
        mobile,
        campaign_code: "a085g00000EM0jkAAD",
        campaign_name: "Tattav Generic Google Discovery",
        project_id: "a015g00000tXR7YAAW",
        form_id: "a015g00000tXR7YAAW"
    }
    if(requestData){
        try {
            const response = await fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzNjA0MzQ1MjY4NTUzMzUxMzMi_pc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            const data = await response.json();
            if(data.status === 'success'){
                alert("Success")
            }
            else{
                alert("Something went wrong!")
            }
            
        } catch (error) {
            alert(error)
        }
    }

}


const popupFormBtn = document.getElementById("popup-form-btn")

popupFormBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const popupForm = document.getElementById("popup-form")
    const name = popupForm.querySelector('input[name=name]').value
    const email = popupForm.querySelector('input[name=email]').value
    const mobile = popupForm.querySelector('input[name=phone]').value
    
    createLead(name, email, mobile)
})

const footerFormBtn = document.getElementById("footer_form_btn")

footerFormBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const footerForm = document.getElementById("footer_form")
    const name = footerForm.querySelector('input[name=name]').value
    const email = footerForm.querySelector('input[name=email]').value
    const mobile = footerForm.querySelector('input[name=phone]').value
    
    createLead(name, email, mobile)
})

const contactFormBtn = document.getElementById("contact-form-btn")

contactFormBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const contactForm = document.getElementById("contact-form")
    const name = contactForm.querySelector('input[name=name]').value
    const email = contactForm.querySelector('input[name=email]').value
    const mobile = contactForm.querySelector('input[name=phone]').value
    
    createLead(name, email, mobile)
})