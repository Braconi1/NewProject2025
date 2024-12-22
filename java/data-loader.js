const old_html = document.getElementById("row");
let new_html = "";

document.addEventListener("DOMContentLoaded", async () => {

    try {
        const response = await fetch("/Json/data-drive.json");
        if (!response.ok) {
            throw new Error("Failed");
        }

        const testimonials = await response.json();
        

        testimonials.forEach(testimonial => {
            new_html += `
                <div class="col">
                    <div class="testimonial">
                        <img src="/images/icon.png" alt="Image">
                        <div class="name">${testimonial.name}</div>
                        <p>${testimonial.feedback}</p>
                    </div>
                </div>
            `;
        });

        old_html.innerHTML = new_html;
        
    } catch (error) {
        console.error("Error404");
    }
});