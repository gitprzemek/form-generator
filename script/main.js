const schema = [{
    fieldType: "SelectList",
    name: "title",
    multi: false,
    label: "Title",
    options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"]
  },
  {
    fieldType: "SelectList",
    name: "title",
    multi: true,
    label: "Title",
    options: ["XX", "ss", "aa", "Dr", "Madam", "Lord"]
  },
  {
    fieldType: "TextInput",
    placeholder: "First Name",
    label: "First Name",
    name: "firstName"
  },
  {
    fieldType: "NumberInput",
    placeholder: "Age",
    name: "age",
    label: "Age",
    minValue: 4
  },
  {
    fieldType: "TextInput",
    placeholder: "Last Name",
    label: "Last Name",
    name: "lastName"
  },
  {
    fieldType: "NumberInput",
    placeholder: "Age",
    name: "age",
    label: "Age",
    minValue: 0
  }
]


function loadObject() {
    const containerForm = `
    <form action="" class="form" id="form"></form>
    `
    document.body.innerHTML = containerForm;
    const formContainer = document.getElementById("form")
    
    for(let i= 0; i < schema.length; i++){
        if(schema[i].fieldType == "SelectList"){
            
            let select = `
            <label>Title</label>
            <select class="select" name="${schema[i].name}">
            </select>
            `
            formContainer.innerHTML += select;

            schema[i].options.forEach( item => {
                let selectCont = document.getElementsByClassName("select")[i];
                let option = `
                <option value="${item}">${item}</option>
                `
                selectCont.innerHTML += option;
            });

            let selectCont = document.getElementsByClassName("select")[i];
            if (schema[i].multi === true){
                selectCont.setAttribute("multiple", "true");
            }

        } else if (schema[i].fieldType == "TextInput"){
            let inputText = `
            <label for="">${schema[i].label}</label>
            <input name="${schema[i].name}" type="text" placeholder="${schema[i].placeholder}">
            `
            formContainer.innerHTML += inputText;

        }else if (schema[i].fieldType == "NumberInput"){
            let inputNum = `
            <label for="">${schema[i].label}</label>
            <input name="${schema[i].name}" type="number" placeholder="${schema[i].placeholder}" min="${schema[i].minValue}">
            `
            formContainer.innerHTML += inputNum;
        }
    }
         
};
loadObject();