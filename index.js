let a = [];

let i = 1
for (i; i < 100; i) {
    a.push({
        index: i++,
        date: '2021-01-24',
        category: 'Food',
        value: 100
    })
    a.push({
        index: i++,
        date: '2021-04-13',
        category: 'Transport',
        value: 100
    })
    a.push({
        index: i++,
        date: '2021-03-15',
        category: 'Housting',
        value: 100
    })
    a.push({
        index: i++,
        date: '2021-06-11',
        category: 'Clothing',
        value: 100
    })
    a.push({
        index: i++,
        date: '2021-11-13',
        category: 'Health',
        value: 100
    })
}
console.log(JSON.stringify(a));

