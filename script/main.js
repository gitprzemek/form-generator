const schema = [{
    fieldType: "SelectList",
    name: "title",
    multi: false,
    label: "Title",
    options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"]
  },
  {
    fieldType: "TextInput",
    placeholder: "First Name",
    label: "First Name",
    name: "firstName"
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
var textnode = document.createTextNode("Water"); 

function loadObject() {
    const containerForm = `
    <form action="" class="form" id="form"></form>
    `
    document.body.innerHTML = containerForm;
    
    
    const formContainer = document.getElementById("form")
    console.log(containerForm);
    console.log(schema[0]);
    
    for(let i= 0; i < schema.length; i++){
        if(schema[i].fieldType == "SelectList"){
        
            let select = `
            <label>Title</label>
            <select name="title">
                <option value="${schema[i].options[0]}">${schema[i].options[0]}</option>
                <option value="${schema[i].options[1]}">${schema[i].options[1]}</option>
                <option value="${schema[i].options[2]}">${schema[i].options[2]}</option>
                <option value="${schema[i].options[3]}">${schema[i].options[3]}</option>
                <option value="${schema[i].options[4]}">${schema[i].options[4]}</option>
                <option value="${schema[i].options[5]}">${schema[i].options[5]}</option>
              </select>
            `
            
            formContainer.innerHTML += select;
        } else if (schema[i].fieldType == "TextInput"){
            let inputText = `
            <label for="">${schema[i].label}</label>
            <input name="${schema[i].label}" type="${schema[i].label}" placeholder="${schema[i].label}">
            `
            formContainer.innerHTML += inputText;
        }else if (schema[i].fieldType == "NumberInput"){
            let inputNum = `
            <label for="">${schema[i].label}</label>
            <input name="${schema[i].label}" type="${schema[i].label}" placeholder="${schema[i].label}">
            `
            formContainer.innerHTML += inputNum;
        }
        

    }
    
         
};
loadObject();