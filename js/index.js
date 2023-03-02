const loadPhones = async (search, dataLimite) => {
    try {
        const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
        const res = await fetch(url);
        const data = await res.json();
        displayPhones(data.data, dataLimite)
    } catch (error) {
        console.log(error);
    }
}
const displayPhones = (phones, dataLimite) => {
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.textContent = '';
    // display 20 phones only 
    const showAll = document.getElementById('show-all')
    if (dataLimite && phones.length > 10) {
        phones = phones.slice(0, 10)
        showAll.classList.remove('d-none')
    } else {
        showAll.classList.add('d-none')
    }
    // display no phone found 
    const noPhone = document.getElementById('no-phone')
    if (phones.length == 0) {
        noPhone.classList.remove('d-none')
    } else {
        noPhone.classList.add('d-none')
    }

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
        phoneContainer.appendChild(phoneCard);
    });
    toggleSpinner(false);
}
const processSearch = (dataLimite) => {
    const inputField = document.getElementById('input-field');
    toggleSpinner(true);
    const inputValue = inputField.value;
    // inputField.value = '';

    loadPhones(inputValue, dataLimite);

}

document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10);
})

const toggleSpinner = (isLoading) => {
    const spinnerSection = document.getElementById('load-spinner')
    if (isLoading) {
        spinnerSection.classList.remove('d-none')
    } else {
        spinnerSection.classList.add('d-none')
    }
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
    console.log('clicked')
})
