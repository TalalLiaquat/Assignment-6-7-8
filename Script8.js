function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Operation was successful!");
        } else {
          reject(new Error("Operation failed!"));
        }
      }, 1000); 
    });
  }
  
  
  simulateAsyncOperation(true)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });



function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const data = "Some data fetched from the server";
        resolve(data);
      }, 1000); 
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 1000); 
    });
  }
  

  fetchData()
    .then((fetchedData) => {
      console.log("Data fetched:", fetchedData);
      return processData(fetchedData);
    })
    .then((processedData) => {
      console.log("Data processed:", processedData);
    
      console.log("Final Result:", processedData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });