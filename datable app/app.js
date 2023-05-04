const pageRows = 15;

function generateData(numRows) {
    const data = [];
    const columns = [
        { name: "id", generator: () => faker.random.uuid() },
        { name: "firstName", generator: () => faker.name.firstName() },
        { name: "lastName", generator: () => faker.name.lastName() },
        { name: "email", generator: () => faker.internet.email() },
        { name: "phone", generator: () => faker.phone.phoneNumber() },
        { name: "address", generator: () => faker.address.streetAddress() },
        { name: "city", generator: () => faker.address.city() },
        { name: "state", generator: () => faker.address.state() },
        { name: "country", generator: () => faker.address.country() },
        { name: "zipCode", generator: () => faker.address.zipCode() }
    ];

    for (let i = 0; i < numRows; i++) {
        const row = {};
        for (const column of columns) {
            row[column.name] = column.generator();
        }
        data.push(row);
    }

    return data;
}

const data = generateData(15);
console.log(data)

const body = document.querySelector('body');
const arrayHeader = ["id", "firstName", "lastName", "email", "phone", "address", "city", "state", "country", "zipCode"];

    const input = document.createElement('div');
    input.classList.add('input');
    body.appendChild(input);
    const inputSearch = document.createElement('input');
    inputSearch.classList.add('input-search');
    inputSearch.setAttribute('type', 'text');
    inputSearch.setAttribute('placeholder', 'Search');
    inputSearch.setAttribute('name', 'search');
    input.appendChild(inputSearch);

    const button = document.createElement('button');
    button.classList.add('search');
    button.textContent = 'Search';
    button.setAttribute('type', 'submit');
    input.appendChild(button);
    searchButton = button;
    // table section

    const tableContainer = document.createElement('div');
    tableContainer.classList.add('main-table-content');

    const table = document.createElement('table');
    table.classList.add('Table');
    tableContainer.appendChild(table);

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const trhead = document.createElement('tr');
    thead.appendChild(trhead);

    // header section
    arrayHeader.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        trhead.appendChild(th);
    })
    // header section end 
    // content section start
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    data.forEach(row => {
        const trBody = document.createElement('tr');
        tbody.appendChild(trBody);
        for (let index = 0; index < arrayHeader.length; index++) {
            const tdElement = document.createElement('td');
            tdElement.textContent = row[arrayHeader[index]];
            trBody.appendChild(tdElement);
        }
    })
    body.appendChild(tableContainer);
    // content section end
    // footer section/ info-page section
    const infoPage = document.createElement('div');
    infoPage.classList.add('info-page');

    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.textContent = 'Prev';
    infoPage.appendChild(prevButton);

    const pageCount = document.createElement('p');
    pageCount.innerHTML = 'Page <span class="current">1</span> of <span class="all">134</span>';
    infoPage.appendChild(pageCount);


    const nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'Next';
    infoPage.appendChild(nextButton);

    body.appendChild(infoPage);


    
const pageNumber = document.querySelector('.current');
// search section
searchButton.addEventListener('click', function () {
    console.log(inputSearch.value);
})
// search section end 

let counter = 1;
// next button


if (nextButton) {
nextButton.addEventListener('click', () => {
    counter++;
    console.log(counter);
    if(counter > pageRows) {
        counter = 1;
        nextButton.style.display = 'none';
    }
    else{
        nextButton.style.display = 'block';
    }
    pageNumber.textContent = counter;

})
}else {
    console.log('not working');
}
// next button end


// prev button
if (prevButton) {
prevButton.addEventListener('click', () => {
    counter--;
    console.log(counter);
    if(counter <= 1) {
        counter = pageRows;
        prevButton.style.display = 'none';
    }else{
        prevButton.style.display = 'block';
    }
    pageNumber.textContent = counter;

})
}else {
    console.log('not working');
}

// prev button end

    
// })
// const searchButton = document.querySelector('.search');
// const pageNumber = document.querySelector('.current');
// const input = document.querySelector('.input-search');
// // search section
// searchButton.addEventListener('click', function () {
//     console.log(input.value);
// })
// // search section end 

// let counter = 1;
// // next button


// const nextButton = document.querySelector('.next')
// if (nextButton) {
// nextButton.addEventListener('click', () => {
//     counter++;
    
// })
// }else {
//     console.log('not working');
// }
// // next button end


// // prev button
// const prevButton = document.querySelector('.prev')
// if (prevButton) {
// prevButton.addEventListener('click', () => {
//     counter--;
    

// })
// }else {
//     console.log('not working');
// }

// prev button end
