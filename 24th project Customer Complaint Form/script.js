function validateForm() {
    return {
      "full-name": fullName.value.trim() !== "",
      "email": email.checkValidity(),
      "order-no": /^2024\d{6}$/.test(orderNo.value.trim()),
      "product-code": /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/.test(productCode.value.trim()),
      "quantity": parseInt(quantity.value) > 0,
      "complaints-group": document.querySelectorAll('#complaints-group input[type="checkbox"]:checked').length > 0,
      "complaint-description": document.querySelector("#other-complaint").checked ? complaintDescription.value.trim().length >= 20 : true,
      "solutions-group": document.querySelector('#solutions-group input[type="radio"]:checked') !== null,
      "solution-description": document.querySelector("#other-solution").checked ? solutionDescription.value.trim().length >= 20 : true
    };
  }
  
  function isValid(validationResults) {
    return Object.values(validationResults).every(value => value === true);
  }
  
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  const orderNo = document.getElementById("order-no");
  const productCode = document.getElementById("product-code");
  const quantity = document.getElementById("quantity");
  const complaintsGroup = document.getElementById("complaints-group");
  const complaintDescription = document.getElementById("complaint-description");
  const solutionsGroup = document.getElementById("solutions-group");
  const solutionDescription = document.getElementById("solution-description");
  const form = document.getElementById("form");
  
  function toggleBorderColor(element, isValid) {
    element.style.borderColor = isValid ? "green" : "red";
  }
  
  fullName.addEventListener("change", () => {
    const isValid = fullName.value.trim() !== "";
    toggleBorderColor(fullName, isValid);
  });
  
  email.addEventListener("change", () => {
    const isValid = email.checkValidity();
    toggleBorderColor(email, isValid);
  });
  
  orderNo.addEventListener("change", () => {
    const isValid = /^2024\d{6}$/.test(orderNo.value.trim());
    toggleBorderColor(orderNo, isValid);
  });
  
  productCode.addEventListener("change", () => {
    const isValid = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/.test(productCode.value.trim());
    toggleBorderColor(productCode, isValid);
  });
  
  quantity.addEventListener("change", () => {
    const isValid = parseInt(quantity.value) > 0;
    toggleBorderColor(quantity, isValid);
  });
  
  document.querySelectorAll('#complaints-group input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      const anyChecked = document.querySelectorAll('#complaints-group input[type="checkbox"]:checked').length > 0;
      toggleBorderColor(complaintsGroup, anyChecked);
    });
  });
  
  complaintDescription.addEventListener("change", () => {
    const isValid = complaintDescription.value.trim().length >= 20 || !document.querySelector("#other-complaint").checked;
    toggleBorderColor(complaintDescription, isValid);
  });
  
  
  document.querySelectorAll('#solutions-group input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", () => {
      const selected = document.querySelector('#solutions-group input[type="radio"]:checked');
      toggleBorderColor(solutionsGroup, selected !== null);
    });
  });
  
  solutionDescription.addEventListener("change", () => {
    const isValid = solutionDescription.value.trim().length >= 20 || !document.querySelector("#other-solution").checked;
    toggleBorderColor(solutionDescription, isValid);
  });
  
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const validationResults = validateForm();
    const isFormValid = isValid(validationResults);
    
    if (isFormValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Form contains invalid fields!");
    }
  });
  