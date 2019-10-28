// YOUR CODE HERE!
const submit = d3.select("button#filter-btn");

function ufoSightingFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    d3.selectAll("tbody>tr").remove()
    const inputDate = d3.select("input.form-control").property("value");
    const inputDateData = data.filter(d => d.datetime==inputDate);
    inputDateData.forEach(d => {
        let new_tr = d3.select("tbody").append("tr");
        new_tr.append("td").text(d.datetime);
        new_tr.append("td").text(d.city);
        new_tr.append("td").text(d.state);
        new_tr.append("td").text(d.country);
        new_tr.append("td").text(d.shape);
        new_tr.append("td").text(d.durationMinutes);
        new_tr.append("td").text(d.comments);
    })

}

submit.on("click", ufoSightingFilter);