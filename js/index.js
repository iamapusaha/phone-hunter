const loadPhones = async (search) => {
    try {
        const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
        const res = await fetch(url);
        const data = await res.json();
        displayPhones(data.data)
    } catch (error) {
        console.log(error);
    }
}
const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList.add('col')
        phoneCard.innerHTML = `
    <div class="card p-2">
                        <img src="${phone.image}" class="card-img-top img-fluid p-4" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
    `
        phoneContainer.appendChild(phoneCard)
    });
}
document.getElementById('btn-search').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');

    const inputValue = inputField.value;
    inputField.value = '';
    loadPhones(inputValue);
})
