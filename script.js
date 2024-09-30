function greeting() {
    let name = document.getElementById("nameBox");
    let out = document.getElementById("output");
    out.innerHTML = "hello " + name.value
}

var div = document.querySelector("#container"),
    frag = document.createDocumentFragment(),
    select = document.createElement("select");

select.options.add( new Option("Method1","AU", true, true) );
select.options.add( new Option("Method2","FI") );


frag.appendChild(select);
div.appendChild(frag);

