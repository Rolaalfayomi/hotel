const Students = [
    {
        name: "Ammar",
        last:"Farha",
        birth:"01-01-2000",
        id: 1,
        marks: {
            math : 100,
            phys : 100,
            prog: 100
        }
    },
    {
        name: "Antuon",
        last:"Zahlawi",
        birth:"01-01-2015",
        id: 2,
        marks: {
            math : 100,
            phys : 100,
            prog: 100
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    },
    {
        name: "Yaser",
        last:"Tawfiqe",
        birth:"01-01-1970",
        id: 3,
        marks: {
            math : 40,
            phys : 50,
            prog: 30
        }
    }
];
let text = "<table class=\"table\" id=\"dt\">";
text += "<thead>";
text += "<tr>";
text += "    <th rowspan=\"2\">#</th>";
text += "    <th rowspan=\"2\">id</th>";
text += "<th rowspan=\"2\">name</th>";
text += "<th rowspan=\"2\">last name</th>";
text += "<th rowspan=\"2\">Birth Date</th>";
text += "<th colspan=\"3\">Marks</th>";
text += "</tr>";
text += "<tr>";
text += "<th>math</th>";
text += "<th>physic</th>";
text += "<th>progr</th>";
text += "</tr>";
text += "</thead>";
for(let i = 0; i < Students.length; i++){
    text += "<tr>";
    text += "<td>" + i + "</td>";
    text += "<td>" + Students[i].id + "</td>";
    text += "<td>" + Students[i].name + "</td>";
    text += "<td>" + Students[i].last + "</td>";
    text += "<td>" + Students[i].birth + "</td>";
    text += "<td>" + Students[i].marks.math + "</td>";
    text += "<td>" + Students[i].marks.phys + "</td>";
    text += "<td>" + Students[i].marks.prog + "</td>";
    text += "</tr>";
}

text += "</table>";

//document.write(text);
document.getElementById("students").innerHTML = text;