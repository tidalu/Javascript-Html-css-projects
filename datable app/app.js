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
        { name: "zipCode", generator: () => faker.address.zipCode() },
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

const data = generateData(2000);
// console.log(data)
const pageRows = 15;
const totalPages = Math.ceil(data.length / pageRows);
console.log(totalPages);
const body = document.querySelector("body");
const arrayHeader = [
    "id",
    "firstName",
    "lastName",
    "email",
    "phone",
    "address",
    "city",
    "state",
    "country",
    "zipCode",
];

let firstIndexOfNext = 1;
let lastIndexOfNext = 15;


const input = document.createElement("div");
input.classList.add("input");
body.appendChild(input);
const inputSearch = document.createElement("input");
inputSearch.classList.add("input-search");
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "Search");
inputSearch.setAttribute("name", "search");
input.appendChild(inputSearch);

const button = document.createElement("button");
button.classList.add("search");
button.textContent = "Search";
button.setAttribute("type", "submit");
input.appendChild(button);
searchButton = button;
// table section

const tableContainer = document.createElement("div");
tableContainer.classList.add("main-table-content");

const table = document.createElement("table");
table.classList.add("Table");
tableContainer.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const trhead = document.createElement("tr");
thead.appendChild(trhead);

// header section
arrayHeader.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    trhead.appendChild(th);
});
// header section end
// content section start
const tbody = document.createElement("tbody");
table.appendChild(tbody);

data.slice(firstIndexOfNext, lastIndexOfNext).forEach((row) => {
    const trBody = document.createElement("tr");
    tbody.appendChild(trBody);
    for (let index = 0; index < arrayHeader.length; index++) {
        const tdElement = document.createElement("td");
        tdElement.textContent = row[arrayHeader[index]];
        trBody.appendChild(tdElement);
    }
});


body.appendChild(tableContainer);
// content section end
// footer section/ info-page section
const infoPage = document.createElement("div");
infoPage.classList.add("info-page");

const prevButton = document.createElement("button");
prevButton.classList.add("prev");
prevButton.textContent = "Prev";
infoPage.appendChild(prevButton);

const pageCount = document.createElement("p");
pageCount.innerHTML =
    'Page <span class="current">1</span> of <span class="all">134</span>';
infoPage.appendChild(pageCount);

const nextButton = document.createElement("button");
nextButton.classList.add("next");
nextButton.textContent = "Next";
infoPage.appendChild(nextButton);

body.appendChild(infoPage);

const pageNumber = document.querySelector(".current");
const total = document.querySelector(".all");
total.textContent = totalPages;
// search section
inputSearch.addEventListener("input", function () {
    // table.style.height = "auto";
    console.log(inputSearch.value);

    const searchValue = inputSearch.value.toLowerCase().trim();

    const filteredData = data.filter((row) => {
        return row.firstName.toLowerCase().includes(searchValue);
    });

    console.log(filteredData);

    let pagecount = Math.ceil(filteredData.length / pageRows);
    total.textContent = pagecount;
    console.log(counter, pagecount);
    if (pagecount === 1) {
        counter = 1;
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
        nextButton.style.display = "inline-block";
    }



    counter.textContent = total.textContent
    tbody.innerHTML = '';



    filteredData.slice(firstIndexOfNext, lastIndexOfNext).forEach((row) => {
        const trBody = document.createElement("tr");
        tbody.appendChild(trBody);
        for (let index = 0; index < arrayHeader.length; index++) {
            const tdElement = document.createElement("td");
            tdElement.textContent = row[arrayHeader[index]];
            trBody.appendChild(tdElement);
        }
    });

    nextButton.addEventListener("click", () => {
        counter++;
        firstIndexOfNext = (counter - 1) * pageRows;
        lastIndexOfNext = firstIndexOfNext + pageRows;
        filteredData.slice(firstIndexOfNext, lastIndexOfNext).forEach((row) => {
            const trBody = document.createElement("tr");
            tbody.appendChild(trBody);
            for (let index = 0; index < arrayHeader.length; index++) {
                const tdElement = document.createElement("td");
                tdElement.textContent = row[arrayHeader[index]];
                trBody.appendChild(tdElement);
            }
        });




    })
    prevButton.addEventListener("click", () => {
        counter--;
        firstIndexOfNext = (counter - 1) * pageRows;
        lastIndexOfNext = firstIndexOfNext + pageRows;
        filteredData.slice(firstIndexOfNext, lastIndexOfNext).forEach((row) => {
            const trBody = document.createElement("tr");
            tbody.appendChild(trBody);
            for (let index = 0; index < arrayHeader.length; index++) {
                const tdElement = document.createElement("td");
                tdElement.textContent = row[arrayHeader[index]];
                trBody.appendChild(tdElement);
            }
        });

    })
});

// search section end

// next button


// let counter = localStorage.getItem("counter")
//     ? parseInt(localStorage.getItem("counter"))
//     : 1;
let counter = 1;
if (counter === 1) {
    prevButton.style.display = "none";
} else if (counter > 1) {
    prevButton.style.display = "inline-block";
} if (counter === totalPages) {
    nextButton.style.display = "none";
} else {
    nextButton.style.display = "inline-block";
};




pageNumber.textContent = counter;

nextButton.addEventListener("click", () => {
    counter++;
    console.log(counter);
    if (counter === totalPages) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline-block";
    }

    prevButton.style.display = "inline-block";
    pageNumber.textContent = counter;
    localStorage.setItem("counter", counter);

    firstIndexOfNext = (counter - 1) * pageRows;
    lastIndexOfNext = firstIndexOfNext + pageRows;

    createTable();
});

prevButton.addEventListener("click", () => {
    counter--;
    console.log(counter);

    if (counter === 1) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
    }

    nextButton.style.display = "inline-block";
    pageNumber.textContent = counter;
    localStorage.setItem("counter", counter);


    firstIndexOfNext = (counter - 1) * pageRows;
    lastIndexOfNext = firstIndexOfNext + pageRows;


    createTable();

});


function createTable() {
    tbody.innerHTML = '';

    data.slice(firstIndexOfNext, lastIndexOfNext).forEach((row) => {
        const trBody = document.createElement("tr");
        tbody.appendChild(trBody);
        for (let index = 0; index < arrayHeader.length; index++) {
            const tdElement = document.createElement("td");
            tdElement.textContent = row[arrayHeader[index]];
            trBody.appendChild(tdElement);
        }
    })
}

inputSearch.addEventListener("input", function () {
    // table.style.height = "auto";
    console.log(inputSearch.value);

    const searchValue = inputSearch.value.toLowerCase().trim();

    const filteredData = data.filter((row) => {
        return row.firstName.toLowerCase().includes(searchValue);
    });

    console.log(filteredData);

    let pagecount = Math.ceil(filteredData.length / pageRows);
    total.textContent = pagecount;
    console.log(counter, pagecount);
    if (pagecount === 1) {
        counter = 1;
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    } else {
        prevButton.style.display = "inline-block";
        nextButton.style.display = "inline-block";
    }



    counter.textContent = total.textContent
    tbody.innerHTML = '';



    filteredData.slice(firstIndexOfNext, lastIndexOfNext).forEach((row) => {
        const trBody = document.createElement("tr");
        tbody.appendChild(trBody);
        for (let index = 0; index < arrayHeader.length; index++) {
            const tdElement = document.createElement("td");
            tdElement.textContent = row[arrayHeader[index]];
            trBody.appendChild(tdElement);
        }
    });

    nextButton.addEventListener("click", () => {
        counter++;
        tbody.innerHTML = '';
        firstIndexOfNext = (counter - 1) * pageRows;
        lastIndexOfNext = firstIndexOfNext + pageRows;
        filteredData.slice(firstIndexOfNext, lastIndexOfNext).forEach((row) => {
            const trBody = document.createElement("tr");
            tbody.appendChild(trBody);
            for (let index = 0; index < arrayHeader.length; index++) {
                const tdElement = document.createElement("td");
                tdElement.textContent = row[arrayHeader[index]];
                trBody.appendChild(tdElement);
            }
        });




    })
    prevButton.addEventListener("click", () => {
        counter++;
        tbody.innerHTML = '';
        firstIndexOfNext = (counter - 1) * pageRows;
        lastIndexOfNext = firstIndexOfNext + pageRows;
        filteredData.slice(firstIndexOfNext, lastIndexOfNext).forEach((row) => {
            const trBody = document.createElement("tr");
            tbody.appendChild(trBody);
            for (let index = 0; index < arrayHeader.length; index++) {
                const tdElement = document.createElement("td");
                tdElement.textContent = row[arrayHeader[index]];
                trBody.appendChild(tdElement);
            }
        });

    })
});


// ////////////////////////////////////////////////
