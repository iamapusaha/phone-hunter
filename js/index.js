const loadPhones = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.data)
    } catch (error) {
        console.log(error);
    }
}
loadPhones();