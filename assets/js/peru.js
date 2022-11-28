function fetchData() {
    fetch('/assets/js/peru.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}

fetchData()