function addNewAQfield() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.setAttribute("rows", 2);

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewWEfield() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.setAttribute("rows", 2);

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}


function addNewstfield() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("stField");
  newNode.setAttribute("rows", 2);
  let stOb = document.getElementById("st");
  let stAddButtonOb = document.getElementById("stAddButton");

  stOb.insertBefore(newNode, stAddButtonOb);
}

function addNewskfield() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.setAttribute("rows", 2);
  let skOb = document.getElementById("sk");
  let skAddButtonOb = document.getElementById("skAddButton");

  skOb.insertBefore(newNode, skAddButtonOb);
}

function addNewprfield() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("prField");
  newNode.setAttribute("rows", 2);
  let prOb = document.getElementById("pr");
  let prAddButtonOb = document.getElementById("prAddButton");

  prOb.insertBefore(newNode, prAddButtonOb);
}


/// generating CV 

function generateCV() {
  let namefield = document.getElementById("namefield").value;

  let nameT2 = document.getElementById("nameT2");
  nameT2.innerHTML = namefield;

  let mailfield = document.getElementById("mailfield").value;
  let mailT1 = document.getElementById("mailT1");
  mailT1.innerHTML = mailfield;

  let contactfield = document.getElementById("contactfield").value;
  let contactT = document.getElementById("contactT");
  contactT.innerHTML = contactfield;

  let addressfield = document.getElementById("addressfield").value;
  let addressT = document.getElementById("addressT");
  addressT.innerHTML = addressfield;

  let schoolfield = document.getElementById("schoolfield").value;
  let scT = document.getElementById("scT");
  scT.innerHTML = schoolfield;

  let collegefield = document.getElementById("collegefield").value;
  let clgT = document.getElementById("clgT");
  clgT.innerHTML = collegefield;



  let linkedfield = document.getElementById("linkedfield").value;
  let lnT = document.getElementById("lnT");
  lnT.innerHTML = linkedfield;

  document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;


  let aqs = document.getElementsByClassName('aqField');
  let str1 = " ";
  var a;
  for (a of aqs) {
      str1 += `<li>${a.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;


  let wes = document.getElementsByClassName("weField");

  let str = ' ';

  let e;
  for (e of wes) {
      str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;


  let stre = document.getElementsByClassName("stField");

  let str2 = " ";

  let b;
  for (b of stre) {
      str2 = str2 + `<li> ${b.value} </li>`;
  }
  document.getElementById("stT").innerHTML = str2;



  let skl = document.getElementsByClassName("skField");

  let str3 = " ";

  let c;
  for (c of skl) {
      str3 = str3 + `<li> ${c.value} </li>`;
  }
  document.getElementById("skT").innerHTML = str3;


  let prj = document.getElementsByClassName("prField");

  let str4 = " ";

  let d;
  for (d of prj) {
      str4 = str4 + `<li> ${d.value} </li>`;
  }
  document.getElementById("prT").innerHTML = str4;



  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";

}

function printCV() {
  window.print();
}
