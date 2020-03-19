let myData = [1,2,3,4,5];

let svg = d3.select("body").append("svg")

    svg
        .attr("width", 500)
        .attr("height", 500)

    d3.select('svg')
        .selectAll('circle')
        .data(myData)
        .enter()
        .append('circle')
        .attr('r', 25)
        .style('fill', (d,i) => {
            if ( i % 2 == 0 ) { 
                return "green"
            } else {
                return "red";
            }
        })
        .attr('cx', function(d){
            return d * 25
        })
        .attr('cy', function(d){
            return d * 25
        })
        
