    var myform =document.getElementById("myform");
myform.addEventListener("submit",
    function(e){
        e.preventDefault();
        if (document.getElementById("fname").value.length==0||document.getElementById("sname").value.length==0||document.getElementById("ename").value.length==0) {
            document.getElementById("error").innerText="Ensure all fields are set"
            
        } else {
            document.getElementById("error").innerText=""
        }
    });
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var n =1;
    var x =0;
    function addrow(){
        var addwer = document.getElementById("tabletop");
        var newwer= addwer.insertRow(n);

        list1[x] =document.getElementById("fname").value;

        list2[x] =document.getElementById("sname").value;

        list3[x] =document.getElementById("ename").value;

        var cel1 =newwer.insertCell(0);
        var cel2 =newwer.insertCell(1);
        var cel3 =newwer.insertCell(2);

        cel1.innerHTML = list1[x];
        cel2.innerHTML = list2[x];
        cel3.innerHTML = list3[x];

        list1[x] = "First name";
        list1[x] = "Second name";
        list1[x] = "Email";
        
        n++;
        x++;
    }